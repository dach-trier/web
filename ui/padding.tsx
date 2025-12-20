import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;

    x?: number | string;
    left?: number | string;
    right?: number | string;

    y?: number | string;
    top?: number | string;
    bottom?: number | string;
};

export default function Padding({
    x,
    y,
    top = y,
    bottom = y,
    left = x,
    right = x,
    children,
}: Props) {
    const child = React.Children.only(children);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                paddingTop: top,
                paddingBottom: bottom,
                paddingLeft: left,
                paddingRight: right,
            }}
        >
            {child}
        </div>
    );
}
