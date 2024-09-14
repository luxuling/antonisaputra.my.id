'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import React, { HTMLProps } from 'react';

import '@/style/mdx.css';

import { convertToSlug } from '@/lib';

export const MDXwrapper = (props: MDXRemoteProps) => {
  const components = {
    h1: (props: HTMLProps<HTMLHeadingElement>) => (
      <div
        id={`#${convertToSlug(String(props.children))}`}
        className='flex items-center gap-2'
      >
        <div className='bg-foreground w-1.5 self-stretch' />
        <h1 className='text-foreground m-0'>{props.children}</h1>
      </div>
    ),
    h2: (props: HTMLProps<HTMLHeadingElement>) => (
      <div
        id={`#${convertToSlug(String(props.children))}`}
        className='flex items-center gap-2'
      >
        <div className='bg-foreground w-1.5 self-stretch' />
        <h2 className='text-foreground m-0'>{props.children}</h2>
      </div>
    ),
  };

  return (
    <section className='prose mdx'>
      <MDXRemote {...props} components={components} />
    </section>
  );
};
