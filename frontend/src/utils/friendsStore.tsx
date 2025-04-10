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
            { id: "1186832040197361746", link: "https://www.onedumbduck.com/" },
            { id: "812938084375199804", link: "https://discord.gg/yyu2QzhbDA" },
            { id: "1197702222893547590", link: "https://doyle31.com/" },
            { id: "1059605055411601429", link: "https://www.tomcat.sh/" },
            { id: "570358869235073042", link: "https://tyavaj.com/" },
            { id: "366469440474447894", link: "https://lycanea.dev/" },
            { id: "1346963494024642710", link: "https://wurdle.eu/" }
        ];

        const fetchFriends = async () => {
            const friends = (await Promise.all(_friends.map(async (review) => {
                return {
                    ...review,
                    pfp: (await axios.get(`/api/avatar/${review.id}`)).data
                }
            }))).concat({
                id: "allie",
                link: "https://crit.rip/",
                pfp: "https://crit.rip/assets/profile-BWxKbdzS.jpg"
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

// class FriendsManagerClass {
//     friends: Friend[] = [];

//     constructor() {
//         this.loadFriends();
//     }

//     async loadFriends() {
//         
//         this.friends = await Promise.all(friends.map(async (review) => {
//             return {
//                 ...review,
//                 pfp: (await axios.get(`/api/avatar/${review.id}`)).data
//             }
//         }));
//     }
// }
