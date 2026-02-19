import styles from "./styles.module.css";

const ContactUs = () => {
    return (
        <div className={styles["contact-us"]}>
            <h1>Contact Us</h1>
            <form>
                <input value="info@dach-trier.com" disabled />
                <input placeholder="your email" />
                <textarea placeholder="additional info" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
