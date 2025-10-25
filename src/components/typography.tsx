import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-base font-jetbrain', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      base: 'leading-7',
      small: 'text-sm leading-7',
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
  children: string;
  variant?: VariantProps<typeof typographyVariants>['variant'];
  color?: VariantProps<typeof typographyVariants>['color'];
  className?: string;
}
export default function Typography({
  children,
  variant,
  className,
}: TypographyProps) {
  return (
    <p className={cn(typographyVariants({ variant, className }))}>{children}</p>
  );
}
