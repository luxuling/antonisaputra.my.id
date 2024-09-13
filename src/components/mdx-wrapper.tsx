'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import React from 'react';

export const MDXwrapper = (props: MDXRemoteProps) => {
  return <MDXRemote {...props} />;
};
