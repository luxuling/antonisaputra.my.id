import AboutSection from './home/about-section';
import HeroSection from './home/hero-section';
import SkillSection from './home/skill-section';
import WorkExperience from './home/work-exp-section';

export default function Home() {
  return (
    <main className='flex flex-col gap-8'>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkExperience />
    </main>
  );
}
