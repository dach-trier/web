"use client";

import React, { ReactNode, useState, useMemo, MouseEvent } from "react";

import Shade from "@/ui/shade";
import Color from "@/ui/color";
import State from "@/ui/state";
import blend from "@/ui/blend";

type ButtonProps = {
    children: ReactNode;

    width?: number | string;
    height?: number | string;
    radius?: number | string;
    padding?: number | string;

    foregroundColor?: Color;
    foregroundShade?: Shade;
    backgroundColor?: Color;
    backgroundShade?: Shade;

    onClick?(event: MouseEvent): void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            children,
            width,
            height,
            radius,
            padding,
            onClick,
            foregroundColor = "black",
            foregroundShade = "normal",
            backgroundColor = "white",
            backgroundShade = "normal",
        } = props;

        const [state, setState] = useState<State>("cold");

        const foreground = useMemo(
            () => blend({ color: foregroundColor, shade: foregroundShade }),
            [foregroundColor, foregroundShade],
        );

        const background = useMemo(
            () =>
                blend({
                    color: backgroundColor,
                    shade: backgroundShade,
                    state,
                }),
            [backgroundColor, backgroundShade, state],
        );

        return (
            <button
                ref={ref}
                className="cursor-pointer select-none transition-colors"
                onMouseLeave={() => setState("cold")}
                onMouseEnter={() => setState("hot")}
                onMouseDown={() => setState("active")}
                onMouseUp={() => setState("hot")}
                onClick={onClick}
                style={{
                    width: width,
                    height: height,
                    color: foreground,
                    backgroundColor: background,
                    borderRadius: radius,
                    padding: padding,
                }}
            >
                {children}
            </button>
        );
    },
);

export default Button;
