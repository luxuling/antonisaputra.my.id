'use client';

import * as React from 'react';
import { toast } from 'sonner';

import showConfetti from '@/lib/confetti';

import { useLikesViewsContext } from '@/context/views-likes';
import createSupabaseCLient from '@/services/supabase-client';

import ShinyButton from '../ui/shiny-button';

interface LikeButtonProps {
  slug: string;
  contentType: 'project' | 'blog';
}

const LikeButton = ({ slug, contentType }: LikeButtonProps) => {
  const { state, setState } = useLikesViewsContext();
  const [stage, setStage] = React.useState(0);
  const supabase = createSupabaseCLient();

  const table = React.useMemo(() => {
    return contentType === 'blog' ? 'blogs' : 'projects';
  }, [contentType]);

  const likeButtonHandler = async () => {
    const likes = state.likes + 1;

    if (stage !== 5) {
      setStage(stage + 1);
    }

    setState({ ...state, likes: likes });

    const { error } = await supabase
      .from(table)
      .update({
        likes: likes,
      })
      .eq('slug', slug);

    if (error) return toast.error(error.message);
  };

  React.useEffect(() => {
    if (stage === 5) {
      const stringLikes = localStorage.getItem('likes');
      if (stringLikes) {
        localStorage.setItem(
          'likes',
          JSON.stringify([...JSON.parse(stringLikes), slug]),
        );
      } else {
        localStorage.setItem('likes', JSON.stringify([slug]));
      }
      showConfetti();
    }
  }, [stage]);

  React.useEffect(() => {
    const channel = supabase
      .channel('update-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: table,
        },
        (payload) => {
          const { likes, views } = payload.new;
          setState({ likes, views });
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const isLiked = React.useMemo(() => {
    const stringLikes = localStorage.getItem('likes');
    if (stringLikes) {
      return JSON.parse(stringLikes).includes(slug);
    } else {
      return false;
    }
  }, []);

  return (
    <ShinyButton onClick={likeButtonHandler} className='gap-3 w-fit'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='#ef4444'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <defs>
          <clipPath id='clip-path'>
            <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
          </clipPath>
        </defs>
        <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
        <g clipPath='url(#clip-path)'>
          <rect
            x='0'
            y={isLiked ? 0 : 20 - stage * 3}
            width='24'
            height='24'
            fill='#ef4444'
          ></rect>
        </g>
      </svg>
      {state.likes}
      <span>Likes</span>
    </ShinyButton>
  );
};

export default LikeButton;
