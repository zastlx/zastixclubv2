import useIsMobile from "../../utils/isMobile";
import Friend from "./friend";
import styles from "./index.module.scss";
import { useContext } from "react";
import { FriendStoreContext } from "../../utils/friendsStore";
import { DateTime } from "luxon";


export default function Home() {
    const friendStore = useContext(FriendStoreContext);
    const isMobile = useIsMobile();

    return (
        <>
            <div className={styles.intro}>
                <p><b>Hi</b>, I'm Braleigh (although you may know me as zastix online), a self-taught {Math.floor(Math.abs(DateTime.fromISO("2009-12-13").diffNow().as("years")))}-year-old software developer. I enjoy programming, reverse engineering, game modding, and everything Linux! I'm also getting into cybersecurity.</p>
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
                    {friendStore.friends.sort(() => Math.random() - 0.5).map((friend, index) => (
                        <Friend key={index} {...friend} />
                    ))}
                </div>

            </div>
        </>
    );
}