"use client";

import { RefObject, useState, useMemo, useEffect } from "react";

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

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => setIsIntersecting(entry!.isIntersecting),
                { rootMargin, threshold }
            ),
        [ref, rootMargin, threshold]
    );

    useEffect(() => {
        if (!ref.current) return;
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}
