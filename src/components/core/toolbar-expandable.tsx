'use client';

import useMeasure from 'react-use-measure';
import { JSX, RefObject, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
} from 'motion/react';

import { cn } from '@/lib/utils';
import useClickOutside from '@/hooks/use-click-outside';

const transition: Transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.25,
};

export interface ItemToolbar {
  id: number;
  label: string;
  title: JSX.Element;
  content?: JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
}

interface ToolbarExpandableProps {
  items: ItemToolbar[];
  className?: string;
}

export default function ToolbarExpandable({
  items,
  className,
}: ToolbarExpandableProps) {
  const [active, setActive] = useState<number | null>(null);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref as RefObject<HTMLElement>, () => {
    setIsOpen(false);
    setActive(null);
  });

  const maxWidth = widthContainer;

  return (
    <MotionConfig transition={transition}>
      <div className={className} ref={ref}>
        <div className="bg-background/40 border-foreground/10 h-full w-full rounded-xl border backdrop-blur-sm">
          <div className="flex space-x-4 p-2" ref={menuRef}>
            {items.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={cn(
                  'hover:bg-foreground/20 text-foreground/50 hover:text-foreground relative flex h-9 w-9 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg transition-colors select-none focus-visible:ring-2 active:scale-[0.98]',
                  active === item.id || item.isActive
                    ? 'bg-foreground/10 text-foreground'
                    : ''
                )}
                type="button"
                onClick={() => {
                  setActive(item.id);
                  if (item.content) {
                    setIsOpen(!isOpen);
                  } else {
                    setIsOpen(false);
                  }
                  if (item.onClick) item.onClick();
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: maxWidth,
                  }}
                >
                  <div ref={contentRef}>
                    {items.map((item) => {
                      const isSelected = active === item.id;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              'p-2 text-sm',
                              isSelected ? 'block' : 'hidden'
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
