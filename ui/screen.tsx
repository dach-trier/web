import React, { ReactNode } from "react";
import Container from "@/ui/container";

type Props = { children?: ReactNode };

export default function Screen({ children }: Props) {
    const child = React.Children.only(children);

    return (
        <Container width="100vw" height="100vh">
            {child}
        </Container>
    );
}
