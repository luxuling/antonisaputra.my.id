'use client';

import HomeHero from '@/sections/home/hero';
import Contact from '@/sections/home/contact';
import RecentPost from '@/sections/home/recent-post';
import RecentProject from '@/sections/home/recent-project';

export default function Home() {
  return (
    <main className="overflow-hidden pb-16">
      <HomeHero />
      <RecentPost />
      <RecentProject />
      <Contact />
    </main>
  );
}
