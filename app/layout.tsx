import type { Metadata } from 'next';

import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrain-mono',
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
    <html lang="en">
      <body className={`${jetBrainsMono} antialiased`}>{children}</body>
    </html>
  );
}
