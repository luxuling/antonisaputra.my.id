'use client';

import HomeHero from '@/sections/home/hero';
import RecentPost from '@/sections/home/recent-post';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <RecentPost />
    </main>
  );
}
