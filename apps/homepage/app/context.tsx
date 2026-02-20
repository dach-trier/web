"use client";

import { useState, useContext, createContext, ReactNode } from "react";

export type PageContextProps = {
    heroInView: boolean;
    setHeroInView(heroInView: boolean): void;
};

const PageContext = createContext({} as PageContextProps);

export type PageContextProviderProps = {
    children?: ReactNode | undefined;
};

// prettier-ignore

export function PageContextProvider(props: PageContextProviderProps) {
    const [heroInView, setHeroInView] = useState(true);

    return (
        <PageContext.Provider
            value={{heroInView, setHeroInView}}
        >
            {props.children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    return useContext(PageContext)!;
}

export default PageContext;
