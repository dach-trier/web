"use client";

import { ReactNode, RefObject, useEffect, useCallback, useMemo } from "react";
import { useDropdown } from "@/ui/dropdown/context";
import { AnimatePresence, motion } from "motion/react";

type Props = {
    children?: ReactNode;
    position?: string;
    width?: number | string;
    height?: number | string;
    spacing?: number;
};

type Position = {
    x: "left" | "center" | "right";
    y: "top" | "bottom";
};

function parsePosition(positionString?: string): Position {
    const tokens = positionString ? positionString.split(" ") : [];
    let position: Position = { x: "center", y: "bottom" };

    if (tokens.length >= 1) {
        position.y = parsePositionY(tokens[0]!);
    }

    if (tokens.length == 2) {
        position.x = parsePositionX(tokens[1]!);
    }

    if (tokens.length > 2) {
        throw new Error("invalid position string");
    }

    return position;
}

function parsePositionX(x: string) {
    if (x !== "left" && x !== "center" && x !== "right") {
        throw new Error("invalid position string");
    }

    return x;
}

function parsePositionY(y: string) {
    if (y !== "top" && y !== "bottom") {
        throw new Error("invalid position string");
    }

    return y;
}

export default function DropdownMenu({
    children,
    width = "auto",
    height = "auto",
    spacing = 5,
    ...props
}: Props) {
    const { isOpen, close, menuRef, triggerRef } = useDropdown();

    /** preferred position */
    const position = useMemo(
        () => parsePosition(props.position),
        [props.position],
    );

    /**
     * Updates the menu's stylesheets to position itself relative
     * to the dropdown trigger component.
     */
    const setPosition = (position: Position) => {
        if (!menuRef.current) {
            return;
        }

        const menu = menuRef.current;

        menu.style.removeProperty("top");
        menu.style.removeProperty("bottom");
        menu.style.removeProperty("left");
        menu.style.removeProperty("right");
        menu.style.removeProperty("translate");

        switch (position.y) {
            case "top":
                menu.style.bottom = `calc(100% + ${spacing}px)`;
                break;

            case "bottom":
                menu.style.top = `calc(100% + ${spacing}px)`;
                break;
        }

        switch (position.x) {
            case "left":
                menu.style.left = "0";
                break;

            case "center":
                menu.style.left = "50%";
                menu.style.translate = "-50% 0";
                break;

            case "right":
                menu.style.right = "0";
                break;
        }

        menu.style.transformOrigin = `${position.y === "top" ? "bottom" : "top"} ${position.x}`;
    };

    /**
     * Checks whether the menu is fully visible within the viewport.
     * Ignores CSS transforms.
     */
    const fits = () => {
        if (!window || !menuRef.current) return;

        const menu = menuRef.current;
        const transform = menu.style.transform;
        menu.style.removeProperty("transform");
        const rect = menu.getBoundingClientRect();
        menu.style.transform = transform;
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    /**
     * Determines the optimal position for the menu relative
     * to the trigger element.
     */
    const reposition = useCallback(() => {
        if (!menuRef.current) return;

        setPosition(position);
        if (fits()) return;

        setPosition({
            x: position.x,
            y: position.y === "top" ? "bottom" : "top",
        });
        if (fits()) return;

        setPosition(position);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        reposition();

        window.addEventListener("resize", reposition);
        window.addEventListener("scroll", reposition);

        const detectOutsideClick = (e: MouseEvent) => {
            if (
                menuRef.current &&
                triggerRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                !triggerRef.current.contains(e.target as Node)
            )
                close();
        };

        window.addEventListener("mousedown", detectOutsideClick);

        return () => {
            window.removeEventListener("resize", reposition);
            window.removeEventListener("scroll", reposition);
            window.removeEventListener("mousedown", detectOutsideClick);
        };
    }, [isOpen, reposition]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={menuRef as RefObject<HTMLDivElement>}
                    key="dropdown-menu"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "tween", duration: 0.1 }}
                    className="
                        absolute z-1000
                        flex flex-col px-2 py-2
                        border border-black rounded-sm
                        bg-white shadow-lg shadow-gray-300
                    "
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
