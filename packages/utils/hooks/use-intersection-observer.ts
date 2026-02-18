"use client";

import { RefObject, useState, useMemo, useEffect } from "react";

export default function useIntersectionObserver<T extends HTMLElement>(
    ref: RefObject<T | null>
) {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry!.isIntersecting)
            ),
        [ref]
    );

    useEffect(() => {
        if (!ref.current) return;
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}
