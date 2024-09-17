'use client';

import { LoaderCircle } from 'lucide-react';
import React from 'react';

import { MessageCard } from '@/components/ui/message-card';
import ShinyButton from '@/components/ui/shiny-button';

import useGuestBookList from './hook';

const GuestBookList = () => {
  const { data, action } = useGuestBookList();
  return (
    <section className='w-full items-center max-w-xl mx-auto flex flex-col gap-3 py-10'>
      {data.messages.map((message) => (
        <MessageCard
          key={message.id}
          avatar={message.avatar}
          message={message.message}
          fullName={message.fullName}
          createdAt={message.createdAt}
          profileId={message.profileId}
          userName={message.userName}
          provider={message.provider}
          id={message.id}
        />
      ))}
      {data.count > data.messages.length ? (
        <ShinyButton onClick={action.loadMore}>
          {data.fechingState.isLoading ? (
            <LoaderCircle className='animate-spin' />
          ) : (
            'Load more'
          )}
        </ShinyButton>
      ) : (
        ''
      )}
    </section>
  );
};

export default GuestBookList;
