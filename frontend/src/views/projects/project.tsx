
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Project as ProjectType } from "../../types";
import ReactMarkdown from "react-markdown"

export default function Project({
    name,
    description,
    image,
    link
}: ProjectType) {
    return (
        <Link to={link} target="_blank" rel="noopener">
            <div className={styles.project}>
                <img src={image} />
                <hr />
                <div>
                    <h1>{name}</h1>
                    <ReactMarkdown className={styles.rm}>{description}</ReactMarkdown>
                </div>
            </div>
        </Link>
    );
}