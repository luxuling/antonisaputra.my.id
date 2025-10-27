import type { Metadata } from 'next';

import { JetBrains_Mono, DotGothic16 } from 'next/font/google';

import './globals.css';
import ClientProvider from '@/components/provider/client-provider';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jetbrain-mono',
});

const dotGothic = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dotgothic-sans',
});

export const metadata: Metadata = {
  title: 'Antoni Saputra',
  description:
    'Antoni Saputra is a passionate software engineer who loves building innovative solutions and has a deep appreciation for Linux and open-source technologies.',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${dotGothic.variable} antialiased`}
    >
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
