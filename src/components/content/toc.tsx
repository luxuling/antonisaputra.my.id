'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { cn } from '@/lib';

import { IHeadings } from '@/types';

export default function TableOfContent({
  headings,
}: {
  headings: IHeadings[];
}) {
  const [active, setActive] = useState(
    headings.length > 0 ? headings[0].link : '',
  );

  const isElementInViewport = (el: HTMLElement | null) => {
    if (!el) return [];
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = React.useCallback(() => {
    const headingElements = headings.map(({ link }) =>
      document.getElementById(link),
    );
    const visibleHeadings = headingElements.filter((el) =>
      isElementInViewport(el),
    );
    if (visibleHeadings.length > 0) {
      if (!visibleHeadings[0]) return;
      setActive(visibleHeadings[0].id);
    }
  }, [headings]);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='flex w-full gap-3 h-fit flex-col text-ellipsis'>
      {headings.length > 0 && (
        <h2 className='flex items-center gap-2 font-bold'>On this page</h2>
      )}
      {headings.map((heading) => {
        const textSize =
          heading.level === 1 || heading.level === 2 ? 'text-base' : 'text-sm';

        return (
          <Link
            href={`#${heading.link}`}
            key={heading.link}
            style={{
              marginLeft: heading.level > 2 ? heading.level * 5 + 'px' : 0,
            }}
            className={cn(
              textSize,
              'hover:underline',
              active === heading.link
                ? 'text-foreground'
                : 'text-foreground/60',
            )}
          >
            <p className='text-wrap'>{heading.text}</p>
          </Link>
        );
      })}
    </div>
  );
}
