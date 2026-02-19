import { useIntersectionObserver } from "@dach/utils";
import { RefObject } from "react";

/**
 * Custom Intersection Observer hook that accounts
 * for a sticky <Header /> offset.
 */
export default function useCustomIntersectionObserver<T extends HTMLElement>(
    ref: RefObject<T | null>
) {
    return useIntersectionObserver(ref, {
        initial: true,
        rootMargin: "-48px 0px 0px 0px",
    });
}
