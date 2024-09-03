'use client';

import * as React from 'react';
import ReactMarkDown from 'react-markdown';

import DATA from '@/data';

import BlurFade from '@/components/ui/blur-fade';
import BlurFadeText from '@/components/ui/blur-fade-text';

const AboutSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section className='mx-auto w-full max-w-2xl'>
      <BlurFadeText
        delay={DATA.animateDelay * 5}
        text='About'
        className='font-semibold text-lg md:font-bold md:text-xl'
      />
      <BlurFade delay={DATA.animateDelay * 6} className='mt-1'>
        <ReactMarkDown
          components={{
            p: (props) => (
              <p>
                {showMore
                  ? props.children
                  : `${props.children}`.substring(0, 120) + '...'}
                {showMore ? (
                  <button
                    className='font-semibold underline'
                    onClick={() => setShowMore(false)}
                  >
                    less
                  </button>
                ) : (
                  <button
                    className='font-semibold underline'
                    onClick={() => setShowMore(true)}
                  >
                    more
                  </button>
                )}
              </p>
            ),
            a: (props) => (
              <a target='_blank' href={props.href}>
                {props.children}
              </a>
            ),
          }}
          className='prose prose-p:text-primary prose-strong:font-semibold prose-strong:text-primary'
        >
          {DATA.summary}
        </ReactMarkDown>
      </BlurFade>
    </section>
  );
};

export default AboutSection;
