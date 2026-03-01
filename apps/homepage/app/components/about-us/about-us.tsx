import styles from "./styles.module.css";
import { InstagramIcon, FacebookIcon } from "@dach/svg";

const AboutUs = () => {
    return (
        <div className={styles["about-us"]}>
            <p className={styles["pasta"]}>
                <strong>Наша організація</strong> &mdash; це простір, де ми вже
                сьогодні готуємо дітей до мирного життя з ясним розумом,
                яскравою душею, великими мріями та сильними вміннями.
                <br /> <br />
                Ми бачимо виклики, з якими стикаються українські діти та молодь:
                втрата орієнтирів, ностальгія за рідною мовою та спільнотою,
                складнощі інтеграції. Це часто виливається у самотність, тривогу
                та безнадію.
                <br /> <br />
                Ми створили <strong>DACH</strong> — простір, де ми разом долаємо
                ці труднощі, об'єднуючи українську та німецьку культури через
                мистецтво, освіту та спільні проекти.
            </p>


            <div className={styles["socials"]}>
                <a href="" target="_blank">
                    <InstagramIcon className={styles["instagram-icon"]} />
                </a>

                <a href="" target="_blank">
                    <FacebookIcon className={styles["facebook-icon"]} />
                </a>
            </div>
        </div>
    );
};

export default AboutUs;
