export const SITE_CONFIG = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '1234567890',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hello, I would like to get in touch with you.',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID || '',
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
  spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
};

const genericPath = (url: string) => {
  return {
    root: url,
    detail: (slug: string) => `${url}/${slug}`,
  };
};

export const NAVIGATION_PATHS = {
  home: '/',
  posts: genericPath('/posts'),
  projects: genericPath('/projects'),
  me: '/me',
  guestbook: '/guestbook',
  tools: '/tools',
  request: '/request',
};
