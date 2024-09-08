'use client';

import { domAnimation, LazyMotion, m, Variants } from 'framer-motion';
import { useMemo } from 'react';

import { cn } from '@/lib';

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
    visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className='flex'>
        <LazyMotion features={domAnimation}>
          {characters.map((char, i) => (
            <m.span
              key={i}
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: 'easeOut',
              }}
              className={cn('inline-block', className)}
              style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
            >
              {char}
            </m.span>
          ))}
        </LazyMotion>
      </div>
    );
  }

  return (
    <div className='flex'>
      <LazyMotion features={domAnimation}>
        <m.span
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: 'easeOut',
          }}
          className={cn('inline-block', className)}
        >
          {text}
        </m.span>
      </LazyMotion>
    </div>
  );
};

export default BlurFadeText;
