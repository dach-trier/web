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

    return (
        <div ref={ref} className={styles["logo"]}>
            <DachLogo />
            <Spacing vertical={8} />
            <span className={styles["letters"]}>
                {[..."DACH"].map((letter, i) => (
                    <span key={i}>{letter}</span>
                ))}
            </span>
        </div>
    )
};

const Hero = () => {
    return (
        <div className={styles["hero"]}>
            <Logo />

            <p className={styles["slogan"]}>
                Культурний простір об'єднання та інтеграції зростаючого
                покоління
            </p>

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
