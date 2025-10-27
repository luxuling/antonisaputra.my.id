import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={cn('mx-auto min-h-screen w-full px-5 md:max-w-5xl', className)}
    >
      {children}
    </section>
  );
}
