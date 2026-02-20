"use client";

import styles from "./styles.module.css";
import React from "react";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { usePageContext } from "@root/context";
import { useFade } from "@dach/utils";
import { Flipper, Flipped } from "react-flip-toolkit";

const Header = () => {
    return (
        <Items className={styles["header"]}>
            <Item id="dach" redundant>
                <DachLogo
                    className={styles["logo"]}
                    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                />
            </Item>

            <Item id="links">
                <div className={styles["links"]}>
                    <span>Арт Майстерня</span>
                    <span>Берегиня</span>
                    <span>Табір</span>
                    <span>Музичний Бенд</span>
                </div>
            </Item>

            <Item id="donate" redundant>
                <HeartIcon className={styles["donate"]} />
            </Item>

            <Item id="contact-us" redundant>
                <PhoneIcon className={styles["contact-us"]} />
            </Item>
        </Items>
    );
};

const Items = ({ children, className }: any) => {
    const { heroInView } = usePageContext();

    return (
        <Flipper flipKey={heroInView}>
            <div className={className}>{children}</div>
        </Flipper>
    );
};

const Item = (props: any) => {
    const { id, redundant, children } = props;
    const [fadeIn, fadeOut] = useFade();

    if (redundant && !usePageContext().heroInView) {
        return;
    }

    return (
        <Flipped
            flipId={id}
            onAppear={async (element) => {
                await fadeIn(element, 200);
            }}
            onExit={async (element, _, removeElement) => {
                await fadeOut(element, 200);
                removeElement();
            }}
        >
            {(flippedProps) => React.cloneElement(children, flippedProps)}
        </Flipped>
    );
};

export default Header;
