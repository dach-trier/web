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

type OutlineProps = {
    width?: number | string;
    height?: number | string;
    onClick?(event: MouseEvent): void;
};

const Outline = React.forwardRef<HTMLButtonElement, SolidProps>(
    ({ width, height, onClick }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                style={{ width, height }}
                className="cursor-pointer"
            >
                <Globe variant="outline" stroke="black" />
            </button>
        );
    },
);

type Props =
    | ({ variant: "solid" } & SolidProps)
    | ({ variant: "outline" } & OutlineProps);

const Trigger = React.forwardRef<HTMLButtonElement, Props>(
    ({ variant, ...props }, ref) => {
        switch (variant) {
            case "solid":
                return <Solid ref={ref} {...props} />;

            case "outline":
                return <Outline ref={ref} {...props} />;
        }
    },
);

export default Trigger;
