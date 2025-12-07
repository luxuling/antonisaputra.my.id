import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProjectList } from '@/lib/mdx';
import ContentList from '@/sections/content/content-list';

export const metadata: Metadata = {
  title: 'List Page',
};
export default async function PostListPage() {
  const projects = await getProjectList();

  if (!projects) {
    notFound();
  }

  return (
    <ContentList
      list={projects}
      title="List Projects"
      subtitle="Experiments I’m trying and tools I’m building along the way"
    />
  );
}
