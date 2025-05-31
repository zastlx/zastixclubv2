import axios from "axios";
import { Friend } from "../types";
import { createContext, useEffect, useState } from "react";

interface FriendStoreContext {
    friends: Friend[];
    setFriends: (friends: Friend[]) => void;
    isLoading: boolean;
}

export const FriendStoreContext = createContext<FriendStoreContext>({ friends: [], setFriends: () => { }, isLoading: true });

export function FriendStoreProvider({ children }: { children: React.ReactNode }) {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const _friends = [
            { id: "173622312053112832", link: "https://xotic.org/" },
            { id: "190733468550823945", link: "https://github.com/ItsSyfe" },
            { id: "709534876361162765", link: "https://www.youtube.com/@Pig_55" },
            { id: "812938084375199804", link: "https://discord.gg/yyu2QzhbDA" },
            { id: "1197702222893547590", link: "https://doyle31.com/" },
            { id: "1059605055411601429", link: "https://www.tomcat.sh/" },
            { id: "570358869235073042", link: "https://tyavaj.com/" },
            { id: "366469440474447894", link: "https://lycanea.dev/" },
            { id: "1346963494024642710", link: "https://wurdle.eu/" },
            { id: "640394037190197258", link: "https://www.twitch.tv/lemonssalicious" },
            { id: "804029208677711973", link: "https://www.twitch.tv/weblol_" },
            { id: "896600182190395423", link: "https://www.twitch.tv/VoidAces" },
            { id: "299287877525700608", link: "https://www.twitch.tv/Thee_Owl" },
            { id: "1249439327440601147", link: "https://villainsrule.xyz/" }
        ];

        const fetchFriends = async () => {
            const friends = (await Promise.all(_friends.map(async (review) => ({
                ...review,
                pfp: (await axios.get(`/api/avatar/${review.id}`)).data
            })))).concat({
                id: "allie",
                pfp: "https://crit.rip/assets/profile-BWxKbdzS.jpg",
                link: "https://crit.rip"
            })
            setFriends(friends);
            setIsLoading(false);
        };

        fetchFriends();
    }, []);

    if (isLoading) return null;

    return (
        <FriendStoreContext.Provider value={{ friends, setFriends, isLoading }}>
            {children}
        </FriendStoreContext.Provider>
    );
}