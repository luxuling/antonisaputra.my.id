'use client';

import * as React from 'react';

import { copyToClipboard } from '@/lib';

import DATA from '@/data';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import BlurFade from './effect/blur-fade';
import SpotifyNowPlaying from './spotify-now-playing';

const Footer = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    lable: string,
    url: string,
  ) => {
    if (lable !== 'Email') return open(url, 'blank');
    event.preventDefault();
    copyToClipboard(url)
      .then(() => setIsCopied(true))
      .catch(() => setIsCopied(false));
  };
  return (
    <footer className='mt-20 flex flex-col items-center pb-20'>
      <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
        <BlurFade delay={DATA.animateDelay * 0.4}>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Get in Touch
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              If you want to have fun on social media with me, you need to check
              these links
            </p>
            <div className='flex items-center gap-4 justify-center'>
              {DATA.socialMedia.map((item, key) => (
                <TooltipProvider key={key} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={(e) => clickHandler(e, item.label, item.url)}
                    >
                      <div className='flex w-6 text-foreground'>
                        <item.icon />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      onPointerDownOutside={(e) => e.preventDefault()}
                    >
                      <p>
                        {isCopied && item.label === 'Email'
                          ? 'Copied to clipboard 👍'
                          : item.label}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
      <SpotifyNowPlaying />
    </footer>
  );
};

export default Footer;
