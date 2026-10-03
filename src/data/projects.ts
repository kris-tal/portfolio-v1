import kontra_1 from '../assets/photos/kontra/auth.png';
import kontra_2 from '../assets/photos/kontra/race.png';
import kontra_3 from '../assets/photos/kontra/shop.png';
import kontra_4 from '../assets/photos/kontra/stats.png';

import ddd_1 from '../assets/photos/ddd/home.png';
import ddd_2 from '../assets/photos/ddd/gameplay.png';
import ddd_3 from '../assets/photos/ddd/store.png';
import ddd_4 from '../assets/photos/ddd/owned.png';
import ddd_5 from '../assets/photos/ddd/calendar.png';

export interface Project {
    title: string;
    subtitle: string;
    skills: string[];
    github: string | null;
    type: "wide" | "narrow";
    images?: string[];
    description: string[];
}

export const projects: Project[] = [
    {
        title: "Końtra (Hooved Rivalry)",
        subtitle: "Real time multiplayer horse racing game",
        skills: ["Java", "LibGDX", "Python", "Flask", "PostgreSQL", "Docker", "WebSockets"],
        github: "https://github.com/kris-tal/HorseGame",
        type: "wide",
        images: [
            kontra_1,
            kontra_2,
            kontra_3,
            kontra_4
        ],
        description: [
            "Full-stack multiplayer horse racing game, with Java client (LibGDX), Python backend (Flask) and a PostgreSQL database.",
            "Real-time race synchronization between clients and the backend using WebSockets.",
            "Fully containerized with Docker to ensure smooth setup, environment consistency, and easy deployment."
        ]
    },
    {
        title: "YarnSpace",
        subtitle: "Mobile social media app for fiber artists",
        skills: ["Kotlin", "Android Studio", "Python", "FastAPI", "PostgreSQL", "Docker"],
        github: "https://github.com/kris-tal/YarnSpace",
        type: "narrow",
        description: [
            "Android app for crochet enthusiasts and creators to share projects and works-in-progress.",
            "Built with a Python and FastAPI backend connected to a PostgreSQL database, managing app logic, user accounts, and data persistence.",
            "Includes custom user profiles, timeline feeds, search filtering, posting, saving, and a reblogging mechanic.",
            "Integrates device peripherals such as camera/gallery access for photo uploads."
        ]
    },
    {
        title: "CodeMe",
        subtitle: "Interactive programming learning platform for kids",
        skills: ["TypeScript", "React", "Vite", "UX/UI Design"],
        github: "https://github.com/Jacolek320/CodeMe",
        type: "narrow",
        description: [
            "Interactive web application designed to introduce children to programming concepts through puzzles.",
            "Built with a responsive and accessible user interface using React and TypeScript, focusing on intuitive UX and smooth state management."
        ]
    },
    {
        title: "Unix-like Shell",
        subtitle: "Custom command-line interface in C",
        skills: ["C", "Linux", "POSIX API"],
        github: "https://github.com/kris-tal/shell",
        type: "narrow",
        description: [
            "A custom command-line interface built from scratch, supporting both interactive prompt mode and batch processing from files.",
            "Implements operating system concepts including process creation via fork/execvp, custom builtins (lcd, lls, lkill), and standard I/O redirection using dup2.",
            "Supports multi-process pipelines with pipe, background execution (&), and process reaping to prevent zombie processes."
        ]
    },
    {
        title: "MINIX System Calls",
        subtitle: "OS kernel and process manager modification",
        skills: ["C", "Minix 3", "IPC", "Operating Systems"],
        github: null,
        type: "narrow",
        description: [
            "An extension to the MINIX 3.2.1 operating system introducing a global integer storage mechanism for safe communication between independent processes.",
            "Built directly into the microkernel's Process Manager (PM) server and exposed to user space through custom system calls and modifications to the standard C library (libc.a)."
        ]
    },
    {
        title: "Missing Data Imputer",
        subtitle: "Probabilistic ML pipeline and evaluation system",
        skills: ["Python", "Pandas", "Scikit-Learn"],
        github: "https://github.com/kris-tal/mpum-project",
        type: "narrow",
        description: [
            "A modular Python toolkit for analyzing and handling missing data, featuring statistical imputation and more advanced algorithms like Iterative Imputer, Expectation-Maximization (EM), and matrix factorization.",
            "Includes a custom-built KNN imputer supporting multiple distance metrics and custom weighting schemes.",
            "Integrated into Scikit-Learn pipelines for end-to-end predictive modeling, backed by statistical testing to objectively compare imputation performance."
        ]
    },
    {
        title: "Daily Discrete Deck",
        subtitle: "Single-player calendar card game",
        skills: ["Java", "JavaFX"],
        github: "https://github.com/kris-tal/Daily-Discrete-Deck",
        type: "wide",
        images: [
            ddd_1,
            ddd_2,
            ddd_3,
            ddd_4,
            ddd_5
        ],
        description: [
            "A single-player JavaFX card game with a calendar system tracking player progress and performance.",
            "Handles data persistence for statistics and manages complex game state across views."
        ]
    }
];