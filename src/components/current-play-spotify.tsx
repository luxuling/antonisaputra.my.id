'use client';

import useSWR from 'swr';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import SpotifyIcon from '@/components/icons/spotify-icon';

import LazyImage from './lazy-image';

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
  const { data }: { data: IData } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 10000, // Refresh every 10 seconds
    revalidateOnFocus: true,
  });
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : 'https://open.spotify.com/user/31rn7zt33qzljgvqmiklfkcaxcle'
      }
      className={cn(
        'bg-foreground/[3%] border-foreground/10 hover:border-foreground/50 group relative flex w-fit scale-100 items-center gap-2 rounded-xl border p-2 backdrop-blur-sm transition-colors'
      )}
    >
      <div className="relative h-8 w-8 scale-100 overflow-hidden rounded-md">
        {data?.isPlaying ? (
          <LazyImage
            className="h-full w-full"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <SpotifyIcon width={20} height={20} />
        )}
      </div>

      <div className="flex-1 text-center">
        <p className="text-foreground line-clamp-1 text-xs font-medium">
          {data?.isPlaying ? data.title : 'Not Listening'}
        </p>
        <p className="text-muted-foreground text-xs">
          {data?.isPlaying ? data.artist : 'Spotify'}
        </p>
      </div>
    </Link>
  );
}
