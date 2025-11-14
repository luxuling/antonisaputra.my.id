import { NextResponse } from 'next/server';

import { SITE_CONFIG } from '@/lib/config';

const client_id = SITE_CONFIG.spotifyClientId;
const client_secret = SITE_CONFIG.spotifyClientSecret;
const refresh_token = SITE_CONFIG.spotifyRefreshToken;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting access token:', error);
    throw error;
  }
};

const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    return await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in getNowPlaying:', error);
    throw error;
  }
};

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    if (response.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: any) => _artist.name)
      .join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in GET /api/spotify:', error);
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }
}
