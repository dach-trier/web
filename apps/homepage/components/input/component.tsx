"use client";

import { RefObject, useImperativeHandle } from "react";

export interface InputHandle {}

export interface InputProps {
    ref?: RefObject<InputHandle> | undefined;
    className?: string | undefined;
}

const Input = (props: InputProps) => {
    const { ref, className } = props;

    useImperativeHandle(ref, () => {
        return {};
    }, []);

    return <input className={className} />;
};

export default Input;
