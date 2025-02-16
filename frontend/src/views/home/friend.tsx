import styles from "./index.module.scss";

interface FriendProps {
    pfp: string;
    link: string;
}

export default function Friend({ pfp, link }: FriendProps) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.friend}>
            <img src={pfp} />
        </a>
    );
}