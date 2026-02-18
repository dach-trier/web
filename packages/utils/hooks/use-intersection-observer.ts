"use client";

import { RefObject, useState, useMemo, useEffect } from "react";

export default function useIntersectionObserver(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry!.isIntersecting)
            ),
        [ref]
    );

    useEffect(() => {
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return isIntersecting;
}
