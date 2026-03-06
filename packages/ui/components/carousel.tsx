"use client";

import { ComponentPropsWithoutRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Props = ComponentPropsWithoutRef<"div"> & {
    align?: "start" | "center" | "end";
};

const Carousel = (props: Props) => {
    const {
        style = {},
        className,
        children,
        align = "center",
        ...restOfProps
    } = props;
    const { overflow = "hidden", ...restOfStyle } = style;
    const [emblaRef] = useEmblaCarousel({ loop: true, align });

    return (
        <div
            ref={emblaRef}
            className={`embla ${className}`}
            style={{ overflow, ...restOfStyle }}
            {...restOfProps}
        >
            <div className="embla__container flex">{children}</div>
        </div>
    );
};

export default Carousel;
