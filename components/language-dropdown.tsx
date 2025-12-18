"use client";

import { useRef } from "react";

import Dropdown, { DropdownRef } from "@/ui/dropdown";

import Trigger from "@/components/language-dropdown/trigger";
import Menu from "@/components/language-dropdown/menu";
import Item from "@/components/language-dropdown/item";

type Props = {
    variant: "solid";
    width?: number | string;
    height?: number | string;
    x?: "left" | "center" | "right";
    y?: "top" | "bottom";
};

export default function LanguageDropdown({
    variant,
    width,
    height,
    x,
    y,
}: Props) {
    const dropdownRef = useRef<DropdownRef>(null);

    return (
        <Dropdown ref={dropdownRef} spacing={15} {...{ x, y, width, height }}>
            <Trigger variant={variant} width="100%" height="100%" />
            <Menu onSelection={() => dropdownRef.current?.close()}>
                <Item locale="en" />
                <Item locale="de" />
                <Item locale="uk" />
            </Menu>
        </Dropdown>
    );
}
