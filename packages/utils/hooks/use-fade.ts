"use client";

import { RefObject, useRef } from "react";

function useControllers() {
    const controllers = useRef<WeakMap<HTMLElement, AbortController>>(null);

    if (!controllers.current)
        controllers.current = new WeakMap<HTMLElement, AbortController>();

    return controllers as RefObject<WeakMap<HTMLElement, AbortController>>;
}

// prettier-ignore

type Pair<T> = [T, T];
type FadePair = Pair<(element: HTMLElement, duration: number) => Promise<void>>;

/**
 * TODO
 */
export default function useFade(): FadePair {
    const controllers = useControllers();

    /** fade(element, 1, duration) */
    const fadeIn = (element: HTMLElement, duration: number) =>
        fade(element, 1, duration);

    /** fade(element, 0, duration) */
    const fadeOut = (element: HTMLElement, duration: number) =>
        fade(element, 0, duration);

    /**
     * TODO
     */
    const fade = (element: HTMLElement, to: 0 | 1, duration: number) => {
        const prev = controllers.current.get(element);
        if (prev) {
            prev.abort();
        }
        controllers.current.set(element, new AbortController());

        const from = parseFloat(
            window.getComputedStyle(element).getPropertyValue("opacity"),
        );
        const start = performance.now();

        return new Promise<void>((resolve, reject) => {
            function tick(time: number) {
                if (controllers.current.get(element)!.signal.aborted) {
                    reject(new Error("signal aborted"));
                    return;
                }

                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                const value = from + (to - from) * progress;

                element.style.opacity = `${value}`;

                if (progress < 1) requestAnimationFrame(tick);
                else resolve();
            }

            requestAnimationFrame(tick);
        });
    };

    return [fadeIn, fadeOut] as FadePair;
}
