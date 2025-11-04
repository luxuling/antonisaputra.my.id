'use client';

import HomeHero from '@/sections/home/hero';
import RecentPost from '@/sections/home/recent-post';
import RecentProject from '@/sections/home/recent-project';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <RecentPost />
      <RecentProject />
    </main>
  );
}
