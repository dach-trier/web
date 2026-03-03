import styles from "./styles.module.css";
import { Upload } from "..";

// prettier-ignore

const UploadStack = () => (
    <div className={styles["upload-stack"]}>
        <label>Attachments</label>
        <label>Accepted file types: any image format (JPG, PNG, GIF, etc.) and PDF. Maximum attachment size: x MB.</label>
        <Upload className={styles["upload"]} />
    </div>
);

export default UploadStack;
