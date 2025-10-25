import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={cn('px-5 md:px-40', className)}>{children}</section>
  );
}
