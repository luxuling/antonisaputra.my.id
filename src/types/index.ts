export interface ContentAnalytic {
  views: number;
  likes: number;
  comments: number;
}

export interface Metadata {
  title: string;
  description: string;
  banner: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: [];
}
