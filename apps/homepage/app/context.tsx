"use client";

import { useState, useContext, createContext, ReactNode } from "react";

export type PageContextProps = {
    logoInView: boolean;
    setLogoInView(value: boolean): void;
    contactButtonInView: boolean;
    setContactButtonInView(value: boolean): void;
    donationButtonInView: boolean;
    setDonationButtonInView(value: boolean): void;
};

const PageContext = createContext({} as PageContextProps);

export type PageContextProviderProps = {
    children?: ReactNode | undefined;
};

// prettier-ignore

export function PageContextProvider(props: PageContextProviderProps) {
    const [logoInView,           setLogoInView]           = useState(true);
    const [contactButtonInView,  setContactButtonInView]  = useState(true);
    const [donationButtonInView, setDonationButtonInView] = useState(true);

    return (
        <PageContext.Provider
            value={{
                logoInView,
                setLogoInView,
                contactButtonInView,
                setContactButtonInView,
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
