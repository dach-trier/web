"use client";

import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { usePageContext } from "@root/context";
import { useCustomIntersectionObserver } from "@root/hooks";

// prettier-ignore

const Hero = () => {
    const pageContext          = usePageContext();
    const logoRef              = useRef(null);
    const contactButtonRef     = useRef(null);
    const donationButtonRef    = useRef(null);
    const logoInView           = useCustomIntersectionObserver(logoRef);
    const contactButtonInView  = useCustomIntersectionObserver(contactButtonRef);
    const donationButtonInView = useCustomIntersectionObserver(donationButtonRef);

    useEffect(() => pageContext.setLogoInView(logoInView), [logoInView]);
    useEffect(() => pageContext.setContactButtonInView(contactButtonInView), [contactButtonInView]);
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

            <div className={styles["button-group"]}>
                <button ref={contactButtonRef} className={styles["contact-us"]}>
                    <PhoneIcon className={styles["phone-icon"]}/>
                    <span>Зв'язатися</span>
                </button>
                <button ref={donationButtonRef} className={styles["donate"]}>
                    <HeartIcon className={styles["heart-icon"]} />
                    <span>Підтримати</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
