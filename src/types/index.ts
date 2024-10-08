import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IHeadings {
  level: number;
  text: string;
  link: string;
}

export interface IProject {
  title: string;
  description: string;
  slug: string;
  image: string;
  tags: string[];
  date: number;
  previewUrl?: string;
  githubUrl?: string;
  headings: IHeadings[];
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

export interface IMessage {
  id: number;
  profileId: string;
  avatar: string;
  message: string;
  userName: string;
  fullName: string;
  provider: string;
  createdAt: string;
}
