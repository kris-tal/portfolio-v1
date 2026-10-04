import { track } from "@vercel/analytics";
import { motion, type Variants } from "framer-motion";
import StarIcon from "./icons/StarIcon";
import Tag from "./Tag";
import ProjectImageGallery from "./ProjectImageGallery";
import { projects } from "../data/projects";

const projectCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

interface ProjectCardProps {
    project: (typeof projects)[number];
    imageIndex: number;
    onImageChange: (direction: "next" | "prev") => void;
}

export default function ProjectCard({
                                        project,
                                        imageIndex,
                                        onImageChange,
                                    }: ProjectCardProps) {
    const images = project.images ?? [];
    const hasGallery = project.type === "wide" && images.length > 0;

    return (
        <motion.article
            variants={projectCardVariants}
            className="break-inside-avoid space-y-6 rounded-2xl bg-surface/30 p-6 shadow-sm md:p-8"
        >
            <div className="space-y-4">
                <div>
                    <h3 className="text-heading-3 text-text">
                        {project.title}
                    </h3>

                    <p className="mt-2 font-mono text-body-sm text-textMuted">
                        {project.subtitle}
                    </p>
                </div>

                <ul className="space-y-2.5 pt-1">
                    {project.description.map((description) => (
                        <li
                            key={description}
                            className="flex items-start gap-3 text-body text-textSecondary"
                        >
                            <StarIcon className="mt-1.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>

                {hasGallery && (
                    <ProjectImageGallery
                        title={project.title}
                        images={images}
                        activeIndex={imageIndex}
                        onImageChange={onImageChange}
                    />
                )}
            </div>

            <div className="space-y-3 pt-3">
                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                    ))}
                </div>

                {project.github && (
                    <div className="flex justify-end pt-1">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track("project_github_click", { project: project.title})}
                            className="inline-flex items-center gap-1.5 font-mono text-body-sm text-primary hover:underline"
                        >
                            <span>GitHub</span>
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                )}
            </div>
        </motion.article>
    );
}