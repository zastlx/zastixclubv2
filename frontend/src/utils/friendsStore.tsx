import axios from "axios";
import { Friend } from "../types";
import { createContext, useEffect, useState } from "react";

interface FriendStoreContext {
    friends: Friend[];
    setFriends: (friends: Friend[]) => void;
    isLoading: boolean;
}

export const FriendStoreContext = createContext<FriendStoreContext>({
    friends: [],
    setFriends: () => { },
    isLoading: true
});

function shuffle<T>(array: T[]): T[] {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

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
            { id: "570358869235073042", link: "https://tyavaj.com/" },
            { id: "1197702222893547590", link: "https://doyle31.com/" },
            { id: "1059605055411601429", link: "https://www.tomcat.sh/" },
            { id: "366469440474447894", link: "https://lycanea.dev/" }
        ];

        const fetchFriends = async () => {
            const fullData = await Promise.all(_friends.map(async (f) => ({
                ...f,
                pfp: (await axios.get(`/api/avatar/${f.id}`)).data
            })));

            const bongy = fullData.find(f => f.id === "812938084375199804")!;
            const tyavaj = fullData.find(f => f.id === "570358869235073042")!;
            const rest = fullData.filter(f =>
                f.id !== "812938084375199804" && f.id !== "570358869235073042"
            );

            const pair = Math.random() < 0.5 ? [bongy, tyavaj] : [tyavaj, bongy];
            const shuffled = shuffle(rest);
            const insertIndex = Math.floor(Math.random() * (shuffled.length + 1));
            shuffled.splice(insertIndex, 0, ...pair);

            const finalList = shuffled.concat({
                id: "allie",
                link: "https://crit.rip/",
                pfp: "https://crit.rip/assets/profile-BWxKbdzS.jpg"
            });

            setFriends(finalList);
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
