"use client";

import { useState, useContext, createContext, ReactNode } from "react";

export type PageContextProps = {
    logoInView: boolean;
    setLogoInView(value: boolean): void;
    donationButtonInView: boolean;
    setDonationButtonInView(value: boolean): void;
};

const PageContext = createContext({} as PageContextProps);

export type PageContextProviderProps = {
    children?: ReactNode | undefined;
};

export function PageContextProvider(props: PageContextProviderProps) {
    const [logoInView, setLogoInView] = useState<boolean>(true);
    const [donationButtonInView, setDonationButtonInView] =
        useState<boolean>(true);

    return (
        <PageContext.Provider
            value={{
                logoInView,
                setLogoInView,
                donationButtonInView,
                setDonationButtonInView,
            }}
        >
            {props.children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    return useContext(PageContext)!;
}

export default PageContext;
