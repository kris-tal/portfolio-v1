import { useState } from "react";
import Section from "../components/Section";
import StarIcon from "../components/icons/StarIcon";
import Tag from "../components/Tag";

const experiences = [
    {
        company: "Tesco Technology",
        role: "Graduate Software Development Engineer",
        period: "JUL 2026 - PRESENT",
        bulletPoints: [
            "Developing, optimizing, and maintaining microservices on Azure for a vital enterprise document management system, adhering to strict production-grade security and reliability standards.",
        ],
        skills: [
            "Java",
            "Kotlin",
            "Spring Boot",
            "Azure",
            "Microservices",
            "Kubernetes",
        ],
    },
];

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState(0);
    const currentExperience = experiences[activeTab];

    return (
        <Section id="experience">
            <div className="space-y-8">
                <h2 className="text-heading-1 text-text">
                    <span className="text-primary">//</span> experience
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
                    <div className="flex shrink-0 gap-3 overflow-x-auto md:flex-col md:border-l md:border-text/20 md:pl-4">
                        {experiences.map((experience, index) => {
                            const isActive = activeTab === index;

                            return (
                                <button
                                    key={experience.company}
                                    type="button"
                                    onClick={() => setActiveTab(index)}
                                    className={`cursor-pointer whitespace-nowrap border-l-2 py-1 pl-4 text-left text-body transition-colors duration-200 md:-ml-[17px] ${
                                        isActive
                                            ? "border-primary text-text font-bold"
                                            : "border-transparent text-textMuted hover:text-text"
                                    }`}
                                >
                                    {experience.company}
                                </button>
                            );
                        })}
                    </div>

                    <div
                        key={activeTab}
                        className="space-y-4 md:col-span-3"
                    >
                        <div>
                            <h3 className="flex flex-wrap gap-x-2 text-subheading-1 text-text">
                                <span>{currentExperience.role}</span>
                                <span className="text-primary">
                  @ {currentExperience.company}
                </span>
                            </h3>

                            <p className="mt-1 font-mono text-body-sm text-textMuted">
                                {currentExperience.period}
                            </p>
                        </div>

                        <ul className="max-w-2xl space-y-3 pt-2">
                            {currentExperience.bulletPoints.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-4 text-body text-textSecondary"
                                >
                                    <StarIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {currentExperience.skills.map((skill) => (
                                <Tag key={skill}>{skill}</Tag>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
