import React from 'react';

import DATA from '@/data';

import BlurFade from '@/components/ui/blur-fade';
import BlurFadeText from '@/components/ui/blur-fade-text';
import { ResumeCard } from '@/components/ui/resume-card';

const WorkExperience = () => {
  return (
    <section className='mx-auto w-full max-w-2xl'>
      <BlurFadeText
        delay={DATA.animateDelay * 5}
        text='Work Experiences'
        className='font-semibold text-lg md:font-bold md:text-xl'
      />
      <div className='flex flex-col gap-4 mt-3'>
        {DATA.workExperiences.map((work, index) => (
          <BlurFade key={work.company} delay={DATA.animateDelay * index + 0.4}>
            <ResumeCard
              altText={work.company}
              logoUrl={work.logoUrl}
              href={work.href}
              title={work.company}
              subtitle={work.title}
              period={work.start + '-' + work.end}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
