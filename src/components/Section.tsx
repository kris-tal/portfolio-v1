import React from 'react';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
    return (
        <section
            id={id}
            className={`w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 md:py-48 snap-start ${className}`}
        >
            <div className="max-w-4xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
}