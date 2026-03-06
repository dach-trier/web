import { ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
    level: HeadingLevel;
    children?: ReactNode;
}

const Heading = (props: HeadingProps) => {
    const { level, ...rest } = props;

    switch (level) {
        case 1:
            return <h1 className="heading-1" {...rest} />;
        case 2:
            return <h2 className="heading-2" {...rest} />;
        case 3:
            return <h3 className="heading-3" {...rest} />;
        case 4:
            return <h4 className="heading-4" {...rest} />;
        case 5:
            return <h5 className="heading-5" {...rest} />;
        case 6:
            return <h6 className="heading-6" {...rest} />;
    }
};

export default Heading;
