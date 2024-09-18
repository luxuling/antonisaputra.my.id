import React from 'react';

import { convertToSlug } from '@/lib';

type HeadType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  tag: HeadType;
}

const Head = ({
  tag,
  ...props
}: { tag: HeadType } & React.HTMLProps<HTMLHeadingElement>) => {
  return tag === 'h1' ? (
    <h1 {...props}>{props.children}</h1>
  ) : tag === 'h2' ? (
    <h2 {...props}>{props.children}</h2>
  ) : tag === 'h3' ? (
    <h3 {...props}>{props.children}</h3>
  ) : tag === 'h4' ? (
    <h4 {...props}>{props.children}</h4>
  ) : tag === 'h5' ? (
    <h5 {...props}>{props.children}</h5>
  ) : tag === 'h6' ? (
    <h6 {...props}>{props.children}</h6>
  ) : null;
};

const Heading = ({ tag, ...props }: HeadingProps) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='bg-foreground w-1.5 self-stretch' />
      <Head
        tag={tag}
        id={`${convertToSlug(String(props.children))}`}
        className='text-foreground m-0'
      >
        {props.children}
      </Head>
    </div>
  );
};

export default Heading;
