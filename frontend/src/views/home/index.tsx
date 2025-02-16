import useIsMobile from "../../utils/isMobile";
import Friend from "./friend";
import styles from "./index.module.scss";
import { useContext } from "react";
import { FriendStoreContext } from "../../utils/friendsStore";



export default function Home() {
    const friendStore = useContext(FriendStoreContext);
    const isMobile = useIsMobile();

    return (
        <>
            <div className={styles.intro}>
                <p><b>Hi</b>, I'm Braleigh (although you may know me as zastix online), a self-taught 14-year-old software developer. I enjoy reverse engineering, game modding, and everything Linux! I'm especially passionate about cybersecurity.</p>
                {!isMobile && (
                    <div className={styles.pfp}>
                        <img src="/pfp.png" />
                        <p>she/her</p>
                    </div>
                )}
            </div>
            <div className={styles.friendsWrapper}>
                <h1>Check out these cute people too!</h1>
                <div className={styles.friends}>
                    {friendStore.friends.map((friend, index) => (
                        <Friend key={index} {...friend} />
                    ))}
                </div>
            </div>
        </>
    );
}