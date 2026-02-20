"use client";

import styles from "./styles.module.css";
import { DachLogo, PhoneIcon, HeartIcon } from "@dach/svg";
import { usePageContext } from "@root/context";

const Header = () => {
    const pageContext = usePageContext();

    return (
        <div className={styles["header"]}>
            <div>
                <DachLogo
                    style={{ opacity: pageContext.logoInView ? 0 : 1 }}
                    className={styles["logo"]}
                />
            </div>

            <div className={styles["links"]}>
                <span>Арт Майстерня</span>
                <span>Берегиня</span>
                <span>Табір</span>
                <span>Музичний Бенд</span>
            </div>

            <div>
                <HeartIcon
                    className={styles["donate"]}
                    style={{
                        opacity: pageContext.donationButtonInView ? 0 : 1,
                    }}
                />

                <PhoneIcon
                    className={styles["contact-us"]}
                    style={{
                        opacity: pageContext.contactButtonInView ? 0 : 1,
                    }}
                />

            </div>
        </div>
    );
};

export default Header;
