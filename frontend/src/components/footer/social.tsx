import { Link } from "react-router-dom";

export function Social({ icon, link }: { icon: string; link: string }) {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <i className={icon} />
        </Link>
    );
}