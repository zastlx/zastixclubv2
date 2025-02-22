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
            { id: "1021090674289942600", link: "https://crit.rip" },
            { id: "190733468550823945", link: "https://github.com/ItsSyfe" },
            { id: "709534876361162765", link: "https://www.youtube.com/@Pig_55" },
            { id: "1186832040197361746", link: "https://www.onedumbduck.com/" },
            { id: "812938084375199804", link: "https://discord.gg/yyu2QzhbDA" },
            { id: "1197702222893547590", link: "https://doyle31.com/" }
        ];

        const fetchFriends = async () => {
            const friends = await Promise.all(_friends.map(async (review) => {
                return {
                    ...review,
                    pfp: (await axios.get(`/api/avatar/${review.id}`)).data
                }
            }));
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
