"use client";

import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { usePageContext } from "@root/context";
import { useCustomIntersectionObserver } from "@root/hooks";

// prettier-ignore

const Hero = () => {
    const pageContext = usePageContext();
    const ref         = useRef(null);
    const inView      = useCustomIntersectionObserver(ref);

    useEffect(() => pageContext.setHeroInView(inView), [inView]);

    return (
        <div ref={ref} className={styles["hero"]}>
            <DachLogo className={styles["logo"]} />

            <div className="h-10" />

            <h1>Українсько-німецький ферайн «Дах»</h1>

            <div className="h-5" />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pretium sapien risus, ut malesuada nisi facilisis quis
            </p>

            <div className="h-8" />

            <div className={styles["button-group"]}>
                <button className={styles["contact-us"]}>
                    <PhoneIcon className={styles["phone-icon"]}/>
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
