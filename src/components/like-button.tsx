'use client';

import * as React from 'react';
import { toast } from 'sonner';

import showConfetti from '@/lib/confetti';

import { useLikesViewsContext } from '@/context/views-likes';
import createSupabaseCLient from '@/services/supabase-client';

import { Button } from './ui/button';

interface LikeButtonProps {
  slug: string;
  contentType: 'project' | 'blog';
}

const LikeButton = ({ slug, contentType }: LikeButtonProps) => {
  const { state, setState } = useLikesViewsContext();
  const [stage, setStage] = React.useState(20);
  const supabase = createSupabaseCLient();

  const table = React.useMemo(() => {
    return contentType === 'blog' ? 'blogs' : 'projects';
  }, [contentType]);

  const likeButtonHandler = async () => {
    const likes = state.likes + 1;

    if (stage > 5) {
      setStage(stage - 3);
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

  const isLiked = React.useMemo(() => {
    const stringLikes = localStorage.getItem('likes');
    if (stringLikes) {
      return JSON.parse(stringLikes).includes(slug);
    } else {
      return false;
    }
  }, []);

  return (
    <Button
      variant='outline'
      onClick={likeButtonHandler}
      className='gap-3 w-fit'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        stroke-width='2'
        stroke='#ef4444'
        className='relative overflow-hidden'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <defs>
          <clipPath id='clip-path'>
            <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
          </clipPath>
        </defs>
        <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
        <g clip-path='url(#clip-path)'>
          <rect
            x='0'
            y={isLiked ? 0 : stage}
            width='24'
            height='24'
            fill='#ef4444'
            transform-origin='12px 12px'
          ></rect>
        </g>
      </svg>
      {state.likes}
      <span>Likes</span>
    </Button>
  );
};

export default LikeButton;
