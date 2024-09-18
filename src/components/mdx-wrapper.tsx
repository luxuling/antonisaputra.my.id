'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import React, { HTMLProps } from 'react';

import '@/style/mdx.css';

import Heading from './ui/heading';

export const MDXwrapper = (props: MDXRemoteProps) => {
  const components = {
    h1: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h1' {...props} />
    ),
    h2: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h2' {...props} />
    ),
    h3: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h3' {...props} />
    ),
    h4: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h4' {...props} />
    ),
    h5: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h5' {...props} />
    ),
    h6: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading tag='h6' {...props} />
    ),
  };

  return (
    <section className='prose mdx'>
      <MDXRemote {...props} components={components} />
    </section>
  );
};
