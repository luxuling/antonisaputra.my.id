import { cn } from '@/lib/utils';
import { Post } from '@/types/post';

import For from './core/for';
import Tag from './core/tag';
import { Comments, Likes, Views } from './content-meta';
import { Card, CardBanner, CardDescription, CardTitle } from './core/card';

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  return (
    <Card className={cn('flex h-full flex-col', className)}>
      <CardBanner src={post.banner} alt={post.title} />
      <CardTitle className="mt-2">{post.title}</CardTitle>
      <CardDescription>{post.description}</CardDescription>
      <div className="mt-2 mb-4 flex gap-2">
        <For data={post.tags} render={(tag) => <Tag key={tag} text={tag} />} />
      </div>
      <div className="mt-auto flex gap-4">
        <Views count={post.meta.views} />
        <Likes count={post.meta.likes} />
        <Comments count={post.meta.comments} />
      </div>
    </Card>
  );
}
