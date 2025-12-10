"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useTranslationContext } from "@/i18n/client";
import { postLocale } from "@/i18n/cookie";
import { AnimatePresence, motion } from "motion/react";

type LanguageButtonProps = {
    size?: number;
    alignment?: "bottom-left" | "bottom-center" | "bottom-right";
};

export default function LanguageButton(props: LanguageButtonProps) {
    const size = props.size ?? 0;
    const pixels = size * 4;
    const alignment = props.alignment ?? "bottom-left";

    const translationContext = useTranslationContext();
    const locale = !translationContext.auto
        ? translationContext.locale
        : "auto";

    const [visible, setVisible] = useState<boolean>(false);
    const [hot, setHot] = useState<string>(locale);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const select = useCallback(async (which: string) => {
        setVisible(false);
        const response = await postLocale(which);
        if (typeof response.error !== "undefined")
            throw new Error(response.error!.message);
        window.location.reload();
    }, []);

    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current!.contains(event.target as Node)
            ) {
                setVisible(false);
            }
        };

        document.addEventListener("mousedown", clickHandler);

        return () => {
            document.removeEventListener("mousedown", clickHandler);
        };
    });

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                className="
                    px-2 rounded-sm
                    text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                    transition-colors
                    cursor-pointer
                "
                style={{ width: `${pixels}px`, height: `${pixels}px` }}
                onClick={() => setVisible(!visible)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            </button>

            <AnimatePresence>
                {visible && (
                    <motion.div
                        key="dropdown-menu"
                        ref={dropdownRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={(() => {
                            switch (alignment) {
                                case "bottom-left":
                                    return { originX: 1, originY: 0 };
                                case "bottom-center":
                                    return { originX: 0.5, originY: 0 };
                                case "bottom-right":
                                    return { originX: 0, originY: 0 };
                            }
                        })()}
                        transition={{ type: "tween", duration: 0.1 }}
                        className={[
                            "absolute mt-2",
                            "min-w-[225px]",
                            "rounded-sm",
                            "flex flex-col",
                            "outline-1 outline-gray-200",
                            "shadow-lg",
                            "py-2",

                            // select alignment
                            "top-[110%]",
                            (() => {
                                switch (alignment) {
                                    case "bottom-left":
                                        return "right-0";
                                    case "bottom-center":
                                        return "left-1/2 -translate-x-1/2";
                                    case "bottom-right":
                                        return "left-0";
                                }
                            })(),
                        ].join(" ")}
                    >
                        <Option
                            which={"auto"}
                            hot={"auto" === hot}
                            selected={"auto" === locale}
                            onClick={() => select("auto")}
                            onMouseEnter={() => setHot("auto")}
                        />

                        <Option
                            which={"en"}
                            hot={"en" === hot}
                            selected={"en" === locale}
                            onClick={() => select("en")}
                            onMouseEnter={() => setHot("en")}
                        />

                        <Option
                            which={"de"}
                            hot={"de" === hot}
                            selected={"de" === locale}
                            onClick={() => select("de")}
                            onMouseEnter={() => setHot("de")}
                        />

                        <Option
                            which={"uk"}
                            hot={"uk" === hot}
                            selected={"uk" === locale}
                            onClick={() => select("uk")}
                            onMouseEnter={() => setHot("uk")}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

type OptionProps = {
    which: string;
    hot: boolean;
    selected: boolean;

    onClick: () => void;
    onMouseEnter: () => void;
};

function Option({ which, hot, selected, onClick, onMouseEnter }: OptionProps) {
    const translations =
        useTranslationContext().translations["components"]["language-button"];

    return (
        <button
            className={[
                "flex! justify-between items-center",
                "text-left px-4 py-2",
                "transition-colors",
                "cursor-pointer",
                !hot ? "bg-white" : "bg-slate-100",
                "active:bg-slate-200",
            ].join(" ")}
            onClick={onClick}
            onMouseOver={onMouseEnter}
        >
            <span className="text-[12pt]">
                {translations[which]}
            </span>

            {selected && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                    />
                </svg>
            )}
        </button>
    );
}
