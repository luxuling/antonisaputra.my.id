import type { Variants } from 'motion/react';

import Link from 'next/link';
import * as motion from 'motion/react-client';

import { cn } from '@/lib/utils';

import { TextShimmer } from './core/text-shimmer';

interface TextLinkProps {
  href: string;
  children: string;
  className?: string;
}

const UnderLineVariants: Variants = {
  offscreen: {
    width: '0%',
  },
  onscreen: {
    width: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export default function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn('font-dotgothic group relative', className)}
    >
      <TextShimmer>{children}</TextShimmer>
      <motion.span
        variants={UnderLineVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="bg-foreground/50 group-hover:bg-foreground absolute -bottom-1 left-1/2 block h-[1px] w-full -translate-x-1/2 transition-all duration-300 group-hover:brightness-125"
      />
    </Link>
  );
}
