'use client';

import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import LoginDialog from '@/components/login-dialog';
import { Button } from '@/components/ui/button';
import ShinyButton from '@/components/ui/shiny-button';
import { Textarea } from '@/components/ui/textarea';

import useGuestBookForm from './hook';

const GuestBookForm = () => {
  const { data, action } = useGuestBookForm();

  return (
    <section className='pt-10 flex flex-col gap-5'>
      {data.user ? (
        <div className='flex w-full max-w-xl mx-auto gap-4'>
          <Image
            src={data.user.user_metadata.avatar_url}
            width={300}
            height={300}
            alt='profile picture'
            className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground'
          />
          <div className='w-full'>
            <form
              className='w-full'
              onSubmit={(event) => action.submitHandler(event)}
            >
              <Textarea
                rows={4}
                placeholder='Leave your message'
                className='w-full'
                onChange={(event) => action.setMessage(event.target.value)}
              />
              <div className='flex justify-end gap-2 pt-2 items-center'>
                <Button
                  variant='outline'
                  type='button'
                  onClick={action.logOutHandler}
                >
                  {data.isLoading.logOut ? (
                    <LoaderCircle className='animate-spin' />
                  ) : (
                    'Log Out'
                  )}
                </Button>
                <Button disabled={data.message.length === 0} type='submit'>
                  {data.isLoading.submit ? (
                    <LoaderCircle className='animate-spin' />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='flex items-center gap-3 w-full max-w-xl mx-auto'>
          <LoginDialog redirectTo='/guestbook'>
            <ShinyButton>Login</ShinyButton>
          </LoginDialog>
          <span className='text-sm md:text-base'>
            to continue leaving a message
          </span>
        </div>
      )}
    </section>
  );
};

export default GuestBookForm;
