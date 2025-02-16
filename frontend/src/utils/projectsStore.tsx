import axios from "axios";
import { Project } from "../types";
import { createContext, useEffect, useState } from "react";

interface ProjectStoreContext {
    projects: Project[];
    setProjects: (friends: Project[]) => void;
    isLoading: boolean;
}

export const ProjectStoreContext = createContext<ProjectStoreContext>({ projects: [], setProjects: () => { }, isLoading: true });

export function ProjectStoreProvider({ children }: { children: React.ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await axios.get("/api/projects");
            setProjects(projects.data);
            setIsLoading(false);
        };

        fetchProjects();
    }, []);

    if (isLoading) return null;

    return (
        <ProjectStoreContext.Provider value={{ projects, setProjects, isLoading }}>
            {children}
        </ProjectStoreContext.Provider>
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
