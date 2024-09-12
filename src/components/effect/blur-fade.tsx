'use client';

import {
  domAnimation,
  LazyMotion,
  m,
  useInView,
  UseInViewOptions,
  Variants,
} from 'framer-motion';
import { useRef } from 'react';

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 0,
  inView = true,
  margin = '-50px',
  blur = '6px',
}: BlurFadeProps & UseInViewOptions) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: margin,
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        exit='hidden'
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default BlurFade;
