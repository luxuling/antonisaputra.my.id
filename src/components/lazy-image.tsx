'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useBoolean } from '@/hooks/use-boolean';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, { setTrue }] = useBoolean(false);

  return (
    <Image
      src={src}
      alt={alt}
      onLoadingComplete={() => setTrue()}
      loading="lazy"
      className={cn(
        'h-full w-full object-cover',
        isLoaded ? 'blur-none' : 'blur-lg',
        className
      )}
      fill
    />
  );
}
