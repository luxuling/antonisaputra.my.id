import AboutSection from './home/about-section';
import HeroSection from './home/hero-section';
import ProjectSection from './home/project-section';
import ServiceSection from './home/service-section';
import SkillSection from './home/skill-section';
import WorkExperience from './home/work-exp-section';

export default function Home() {
  return (
    <main className='flex flex-col gap-20'>
      <section className='flex flex-col gap-8'>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <WorkExperience />
      </section>
      <ProjectSection />
      <ServiceSection />
    </main>
  );
}
