'use client';

import { type AnimationProps, motion } from 'framer-motion';
import { ButtonHTMLAttributes, useMemo } from 'react';

import { cn } from '@/lib';

const animationProps = {
  initial: { '--x': '100%', scale: 0.8 },
  animate: { '--x': '-100%', scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'reverse';
}

interface VariantStyle extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  textColor: string;
  animated: string;
  maskImage: string;
}
const ShinyButton = ({
  children,
  className,
  variant = 'default',
  ...props
}: ShinyButtonProps) => {
  const variantStyle: VariantStyle = useMemo(() => {
    if (variant === 'reverse') {
      return {
        background:
          'bg-[radial-gradient(circle_at_50%_0%,hsl(var(--background)/20%)_0%,transparent_90%)] hover:shadow-[0_0_20px_hsl(var(--background)/10%)]',
        textColor: 'text-background',
        animated:
          'bg-[linear-gradient(-75deg,hsl(var(--background)/10%)_calc(var(--x)+20%),hsl(var(--background)/50%)_calc(var(--x)+25%),hsl(var(--background)/10%)_calc(var(--x)+100%))]',
        maskImage:
          'linear-gradient(-75deg,hsl(var(--background)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--background)) calc(var(--x) + 100%))',
      };
    } else {
      return {
        background:
          'bg-[radial-gradient(circle_at_50%_0%,hsl(var(--foreground)/20%)_0%,transparent_90%)] hover:shadow-[0_0_20px_hsl(var(--foreground)/10%)]',
        textColor: 'text-foreground',
        animated:
          'bg-[linear-gradient(-75deg,hsl(var(--foreground)/10%)_calc(var(--x)+20%),hsl(var(--foreground)/50%)_calc(var(--x)+25%),hsl(var(--foreground)/10%)_calc(var(--x)+100%))]',
        maskImage:
          'linear-gradient(-75deg,hsl(var(--foreground)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--foreground)) calc(var(--x) + 100%))',
      };
    }
  }, [variant]);

  return (
    <motion.button
      {...animationProps}
      className={cn(
        `relative rounded-lg px-4 py-3 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out`,
        variantStyle.background,
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'relative flex items-center gap-2 h-full w-full text-sm tracking-wide',
          variantStyle.textColor,
        )}
        style={{
          maskImage: variantStyle.maskImage,
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
          maskComposite: 'exclude',
        }}
        className={cn(
          'absolute inset-0 z-10 block rounded-[inherit] p-px',
          variantStyle.animated,
        )}
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
