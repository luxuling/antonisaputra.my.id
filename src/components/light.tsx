import { cn } from '@/lib/utils';

interface LightProps {
  className?: string;
}

export default function Light({ className }: LightProps) {
  return (
    <span
      className={cn(
        'bg-accent/[2%] block h-96 w-96 rounded-full blur-3xl brightness-150 backdrop-blur-3xl',
        className
      )}
    />
  );
}
