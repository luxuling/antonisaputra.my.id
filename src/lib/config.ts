export const SITE_CONFIG = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '1234567890',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hello, I would like to get in touch with you.',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  threadUrl: process.env.NEXT_PUBLIC_THREAD_URL || '',
  xUrl: process.env.NEXT_PUBLIC_X_URL || '',
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
  about: '/about',
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: NAVIGATION_PATHS.home },
  { label: 'Posts', href: NAVIGATION_PATHS.posts.root },
  { label: 'Projects', href: NAVIGATION_PATHS.project },
  { label: 'About Me', href: NAVIGATION_PATHS.about },
];
