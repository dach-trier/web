import styles from "./styles.module.css";
import { ArrowRightIcon } from "@dach/svg";

const JoinUs = () => {
    return (
        <div className={styles["join-us"]}>
            <div className={styles["inner-container"]}>
                <div className={styles["text"]}>
                    <h1>Join Us!</h1>
                    <p>Something inspirational</p>
                </div>

                <div className={styles["actions"]}>
                    <button className={styles["form"]}>
                        Download Join Form
                    </button>

                    <div className={styles["examples"]}>
                        <button>
                            <ArrowRightIcon
                                className={styles["arrow-right-icon"]}
                            />{" "}
                            Example 1
                        </button>

                        <button>
                            <ArrowRightIcon
                                className={styles["arrow-right-icon"]}
                            />{" "}
                            Example 2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
