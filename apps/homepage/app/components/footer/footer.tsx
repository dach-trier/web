import styles from "./styles.module.css";

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["divider"]} />

            <div className={styles["credit"]}>
                Designed and developed by{" "}
                <a href="https://github.com/hiegz" target="_blank">
                    @hiegz
                </a>
            </div>

            <div className={styles["legal"]}>Дивитися Статут</div>

            <div className={styles["copyright"]}>
                <span className="relative text-[16px] top-px mr-0.5">©</span>{" "}
                {new Date().getFullYear()} «DACH» e.V. Trier. All Rights
                Reserved.
            </div>
        </div>
    );
};

export default Footer;
