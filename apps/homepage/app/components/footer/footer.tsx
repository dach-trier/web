import styles from "./styles.module.css";
import { InstagramIcon, FacebookIcon } from "@dach/svg";

// prettier-ignore

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["credit"]}>
                Designed and developed by <a href="https://github.com/hiegz" target="_blank">@hiegz</a>
            </div>

            <div>
                <div className={styles["copyright"]}>
                    <span className="relative text-lg top-px mr-0.5">©</span> {(new Date()).getFullYear()} «DACH» e.V. Trier. All Rights Reserved.
                </div>

                <div className={styles["socials"]}>
                    <a href="https://instagram.com/dach_ukr_de" target="_blank">
                        <InstagramIcon className={styles["icon"]}/>
                    </a>

                    <a href="https://www.facebook.com/DACH.ukr.de" target="_blank">
                        <FacebookIcon className={styles["icon"]} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
