"use client";

import { ReactNode, RefObject, createContext, useContext } from "react";

// prettier-ignore
type DropdownContextType = {
    isOpen: boolean;
    toggle: () => void;
    open:   () => void;
    close:  () => void;

    triggerRef: RefObject<HTMLElement | null>,
    menuRef: RefObject<HTMLElement | null>,
}

const DropdownContext = createContext<DropdownContextType | undefined>(
    undefined,
);

export function useDropdown() {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Dropdown components must be used within a <Dropdown>");
    }
    return context;
}

type DropdownContextProviderProps = DropdownContextType & {
    children: ReactNode;
};

export function DropdownContextProvider({
    children,
    ...props
}: DropdownContextProviderProps) {
    return (
        <DropdownContext.Provider value={props}>
            {children}
        </DropdownContext.Provider>
    );
}
