"use client";

import React from "react";
import styles from "./styles.module.css";
import { UploadIcon } from "@dach/svg";

export interface UploadProps extends React.HTMLAttributes<HTMLDivElement> {}

const Upload = (props: UploadProps) => {
    const className = [styles["upload"], props.className ?? ""].join(" ");

    return (
        <div {...props} className={className}>
            <UploadIcon className={styles["upload-icon"]} />
            <label>Datei hochladen</label>
        </div>
    );
};

export default Upload;
