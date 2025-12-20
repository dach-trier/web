import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    color?: string;
    size?: number;
    weight?: number;
    align?: "left" | "right" | "center" | "justify";
};

export default function Text({ children, color, size, weight, align }: Props) {
    const child = React.Children.toArray(children)[0];

    if (typeof child !== "number" && typeof child !== "string") {
        throw new Error("expected string or number, found " + typeof child);
    }

    return (
        <p
            style={{
                textAlign: align,
                fontSize: size,
                fontWeight: weight,
                color,
            }}
        >
            {child}
        </p>
    );
}
