import rehypeShiki from '@shikijs/rehype';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { convertToSlug } from '.';

import { IHeadings, IProject } from '@/types';

const root = process.cwd();

const PROJECT_PATH = path.join(root, 'content', 'projects');

const formatSlug = (slug: string) => slug.replace(/\.mdx$/, '');

const allProjectPath = fs.readdirSync(PROJECT_PATH);
const allProjectSlugs = allProjectPath.map((string) => formatSlug(string));

function extractHeadings(content: string): IHeadings[] {
  const headingRegex = /^(#+)\s+((?!\[.*\]\(.*\)).*)/gm;
  let match;
  const headings = [];

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const link = convertToSlug(match[2]);
    headings.push({ level, text, link });
  }

  return headings;
}

export const getProjectBySlug = async (slug: string): Promise<IProject> => {
  const projectFilePath = path.join(PROJECT_PATH, slug + '.mdx');
  const source = fs.readFileSync(projectFilePath);

  const { content, data } = matter(source);
  const headings = extractHeadings(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            inline: 'tailing-curly-colon',
            themes: {
              dark: 'github-dark-default',
              light: 'github-light-default',
            },
          },
        ],
      ],
    },
  });

  const fronMatter = {
    ...data,
    mdxSource,
    date: Math.floor(new Date(data.date).getTime() / 1000),
    slug: slug,
    headings,
  } as IProject;

  return fronMatter;
};

export const getAllProjects = async () => {
  const allProjects = await Promise.all(
    allProjectSlugs.map(async (slug) => await getProjectBySlug(slug)),
  );
  return allProjects.sort((a, b) => Number(b.date) - Number(a.date));
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
