'use client';
import Image from 'next/image';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useBoolean } from '@/hooks/use-boolean';

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, { setTrue }] = useBoolean(false);
  const [blurDataURL, setBlurDataURL] = useState<string>('');

  useEffect(() => {
    const fetchBlurData = async () => {
      try {
        const response = await fetch(
          `/api/blur?url=${encodeURIComponent(src)}`
        );
        const data = await response.json();

        if (data.blurDataURL) {
          setBlurDataURL(data.blurDataURL);
        }
      } catch (error: any) {
        toast.error('Failed to fetch blur data:', error.message);
      } finally {
      }
    };

    fetchBlurData();
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      onLoad={() => setTrue()}
      loading="lazy"
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL || undefined}
      className={cn(
        'h-auto w-full object-contain transition-all duration-500',
        isLoaded ? 'blur-0 scale-100' : 'scale-105 blur-sm',
        className
      )}
      quality={100}
    />
  );
}
