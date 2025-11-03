export interface Post {
  slug: string;
  title: string;
  banner: string;
  description: string;
  tags: string[];
  content: string;
  meta: PostMeta;
}

interface PostMeta {
  views: number;
  likes: number;
  comments: number;
}
