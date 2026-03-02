import styles from "./styles.module.css";
import { CopyrightIcon, DocumentIcon } from "@dach/svg";

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["legal"]}>
                <div className={styles["copyright"]}>
                    <CopyrightIcon className={styles["copyright-icon"]} />
                    {new Date().getFullYear()} «DACH» e.V. Trier. All Rights
                    Reserved.
                </div>

                <a className={styles["charter"]} target="_blank">
                    <DocumentIcon className={styles["document-icon"]} />
                    Статут
                </a>
            </div>

            <div className={styles["credit"]}>
                Designed and developed by{" "}
                <a href="https://github.com/hiegz" target="_blank">
                    @hiegz
                </a>
            </div>
        </div>
    );
};

export default Footer;
