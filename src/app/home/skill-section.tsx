import React from 'react';

import DATA from '@/data';

import BlurFade from '@/components/effect/blur-fade';
import BlurFadeText from '@/components/effect/blur-fade-text';
import { Badge } from '@/components/ui/badge';

const SkillSection = () => {
  return (
    <section className='mx-auto w-full max-w-2xl'>
      <BlurFadeText
        delay={DATA.animateDelay * 5}
        text='Equipment'
        className='font-semibold text-lg md:font-bold md:text-xl'
      />
      <div className='flex flex-wrap gap-2 mt-1'>
        {DATA.skills.map((skill, index) => (
          <BlurFade key={skill} delay={DATA.animateDelay * index + 0.2}>
            <Badge>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
