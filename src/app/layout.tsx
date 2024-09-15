import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib';

import Layout from '@/components/layouts';

const sans = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antoni saputra',
  description:
    "A person who enjoys coding and building things, I enjoy assisting others in their projects. Let's get in touch!",
  keywords: [
    'antoni saputra',
    'antoni',
    'freelancer',
    'portofolio antoni saputra',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth scroll-pt-5'>
      <body
        className={cn(
          sans.className,
          'min-h-screen bg-background py-12 sm:py-24 px-6',
        )}
      >
        <Layout>{children}</Layout>
      </body>
      {process.env.NEXT_PUBLIC_ENV! === 'production' && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
