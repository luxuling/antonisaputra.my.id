export const SITE_CONFIG = {
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '1234567890',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hello, I would like to get in touch with you.',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  threadUrl: process.env.NEXT_PUBLIC_THREAD_URL || '',
  xUrl: process.env.NEXT_PUBLIC_X_URL || '',
};

export const NAVIGATION_PATHS = {
  home: '/',
  post: '/post',
  project: '/project',
  about: '/about',
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: NAVIGATION_PATHS.home },
  { label: 'Posts', href: NAVIGATION_PATHS.post },
  { label: 'Projects', href: NAVIGATION_PATHS.project },
  { label: 'About Me', href: NAVIGATION_PATHS.about },
];
