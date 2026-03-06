import { ReactNode } from "react";

export type ParagraphSize = "small" | "normal" | "medium" | "large";

export interface ParagraphProps {
    size?: ParagraphSize | undefined;
    children?: ReactNode | undefined;
}

const Paragraph = (props: ParagraphProps) => {
    const { size, ...rest } = props;

    return <p className={`paragraph-${size}`} {...rest} />;
};

export default Paragraph;
