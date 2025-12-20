import React, { ReactNode } from "react";

type Props = { children?: ReactNode };

export default function Screen({ children }: Props) {
    const child = React.Children.only(children);
    return <div className="w-screen h-screen">{child}</div>;
}
