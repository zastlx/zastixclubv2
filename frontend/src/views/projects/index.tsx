import { useContext } from "react";
import styles from "./index.module.scss";
import Project from "./project";
import { ProjectStoreContext } from "../../utils/projectsStore";

export default function Projects() {
    const { projects } = useContext(ProjectStoreContext);

    return (
        <>
            <div className={styles.projects}>
                {projects.map((project) => (<Project
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />))}
            </div>
        </>
    );
}