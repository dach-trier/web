import React, { MouseEvent } from "react";

import Globe from "@/icons/globe";
import Button from "@/ui/button";

type SolidProps = {
    width?: number | string;
    height?: number | string;
    onClick?(event: MouseEvent): void;
};

const Solid = React.forwardRef<HTMLButtonElement, SolidProps>(
    ({ width, height, onClick }, ref) => {
        return (
            <Button
                ref={ref}
                width={width}
                height={height}
                radius={4}
                padding={8}
                foregroundColor="white"
                backgroundColor="blue"
                onClick={onClick}
            >
                <Globe variant="outline" />
            </Button>
        );
    },
);

type Props = { variant: "solid" } & SolidProps;

const Trigger = React.forwardRef<HTMLButtonElement, Props>(
    ({ variant, ...props }, ref) => {
        switch (variant) {
            case "solid":
                return <Solid ref={ref} {...props} />;
        }
    },
);

export default Trigger;
