'use client';

import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { timeAgo } from '@/lib';

import { Card } from './card';
import { useAuthContext } from '../provider/auth';

import { IMessage } from '@/types';

export const MessageCard = ({
  avatar,
  fullName,
  createdAt,
  message,
  userName,
  provider,
  profileId,
}: IMessage) => {
  const { user } = useAuthContext();
  return (
    <Card className='p-4 w-full border border-muted flex gap-4 items-start relative'>
      <Image
        src={avatar}
        width={300}
        height={300}
        alt='profile picture'
        className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground'
      />
      <div>
        <div>
          <h3 className='font-semibold'>
            {fullName}
            {user && user.id === profileId ? (
              <span className='font-normal text-secondary'> (you)</span>
            ) : (
              ''
            )}
          </h3>
          <span className='text-xs text-secondary'>{timeAgo(createdAt)}</span>
        </div>
        <p className='text-sm md:text-base'>{message}</p>
      </div>
      {provider === 'github' && (
        <Link
          href={`https://github.com/${userName}`}
          target='_blank'
          className='absolute z-10 top-3 right-3 animate-pulse hover:animate-none'
        >
          <Github />
        </Link>
      )}
    </Card>
  );
};
