import styles from "./styles.module.css";
import { InputStack, UploadStack, SubmitButton } from "./components";

const ContactUs = () => {
    return (
        <div className={styles["contact-us"]}>
            <h1>Зв'язатися з нами</h1>
            <InputStack />
            <UploadStack />
            <SubmitButton />
        </div>
    );
};


export default ContactUs;
