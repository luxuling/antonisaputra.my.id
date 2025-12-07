import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPostList } from '@/lib/mdx';
import ContentList from '@/sections/content/content-list';

export const metadata: Metadata = {
  title: 'List Page',
};
export default async function PostListPage() {
  const posts = await getPostList();

  if (!posts) {
    notFound();
  }

  return (
    <ContentList
      list={posts}
      title="List Post"
      subtitle="What’s On My Mind: Coding and Everything Else."
    />
  );
}
