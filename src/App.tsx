import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import BackgroundStars from './components/BackgroundStars';

export default function App() {
    return (
        <main className="bg-background text-content relative min-h-screen overflow-x-hidden">
            <BackgroundStars />
            <div className="relative z-10">
                <Navbar />
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
            </div>
        </main>
    );
}