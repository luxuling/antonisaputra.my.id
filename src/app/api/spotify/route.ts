import { NextResponse } from 'next/server';
import queryString from 'query-string';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async (): Promise<Response> => {
  const access_token = await getAccessToken();

  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token.access_token}`,
    },
  });
};

export async function GET() {
  const res = NextResponse.next();
  const response = await getNowPlaying();
  const spotifyData: SpotifyData = await response.json();

  if (
    response.status === 204 ||
    response.status > 400 ||
    spotifyData.currently_playing_type !== 'track'
  ) {
    //? s-maxage=180 because song usually lasts 3 minutes
    res.headers.set(
      'Cache-Control',
      'public, s-maxage=180, stale-while-revalidate=90',
    );
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const data = {
    isPlaying: spotifyData.is_playing,
    title: spotifyData.item.name,
    album: spotifyData.item.album.name,
    artist: spotifyData.item.album.artists
      .map((artist) => artist.name)
      .join(', '),
    albumImageUrl: spotifyData.item.album.images[0].url,
    songUrl: spotifyData.item.external_urls.spotify,
  };

  res.headers.set(
    'Cache-Control',
    'public, s-maxage=180, stale-while-revalidate=90',
  );
  return NextResponse.json(data, { status: 200 });
}
