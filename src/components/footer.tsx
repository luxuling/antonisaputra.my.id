'use client';

import { cn } from '@/lib/utils';
import CurrentPlaySpotify from '@/components/current-play-spotify';
import { SocialLinks } from '@/sections/home/hero/components/social-links';

export default function Footer() {
  return (
    <footer className={cn('py-8')}>
      <div className={cn('container mx-auto px-4 text-center')}>
        <div className={cn('flex flex-col items-center gap-4')}>
          <CurrentPlaySpotify />
          <p className={cn('text-muted-foreground text-sm')}>
            &copy; {new Date().getFullYear()} Antoni Saputra. All rights
            reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
