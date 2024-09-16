'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import { cn } from '@/lib';

import SpotifyIcon from '../../public/icons/spotify';

interface IData {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}
export default function SpotifyNowPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data }: { data: IData } = useSWR('/api/spotify', fetcher);
  return (
    <Link
      target='_blank'
      rel='noopener noreferer'
      href={
        data?.isPlaying
          ? data.songUrl
          : 'https://open.spotify.com/user/31rn7zt33qzljgvqmiklfkcaxcle'
      }
      className={cn(
        'relative flex  items-center gap-4 rounded-md border p-3 transition-shadow hover:shadow-md',
        data?.isPlaying ? 'w-72' : 'w-fit md:w-72',
      )}
    >
      <div>
        {data?.isPlaying ? (
          <Image
            width={200}
            height={200}
            className='w-16 shadow-sm rounded-md'
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <SpotifyIcon width={40} height={40} />
        )}
      </div>

      <div className='flex-1'>
        <p className='text-foreground font-bold text-sm line-clamp-2'>
          {data?.isPlaying ? data.title : 'Not Listening'}
        </p>
        <p className='text-foreground text-xs'>
          {data?.isPlaying ? data.artist : 'Spotify'}
        </p>
      </div>
      {data?.isPlaying ? (
        <div className='absolute bottom-3 right-3'>
          <SpotifyIcon width={20} height={20} />
        </div>
      ) : (
        ''
      )}
    </Link>
  );
}
