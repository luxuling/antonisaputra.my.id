import Image from 'next/image';
import React from 'react';

import BlurFade from '@/components/ui/blur-fade';
import BlurFadeText from '@/components/ui/blur-fade-text';

import profilePng from '@/../public/PP.png';

export default function HeroSection() {
  return (
    <section id='hero'>
      <div className='mx-auto w-full max-w-2xl space-y-8'>
        <div className='gap-2 flex justify-between'>
          <div className='flex-col flex flex-1 space-y-1.5'>
            <BlurFadeText
              delay={0.5}
              className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
              yOffset={8}
              text={`Hi, I'm ${'Antoni'.split(' ')[0]}👋`}
            />
            <BlurFadeText
              className='max-w-[600px] md:text-xl'
              delay={1}
              text='Hello nama saya antoni saputra sekian'
            />
          </div>
          <BlurFade delay={1.5}>
            <Image
              alt='Profile picture'
              placeholder='blur'
              src={profilePng}
              className='rounded-full border-2 border-neutral-300 w-28'
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
