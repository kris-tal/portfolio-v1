import { FaGithub } from "react-icons/fa";

interface GithubIconProps {
    className?: string;
}

export default function GithubIcon({ className = "w-5 h-5 text-text" }: GithubIconProps) {
    return <FaGithub className={className} />;
}