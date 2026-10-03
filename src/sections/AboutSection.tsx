import { motion, type Variants } from "framer-motion";
import Section from "../components/Section";
import StarIcon from "../components/icons/StarIcon";

const techGroups = [
    ["Java", "Kotlin"],
    ["C", "C++", "CUDA"],
    ["Docker", "Kubernetes", "Azure"],
    ["Python", "AI/ML libs"],
    ["TypeScript", "React"],
] as const;

const techListVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const techItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

interface AboutSectionProps {
    animationKey?: number;
}

function TechStack() {
    return (
        <div>
            <p className="text-body text-textMuted mb-2">
                Some technologies I have been working with:
            </p>

            <motion.ul
                variants={techListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
                {techGroups.map((group) => (
                    <motion.li
                        key={group.join("-")}
                        variants={techItemVariants}
                        className="flex items-center gap-5 text-body text-text"
                    >
                        <StarIcon className="w-4 h-4 text-primary shrink-0" />

                        <span>
              {group.map((technology, index) => (
                  <span key={technology}>
                  {index > 0 && (
                      <span className="text-primary mx-2 text-3xl inline-block translate-y-0.5 font-bold">
                      ·
                    </span>
                  )}
                      {technology}
                </span>
              ))}
            </span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default function AboutSection({
                                         animationKey = 0,
                                     }: AboutSectionProps) {
    return (
        <Section id="about">
            <div key={animationKey} className="space-y-6">
                <h2 className="text-heading-1 text-text">
                    <span className="text-primary">//</span> about me
                </h2>

                <div className="space-y-4 text-body text-textMuted">
                    <p>
                        I am currently a Software Engineer at Tesco Technology, where I
                        help build and maintain a Central Document Management System.
                    </p>

                    <p>
                        I finished my Bachelor's in Theoretical Computer Science at
                        Jagiellonian University and am now pursuing my Master's.
                    </p>
                </div>

                <TechStack />

                <p className="text-body text-textMuted">
                    In my free time, I’m nerdy about math, biology and 2016 webcomics.
                    I also have a soft spot for 19th-century Russian literature and love
                    to create art(?).
                </p>
            </div>
        </Section>
    );
}
