import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IProject {
  title: string;
  description: string;
  slug: string;
  image: string;
  tags: string[];
  date: number;
  previewUrl?: string;
  githubUrl?: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}
