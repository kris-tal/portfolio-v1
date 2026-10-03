import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const projectListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function ProjectsSection() {
  const [imageIndices, setImageIndices] = useState<Record<number, number>>(
      {},
  );

  const handleImageChange = (
      projectIndex: number,
      direction: "next" | "prev",
      imageCount: number,
  ) => {
    setImageIndices((current) => {
      const activeIndex = current[projectIndex] ?? 0;

      const nextIndex =
          direction === "next"
              ? (activeIndex + 1) % imageCount
              : (activeIndex - 1 + imageCount) % imageCount;

      return {
        ...current,
        [projectIndex]: nextIndex,
      };
    });
  };

  return (
      <Section id="projects">
        <div className="space-y-8">
          <h2 className="text-heading-1 text-text">
            <span className="text-primary">//</span> projects
          </h2>

          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={projectListVariants}
              className="columns-1 gap-8 space-y-8 md:columns-2"
          >
            {projects.map((project, index) => {
              const imageIndex = imageIndices[index] ?? 0;
              const imageCount = project.images?.length ?? 0;

              return (
                  <ProjectCard
                      key={project.title}
                      project={project}
                      imageIndex={imageIndex}
                      onImageChange={(direction) =>
                          handleImageChange(
                              index,
                              direction,
                              imageCount,
                          )
                      }
                  />
              );
            })}
          </motion.div>
        </div>
      </Section>
  );
}