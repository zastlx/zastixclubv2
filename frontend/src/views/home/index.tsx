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
                    {(() => {
                        // put java and bongus next to eachother
                        const friends = friendStore.friends;
                        const group = ["570358869235073042", "812938084375199804"];
                        const pair = friends.filter(f => group.includes(f.id));
                        const rest = friends.filter(f => !group.includes(f.id)).sort(() => Math.random() - 0.5);

                        rest.splice(Math.floor(Math.random() * (rest.length + 1)), 0, ...pair);
                        return rest;
                    })().map((friend, index) => (
                        <Friend key={index} {...friend} />
                    ))}
                </div>

            </div>
        </>
    );
}