'use client';
import Image from 'next/image';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [blurDataURL, setBlurDataURL] = useState<null>(null);

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

  return blurDataURL ? (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes='100vh'
      loading="lazy"
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={cn('h-auto w-full object-contain duration-500', className)}
      quality={100}
    />
  ) : (
    ''
  );
}
