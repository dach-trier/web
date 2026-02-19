"use client";

import styles from "./styles.module.css";
import { DachLogo, HeartIcon } from "@dach/svg";
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
                    width="30px"
                    fill="red"
                    stroke="red"
                    style={{
                        opacity: pageContext.donationButtonInView ? 0 : 1,
                    }}
                />
            </div>
        </div>
    );
};

export default Header;
