import { FaLinkedin } from "react-icons/fa";

interface LinkedInIconProps {
    className?: string;
}

export default function LinkedInIcon({ className = "w-5 h-5 text-text" }: LinkedInIconProps) {
    return <FaLinkedin className={className} />;
}