'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { SITE_CONFIG } from '@/lib/config';

interface LoadingProps {
  children?: React.ReactNode;
}

export default function Loading({ children }: LoadingProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [displayedText, setDisplayedText] = React.useState('');

  const asciiArt = `██╗     ██╗██╗  ██╗██╗   ██╗    ██╗     ██╗███╗   ██╗ ██████╗ 
██║     ██║╚██╗██╔╝██║   ██║    ██║     ██║████╗  ██║██╔════╝ 
██║     ██║ ╚███╔╝ ██║   ██║    ██║     ██║██╔██╗ ██║██║  ███╗
██║     ██║ ██╔██╗ ██║   ██║    ██║     ██║██║╚██╗██║██║   ██║
███████╗██║██╔╝ ██╗╚██████╔╝    ███████╗██║██║ ╚████║╚██████╔╝
╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝     ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝`;

  React.useEffect(() => {
    if (SITE_CONFIG.environment !== 'production') {
      setIsLoading(false);
      return;
    }
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < asciiArt.length) {
        setDisplayedText(asciiArt.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          className="bg-background text-accent flex min-h-screen w-full items-center justify-center font-mono"
          initial={{ opacity: 1, filter: 'blur(0px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
        >
          <motion.pre
            style={{
              lineHeight: '1',
              letterSpacing: '0',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {displayedText}
          </motion.pre>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
