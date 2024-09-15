'use client';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className='fixed z-50 w-full left-0 top-0 h-1 bg-foreground'
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
      }}
    ></motion.div>
  );
};

export default ScrollProgressBar;
