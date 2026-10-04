import { useLayoutEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const navItems = [
    { label: "home", href: "#home" },
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
];

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("home");
    const [pillStyle, setPillStyle] = useState({
        left: 0,
        width: 0,
    });

    const navRef = useRef<HTMLElement>(null);
    const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    useLayoutEffect(() => {
        const activeItem = itemRefs.current[activeTab];

        if (!activeItem) {
            return;
        }

        setPillStyle({
            left: activeItem.offsetLeft,
            width: activeItem.offsetWidth,
        });
    }, [activeTab]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-background/80 backdrop-blur-md">
            <div className="flex h-16 w-full items-center px-4 sm:px-10">
                <a
                    href="#home"
                    onClick={() => setActiveTab("home")}
                    className="shrink-0 text-subheading-2 font-medium text-textSecondary transition-colors hover:text-primary"
                >
                    Maja Giglok
                </a>

                <nav
                    ref={navRef}
                    className="relative ml-10 hidden items-center rounded-full bg-surface/50 p-1 shadow-sm md:flex"
                >
                    <div
                        aria-hidden="true"
                        className="absolute bottom-1 top-1 z-0 rounded-full bg-primary shadow-sm transition-all duration-300 ease-out"
                        style={{
                            left: pillStyle.left,
                            width: pillStyle.width,
                        }}
                    />

                    {navItems.map((item) => {
                        const isActive = activeTab === item.label;

                        return (
                            <a
                                key={item.label}
                                ref={(element) => {
                                    itemRefs.current[item.label] = element;
                                }}
                                href={item.href}
                                onClick={() => setActiveTab(item.label)}
                                className={`relative z-10 cursor-pointer rounded-full px-5 py-1 text-center font-mono text-body-sm transition-colors duration-200 ${
                                    isActive
                                        ? "font-medium text-text"
                                        : "text-textMuted hover:text-textSecondary"
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="ml-auto flex items-center gap-2.5">
                    <a
                        href="https://github.com/kris-tal"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("github_click")}
                        className="rounded-full bg-surface/30 p-1.5 text-textSecondary transition-colors hover:text-text"
                        aria-label="GitHub profile"
                    >
                        <GithubIcon className="h-3.5 w-3.5" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/maja-giglok-7810a8308"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("linkedin_click")}
                        className="rounded-full bg-surface/30 p-1.5 text-textSecondary transition-colors hover:text-text"
                        aria-label="LinkedIn profile"
                    >
                        <LinkedInIcon className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </header>
    );
}