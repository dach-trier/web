import styles from "./styles.module.css";

// prettier-ignore

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["credit"]}>
                Designed and developed by <a href="https://github.com/hiegz" target="_blank">@hiegz</a>
                <br /> <br />
                Copyright (c) {(new Date()).getFullYear()} «DACH» e.V. Trier. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
