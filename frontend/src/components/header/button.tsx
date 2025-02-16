import { Link } from "react-router-dom";

interface ButtonProps {
    to: string;
    children: React.ReactNode;
}

export default function Button({ to, children }: ButtonProps) {
    return (
        <Link to={to}>{children}</Link>
    );
}