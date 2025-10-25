import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Spotlight } from './core/spotlight';

const buttonVariant = cva(
  'bg-foreground/[3%] backdrop-blur-sm rounded-xl transition-colors border border-foreground/10 hover:border-foreground/50 hover:cursor-pointer flex items-center gap-2 w-fit group group-hover:border-foreground/50 relative',
  {
    variants: {
      variant: {
        primary: 'p-3',
        icon: 'p-1.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<
    HTMLButtonElement | HTMLDivElement | HTMLAnchorElement
  > {
  children: React.ReactNode;
  href?: string;
  variant?: VariantProps<typeof buttonVariant>['variant'];
  className?: string;
}

export default function Button({
  children,
  variant,
  className,
  href,
  type = 'button',
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariant({ variant, className }))}
        {...props}
      >
        <Spotlight size={40} className="bg-foreground" />
        {children}
      </Link>
    );
  }
  if (typeof children !== 'string') {
    return (
      <div {...props} className={cn(buttonVariant({ variant, className }))}>
        <Spotlight size={40} className="bg-foreground" />
        {children}
      </div>
    );
  }
  return (
    <button
      type={type}
      {...props}
      className={cn(buttonVariant({ variant, className }))}
    >
      <Spotlight size={40} className="bg-foreground" />
      {children}
    </button>
  );
}
