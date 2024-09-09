import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { IProject } from '@/types';

const root = process.cwd();

const PROJECT_PATH = path.join(root, 'content', 'projects');

const formatSlug = (slug: string) => slug.replace(/\.mdx$/, '');

const allProjectPath = fs.readdirSync(PROJECT_PATH);
const allProjectSlugs = allProjectPath.map((string) => formatSlug(string));

export const getProjectBySlug = async (slug: string): Promise<IProject> => {
  const projectFilePath = path.join(PROJECT_PATH, slug + '.mdx');
  const source = fs.readFileSync(projectFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content);

  const fronMatter = {
    ...data,
    mdxSource,
    date: Math.floor(new Date(data.date).getTime() / 1000),
    slug: slug,
  } as IProject;

  return fronMatter;
};

export const getAllProjects = async () => {
  const allProjects = await Promise.all(
    allProjectSlugs.map(async (slug) => await getProjectBySlug(slug)),
  );
  return allProjects.sort((a, b) => Number(a.date) - Number(b.date));
};

export const getRecentProjects = async () => {
  const allProjects: IProject[] = [];

  for (let i = 0; i < allProjectSlugs.length; i++) {
    if (i === 4) break;
    const project = await getProjectBySlug(allProjectSlugs[i]);
    allProjects.push(project);
  }

  return allProjects.sort((a, b) => Number(b.date) - Number(a.date));
};
