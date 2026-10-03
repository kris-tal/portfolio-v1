import { FaStar } from "react-icons/fa";

interface StarIconProps {
    className?: string;
}

export default function StarIcon({ className = "w-5 h-5 text-primary" }: StarIconProps) {
    return (<FaStar className={className}/>);
}