import { ContentMetadata } from '.';

export interface Project {
  slug: string;
  title: string;
  banner: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  meta: ContentMetadata;
}
