import { useEffect, useRef } from 'react';
import { motion, useAnimate, AnimatePresence } from 'motion/react';

interface TooltipProps {
  children: React.ReactNode;
  tooltip: React.ReactNode;
}

const initialTooltip = {
  scale: 0,
  top: 'calc(var(--spacing) * 5)',
};

export const Tooltip = ({ children, tooltip }: TooltipProps) => {
  const [scope, animate] = useAnimate();
  const hoverTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hoverTarget.current) return;

    const handleMouseEnter = () => {
      animate(
        scope.current,
        {
          opacity: 1,
          scale: 1,
          top: 'calc(var(--spacing) * -10)',
        },
        { duration: 0.2, delay: 0.3 }
      );
    };

    const handleMouseLeave = () => {
      animate(scope.current, initialTooltip, { duration: 0.2 });
    };

    const target = hoverTarget.current;
    target.addEventListener('mouseenter', handleMouseEnter);
    target.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      target.removeEventListener('mouseenter', handleMouseEnter);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate, scope]);

  return (
    <div className="relative">
      <motion.div ref={hoverTarget} className="relative z-50">
        {children}
      </motion.div>
      <AnimatePresence>
        <motion.div
          ref={scope}
          initial={initialTooltip}
          className="from-accent/40 to-background text-foreground absolute -top-10 left-1/2 z-40 inline w-fit -translate-x-1/2 overflow-hidden rounded-lg bg-linear-to-b px-3 py-1.5 text-sm font-normal whitespace-normal"
        >
          {tooltip}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
