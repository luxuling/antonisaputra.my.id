'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

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
          : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
      }
      className='relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
    >
      <div className='w-16'>
        {data?.isPlaying ? (
          <Image
            width={200}
            height={200}
            className='w-16 shadow-sm'
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <Image
            width={20}
            height={20}
            src='/icons/spotify.svg'
            alt='Spotify'
          />
        )}
      </div>

      <div className='flex-1'>
        <p className='text-foreground font-bold'>
          {data?.isPlaying ? data.title : 'Not Listening'}
        </p>
        <p className='text-foreground text-xs'>
          {data?.isPlaying ? data.artist : 'Spotify'}
        </p>
      </div>
      <div className='absolute bottom-1.5 right-1.5'>
        <Image width={20} height={20} src='/icons/spotify.svg' alt='Spotify' />
      </div>
    </Link>
  );
}
