"use client";

import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { DachLogo, HeartIcon } from "@dach/svg";
import { usePageContext } from "@root/context";
import { useCustomIntersectionObserver } from "@root/hooks";

// prettier-ignore

const Hero = () => {
    const pageContext          = usePageContext();
    const logoRef              = useRef(null);
    const buttonGroupRef       = useRef(null);
    const logoInView           = useCustomIntersectionObserver(logoRef);
    const donationButtonInView = useCustomIntersectionObserver(buttonGroupRef);

    useEffect(() => pageContext.setLogoInView(logoInView), [logoInView]);
    useEffect(() => pageContext.setDonationButtonInView(donationButtonInView), [donationButtonInView]);

    return (
        <div className={styles["hero"]}>
            <DachLogo ref={logoRef} className={styles["logo"]} />

            <div className="h-10" />

            <h1>Українсько-німецький ферайн «Дах»</h1>

            <div className="h-5" />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pretium sapien risus, ut malesuada nisi facilisis quis
            </p>

            <div className="h-8" />

            <div ref={buttonGroupRef} className={styles["button-group"]}>
                <button>Зв'язатися з нами</button>
                <button>
                    <HeartIcon className={styles["heart-icon"]} />
                    <span>Підтримати</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
