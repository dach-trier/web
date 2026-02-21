"use client";

import { useState, useContext, createContext, ReactNode } from "react";

export type PageContextProps = {
    logoInView: boolean;
    setLogoInView(logoInView: boolean): void;
};

const PageContext = createContext({} as PageContextProps);

export type PageContextProviderProps = {
    children?: ReactNode | undefined;
};

// prettier-ignore

export function PageContextProvider(props: PageContextProviderProps) {
    const [logoInView, setLogoInView] = useState(true);

    return (
        <PageContext.Provider
            value={{logoInView, setLogoInView}}
        >
            {props.children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    return useContext(PageContext)!;
}

export default PageContext;
