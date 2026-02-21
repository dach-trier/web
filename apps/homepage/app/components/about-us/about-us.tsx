import styles from "./styles.module.css";
import { GroupIcon, ParentIcon } from "@dach/svg";

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

            <div className={styles["card-group"]}>
                <div className={styles["card"]}>
                    <GroupIcon
                        strokeWidth={1.8}
                        stroke="var(--color-blue-500)"
                        className={styles["icon"]}
                    />
                    <h3>Заходи для дітей та молоді</h3>
                    <p>
                        свята, екскурсії, волонтерські проекти, гуртки за
                        інтересами
                    </p>
                </div>

                <div className={styles["card"]}>
                    <ParentIcon
                        fill="var(--color-yellow-300)"
                        className={styles["icon"]}
                    />
                    <h3>Підтримка для батьків</h3>
                    <p>
                        психологічна допомога, обмін досвідом, консультації з
                        питань інтеграції
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
