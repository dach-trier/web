import React, { MouseEvent } from "react";
import { GlobeIcon } from "@dach/svg";

type Props = {
    width?: number | string;
    height?: number | string;
    onClick?(event: MouseEvent): void;
};

const Trigger = React.forwardRef<HTMLButtonElement, Props>(
    ({ width, height, onClick }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                style={{ width, height }}
                className="cursor-pointer"
            >
                <GlobeIcon fill="oklch(62.3% 0.214 259.815)" />
            </button>
        );
    }
);

export default Trigger;
