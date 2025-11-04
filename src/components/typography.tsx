import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-base font-jetbrain', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight text-balance',
      h2: 'scroll-m-20 text-xl md:text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-base md:text-xl font-semibold tracking-tight',
      base: 'leading-7',
      small: 'text-sm leading-7',
      'extra-small': 'text-xs leading-7',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-foreground/70',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

interface TypographyProps {
  children: React.ReactNode | string;
  variant?: VariantProps<typeof typographyVariants>['variant'];
  color?: VariantProps<typeof typographyVariants>['color'];
  className?: string;
}
export default function Typography({
  children,
  variant,
  className,
}: TypographyProps) {
  if (typeof children === 'string') {
    <p className={cn(typographyVariants({ variant, className }))}>
      {children}
    </p>;
  }
  return (
    <div className={cn(typographyVariants({ variant, className }))}>
      {children}
    </div>
  );
}
