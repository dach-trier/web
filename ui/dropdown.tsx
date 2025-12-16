"use client";

import React, { ReactNode, useState, useRef } from "react";
import { DropdownContextProvider } from "@/ui/dropdown/context";

type Props = {
    children: [ReactNode, ReactNode];
};

export default function Dropdown({ children }: Props) {
    // menu state

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    // children

    const [trigger, menu] = React.Children.toArray(children);

    const triggerRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLElement | null>(null);

    return (
        <DropdownContextProvider
            isOpen={isOpen}
            toggle={toggle}
            open={open}
            close={close}
            triggerRef={triggerRef}
            menuRef={menuRef}
        >
            <div className="relative">
                {trigger}
                {menu}
            </div>
        </DropdownContextProvider>
    );
}
