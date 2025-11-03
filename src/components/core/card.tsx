import { cn } from '@/lib/utils';

import LazyImage from '../lazy-image';
import Typography from '../typography';

export function Card({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-foreground/[3%] border-foreground/10 hover:border-foreground/50 group group-hover:border-foreground/50 w-fit border-1 border-dotted p-4 backdrop-blur-sm transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Typography variant="h4" className={className}>
      {children}
    </Typography>
  );
}

export function CardDescription({
  children,
  className,
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Typography variant="base" className={className}>
      {children}
    </Typography>
  );
}

export function CardBanner({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'h-20 w-full scale-100 overflow-hidden rounded-md transition-transform hover:scale-105',
        className
      )}
    >
      <LazyImage src={src} alt={alt} />
    </div>
  );
}
