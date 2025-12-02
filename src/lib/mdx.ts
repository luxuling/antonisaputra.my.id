import path from 'node:path';
import fs from 'node:fs/promises';

import { Post, PostList } from '@/types/post';
import { Project, ProjectList } from '@/types/project';

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const post = await import(`@/data/posts/${slug}.mdx`);
  const { metadata, default: content } = post;

  const analytic = {
    views: 0,
    likes: 0,
    comments: 0,
  };

  return {
    slug,
    metadata,
    content,
    analytic,
  };
};

export const getPostList = async (): Promise<PostList> => {
  const files = await fs.readdir(path.join(process.cwd(), 'src/data/posts'));

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const { metadata } = await getPostBySlug(slug);

      const analytic = {
        views: 0,
        likes: 0,
        comments: 0,
      };

      return {
        slug,
        metadata,
        analytic,
      };
    })
  );
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const project = await import(`@/data/projects/${slug}.mdx`);
  const { metadata, default: content } = project;

  const analytic = {
    views: 0,
    likes: 0,
    comments: 0,
  };

  return {
    slug,
    metadata,
    content,
    analytic,
  };
};

export const getProjectList = async (): Promise<ProjectList> => {
  const files = await fs.readdir(path.join(process.cwd(), 'src/data/projects'));

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const { metadata } = await getProjectBySlug(slug);

      const analytic = {
        views: 0,
        likes: 0,
        comments: 0,
      };

      return {
        slug,
        metadata,
        analytic,
      };
    })
  );
};
