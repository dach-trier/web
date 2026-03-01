import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useFade } from "@dach/utils";

/**
 * TODO
 */
const MotionList = ({ children, className }: any) => {
    const [fadeIn, fadeOut] = useFade();

    return (
        <Flipper flipKey={children} className={className}>
            {React.Children.map(
                children,
                (child, i) =>
                    React.isValidElement(child) && (
                        <Flipped
                            flipId={child.key?.toString() ?? i}
                            onAppear={(element) => fadeIn(element, 300)}
                            onExit={async (element, _, removeElement) => {
                                await fadeOut(element, 300);
                                removeElement();
                            }}
                        >
                            {child}
                        </Flipped>
                    ),
            )}
        </Flipper>
    );
};

export default MotionList;
