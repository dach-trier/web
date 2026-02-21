"use client";

import styles from "./styles.module.css";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { Spacing } from "@dach/ui";
import { usePageContext } from "@root/context";
import { MotionList } from "./components";

const Logo    = (props: any) => <DachLogo  className={styles["logo"]}       {...props} />
const Donate  = (props: any) => <HeartIcon className={styles["donate"]}     {...props} />
const Contact = (props: any) => <PhoneIcon className={styles["contact-us"]} {...props} />

const Header = () => {
    const { logoInView } = usePageContext();

    return (
        <MotionList className={styles["header"]}>
            {!logoInView && <Logo key="logo" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}/>}
            {!logoInView && <Spacing horizontal={32} />}

            <div key="links" className={styles["links"]}>
                <span>Арт Майстерня</span>
                <span>Берегиня</span>
                <span>Табір</span>
                <span>Музичний Бенд</span>
            </div>

            {/* Special spacing applied on smaller screens to separate the logo from the buttons */}
            <div className={styles["spacing"]} />

            {!logoInView && <Spacing horizontal={32} />}
            {!logoInView && <Donate  key="donate" />}
            {!logoInView && <Spacing horizontal={24} />}
            {!logoInView && <Contact key="contact" />}
        </MotionList>
    );
};

export default Header;
