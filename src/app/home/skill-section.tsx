import React from 'react';

import DATA from '@/data';

import { Badge } from '@/components/ui/badge';
import BlurFadeText from '@/components/ui/blur-fade-text';

const SkillSection = () => {
  return (
    <section className='mx-auto w-full max-w-2xl'>
      <BlurFadeText
        delay={DATA.animateDelay * 5}
        text='Equipment'
        className='font-semibold text-lg md:font-bold md:text-xl'
      />
      <div className='flex flex-wrap gap-2 mt-1'>
        {DATA.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
