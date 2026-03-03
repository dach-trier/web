import React from "react";
import styles from "./styles.module.css";
import { InputType, getInputLabel } from "./type";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    type: InputType;
    required?: boolean | undefined;
}

const Input = (props: InputProps) => {
    const { type, required, className: externalClassName, ...rest } = props;
    const internalClassName = styles["input"];
    const className = [externalClassName, internalClassName].join(" ");

    return (
        <div className={className} {...rest} data-type={type}>
            <label className={styles["heading"]}>
                {getInputLabel(type)} {required ? "*" : ""}
            </label>
            <Switch type={type} />
        </div>
    );
};

const Switch = ({ type }: { type: InputType }) => {
    switch (type) {
        case "first-name":
        case "last-name":
            return <input type="text" />;
        case "email":
        case "phone-number":
            return <input type={type} />;
        case "message":
            return <textarea />;
    }
};

export default Input;
