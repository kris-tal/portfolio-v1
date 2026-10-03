import Section from '../components/Section';

export default function HomeSection() {
    return (
        <Section id="home">
            <div className="pt-32 pb-24 md:pt-32 md:pb-32">
                <h1 className="text-hero text-text mb-4">
                    hi, it's <span className="text-primary">&lt;</span>maja<span className="text-primary">/&gt;</span>
                </h1>

                <p className="text-sm md:text-base font-mono uppercase tracking-widest text-textMuted max-w-2xl mb-8">
                    Software engineer & CS student in Cracow
                </p>

                <p className="text-content-1 text-textSecondary max-w-2xl">
                    I write clean code on and off hours : )
                </p>
            </div>
        </Section>
    );
}