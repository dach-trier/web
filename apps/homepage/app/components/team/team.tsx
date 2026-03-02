import styles from "./styles.module.css";

const Team = () => {
    return (
        <div className={styles["team"]}>
            <h1>Наша команда</h1>
            <div className={styles["people"]}>
                <Person>
                    <Avatar src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_20.png" />
                    <Name>Sam Sapiol</Name>
                    <Role>Mastermind</Role>
                </Person>

                <Person>
                    <Avatar src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png" />
                    <Name>Dolores Haze</Name>
                    <Role>001023017</Role>
                </Person>

                <Person>
                    <Avatar src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png" />
                    <Name>Sunil Markesh</Name>
                    <Role>DJ Mobley</Role>
                </Person>

                <Person>
                    <Avatar src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png" />
                    <Name>Leslie Romero</Name>
                    <Role>Fun Society</Role>
                </Person>

                <Person>
                    <Avatar src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_26.png" />
                    <Name>Shama Biswas</Name>
                    <Role>Trenton</Role>
                </Person>
            </div>
        </div>
    );
};

const Person = ({ children }: any) => {
    return <div className={styles["person"]}>{children}</div>;
};

const Avatar = ({ src }: any) => {
    return <img className={styles["avatar"]} src={src} />;
};

const Name = ({ children }: any) => {
    if (typeof children !== "string") {
        throw new Error("unreachable");
    }

    return <span className={styles["name"]}>{children as string}</span>;
};

const Role = ({ children }: any) => {
    if (typeof children !== "string") {
        throw new Error("unreachable");
    }

    return <span className={styles["role"]}>{children as string}</span>;
};

export default Team;
