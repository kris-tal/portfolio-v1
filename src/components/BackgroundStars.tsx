import { useMemo } from "react";
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";
import StarIcon from "./icons/StarIcon";

interface StarConfig {
    id: number;
    top: number;
    left: number;
    size: "small" | "medium" | "large";
    speed: number;
    rotation: number;
}

interface ParallaxStarProps {
    star: StarConfig;
    scrollY: MotionValue<number>;
}

const sizeClasses = {
    small: "h-5 w-5",
    medium: "h-7 w-7",
    large: "h-10 w-10",
};

function ParallaxStar({ star, scrollY }: ParallaxStarProps) {
    const y = useTransform(
        scrollY,
        [0, 3000],
        [0, -star.speed * 3000],
    );

    return (
        <motion.div
            className="absolute -ml-3 -mt-3 p-3"
            style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                y,
                rotate: star.rotation,
            }}
        >
            <StarIcon
                className={`${sizeClasses[star.size]} text-surface`}
            />
        </motion.div>
    );
}

export default function BackgroundStars() {
    const { scrollY } = useScroll();

    const stars = useMemo<StarConfig[]>(() => {
        const stars: StarConfig[] = [];

        const clusters = [
            { x: 15, y: 15 },
            { x: 85, y: 40 },
            { x: 25, y: 70 },
            { x: 75, y: 95 },
        ];

        let id = 0;

        for (const cluster of clusters) {
            for (let i = 0; i < 7; i++) {
                const offsetX = (Math.random() - 0.5) * 35;
                const offsetY = (Math.random() - 0.5) * 35;
                const sizeRandom = Math.random();

                let size: StarConfig["size"] = "small";
                let speed = 0.05;

                if (sizeRandom > 0.75) {
                    size = "large";
                    speed = 0.25;
                } else if (sizeRandom > 0.4) {
                    size = "medium";
                    speed = 0.12;
                }

                stars.push({
                    id: id++,
                    top: Math.max(-10, Math.min(120, cluster.y + offsetY)),
                    left: Math.max(2, Math.min(98, cluster.x + offsetX)),
                    size,
                    speed,
                    rotation: Math.random() * 360,
                });
            }
        }

        return stars;
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <ParallaxStar
                    key={star.id}
                    star={star}
                    scrollY={scrollY}
                />
            ))}
        </div>
    );
}