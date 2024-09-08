import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import DATA from '@/data';

import BlurFade from '@/components/effect/blur-fade';
import { Badge } from '@/components/ui/badge';

const ServiceSection = () => {
  return (
    <section className='mx-auto w-full max-w-2xl border rounded-lg py-3 items-center justify-center bg-black'>
      <BlurFade delay={DATA.animateDelay}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl text-white font-bold tracking-tighter sm:text-5xl'>
              Want to build something with me?
            </h2>
            <p className='text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              If you have an idea to build something and don't know how to turn
              it into reality, let me help you! 😎
            </p>
          </div>
          <Link
            target='_blank'
            href='https://api.whatsapp.com/send?phone=62895358367900&text=Hi!'
          >
            <Badge className='text-sm md:text-base gap-2 py-2 bg-white text-black hover:bg-white/60'>
              <MessageCircle />
              Talk to me!
            </Badge>
          </Link>
        </div>
      </BlurFade>
    </section>
  );
};

export default ServiceSection;
