import HomeHero from '@/sections/home/hero';
import Contact from '@/sections/home/contact';
import RecentPost from '@/sections/home/recent-post';
import { getPostList, getProjectList } from '@/lib/mdx';
import RecentProject from '@/sections/home/recent-project';

export default async function Home() {
  const posts = await getPostList();
  const projects = await getProjectList();
  return (
    <main className="overflow-hidden pb-16">
      <HomeHero />
      <RecentPost posts={posts} />
      <RecentProject projects={projects} />
      <Contact />
    </main>
  );
}
