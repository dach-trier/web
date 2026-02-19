"use client";

import { RefObject, useState, useEffect } from "react";

type Props = {
    initial?: boolean | undefined;
    rootMargin?: string | undefined;
    threshold?: number | undefined;
};

export default function useIntersectionObserver<T extends HTMLElement>(
    ref: RefObject<T | null>,
    { initial = false, rootMargin = "0px", threshold = 0.0 }: Props = {}
) {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(initial);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry!.isIntersecting),
            { rootMargin, threshold }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, rootMargin, threshold]);

    return isIntersecting;
}
