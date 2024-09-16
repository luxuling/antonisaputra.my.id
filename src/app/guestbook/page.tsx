import { Pin } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

import GuestBookForm from './guestbook-form';

export const metadata: Metadata = {
  title: 'Guest Book | Antoni Saputra',
};

const GuestBookPage = () => {
  return (
    <main>
      <section className='w-full border-b pb-10 flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
          Guest book
        </h1>
        <p>
          Sign my guestbook and share your idea. You can tell me anything here!
        </p>
      </section>
      <section className='mt-10 rounded-lg bg-foreground text-background p-4 flex flex-col gap-4 w-full max-w-xl mx-auto'>
        <div className='flex items-center gap-2'>
          <Pin strokeWidth={1} />
          <span className='font-medium md:text-lg'>Pinned</span>
        </div>
        <p className='text-sm md:text-base'>
          Hey there! Thanks for visiting my website. If you have a moment, I'd
          love to hear your thoughts on my work. Please log in with your account
          to leave a comment. Thanks!
        </p>
      </section>
      <GuestBookForm />
    </main>
  );
};

export default GuestBookPage;
