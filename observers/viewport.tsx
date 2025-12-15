"use client";

import {
    useEffect,
    useState,
    ReactNode,
    useContext,
    createContext,
} from "react";

type Viewport = {
    innerWidth: number;
    innerHeight: number;
};

const ViewportContext = createContext<Viewport | undefined>(undefined);

type ViewportObserverProps = {
    children: ReactNode;
};

export function useViewport() {
    return useContext(ViewportContext);
}

export function ViewportObserver({ children }: ViewportObserverProps) {
    const [viewport, setViewport] = useState<Viewport | undefined>(undefined);

    useEffect(() => {
        const resizeHandler = () => {
            setViewport({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        };

        // init viewport
        resizeHandler();

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <ViewportContext.Provider value={viewport}>
            {children}
        </ViewportContext.Provider>
    );
}
