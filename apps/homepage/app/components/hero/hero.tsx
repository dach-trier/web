"use client";

import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { Spacing } from "@dach/ui";
import { usePageContext } from "@root/context";
import { useCustomIntersectionObserver } from "@root/hooks";

// prettier-ignore

const Logo = () => {
    const context = usePageContext();
    const ref = useRef(null);
    const inView = useCustomIntersectionObserver(ref);

    useEffect(() => context.setLogoInView(inView), [inView]);

    return <DachLogo ref={ref} className={styles["logo"]} />;
};

const Hero = () => {
    return (
        <div className={styles["hero"]}>
            <Logo />
            <Spacing vertical={40} />
            <h1>Українсько-німецький ферайн «Дах»</h1>
            <Spacing vertical={20} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pretium sapien risus, ut malesuada nisi facilisis quis
            </p>
            <Spacing vertical={32} />
            <div className={styles["button-group"]}>
                <button className={styles["contact-us"]}>
                    <PhoneIcon className={styles["phone-icon"]} />
                    <span>Зв'язатися</span>
                </button>

                <button className={styles["donate"]}>
                    <HeartIcon className={styles["heart-icon"]} />
                    <span>Підтримати</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
