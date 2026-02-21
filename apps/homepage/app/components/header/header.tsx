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
    const { heroInView } = usePageContext();

    return (
        <MotionList className={styles["header"]}>
            {!heroInView && <Logo key="logo" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}/>}
            {!heroInView && <Spacing horizontal={32} />}

            <div key="links" className={styles["links"]}>
                <span>Арт Майстерня</span>
                <span>Берегиня</span>
                <span>Табір</span>
                <span>Музичний Бенд</span>
            </div>

            {/* Special spacing applied on smaller screens to separate the logo from the buttons */}
            <div className={styles["spacing"]} />

            {!heroInView && <Spacing horizontal={32} />}
            {!heroInView && <Donate  key="donate" />}
            {!heroInView && <Spacing horizontal={24} />}
            {!heroInView && <Contact key="contact" />}
        </MotionList>
    );
};

export default Header;
