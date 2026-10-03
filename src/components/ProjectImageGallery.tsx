import type { ReactNode } from "react";

interface ProjectImageGalleryProps {
    title: string;
    images: string[];
    activeIndex: number;
    onImageChange: (direction: "next" | "prev") => void;
}

interface ArrowButtonProps {
    direction: "next" | "prev";
    onClick: () => void;
    children: ReactNode;
}

function ArrowButton({
                         direction,
                         onClick,
                         children,
                     }: ArrowButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-textMuted shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-surface hover:text-text ${
                direction === "prev" ? "left-3" : "right-3"
            }`}
            aria-label={`${direction === "prev" ? "Previous" : "Next"} image`}
        >
            {children}
        </button>
    );
}

export default function ProjectImageGallery({
                                                title,
                                                images,
                                                activeIndex,
                                                onImageChange,
                                            }: ProjectImageGalleryProps) {
    return (
        <div className="pt-2">
            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-surface bg-background shadow-sm">
                <img
                    src={images[activeIndex]}
                    alt={`${title} - view ${activeIndex + 1}`}
                    className="h-full w-full object-cover brightness-75 transition-all duration-300"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-background/10"
                />

                <ArrowButton
                    direction="prev"
                    onClick={() => onImageChange("prev")}
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </ArrowButton>

                <ArrowButton
                    direction="next"
                    onClick={() => onImageChange("next")}
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </ArrowButton>

                <span className="absolute right-3 top-3 z-10 rounded-md bg-background/80 px-2 py-0.5 font-mono text-body-sm text-textMuted backdrop-blur-sm">
                    {activeIndex + 1} / {images.length}
                </span>
            </div>
        </div>
    );
}