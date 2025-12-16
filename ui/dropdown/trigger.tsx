"use client";

import React, { ReactElement, RefObject } from "react";
import { useDropdown } from "@/ui/dropdown/context";

type Trigger = ReactElement<TriggerProps>;

type TriggerProps = {
    ref: RefObject<HTMLElement | null>;
    onClick?: React.MouseEventHandler;
};

type Props = {
    children: Trigger;
};

export default function DropdownTrigger({ children }: Props) {
    const child = React.Children.only(children);

    const { toggle, triggerRef } = useDropdown();

    return React.cloneElement(child, {
        ref: triggerRef,
        onClick: (...args) => {
            if (child.props.onClick) child.props.onClick?.(...args);
            toggle();
        },
    });
}
