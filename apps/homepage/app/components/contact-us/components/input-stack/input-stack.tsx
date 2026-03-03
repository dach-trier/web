import styles from "./styles.module.css";
import { Input } from "..";

const InputStack = () => (
    <div className={styles["container"]}>
        <div className={styles["input-stack"]}>
            <Input type="first-name" required />
            <Input type="last-name" required />
            <Input type="email" required />
            <Input type="phone-number" />
            <Input type="message" required />
        </div>
    </div>
);

export default InputStack;
