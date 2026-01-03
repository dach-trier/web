import React from "react";

const CarouselSlide = (props: React.ComponentPropsWithRef<"div">) => {
    const { className, ...rest } = props;
    return (
        <div className={`embla__slide ${className}`} {...rest} />
    );
};

export default CarouselSlide;
