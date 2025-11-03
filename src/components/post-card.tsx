import { Eye, Heart, MessageCircleDashed } from 'lucide-react';

import { Post } from '@/types/post';

import For from './core/for';
import Tag from './core/tag';
import { Card, CardBanner, CardDescription, CardTitle } from './core/card';

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  return (
    <Card className={className}>
      <CardBanner src={post.banner} alt={post.title} />
      <CardTitle className="mt-2">{post.title}</CardTitle>
      <CardDescription>{post.description}</CardDescription>
      <div className="mt-2 flex gap-2">
        <For data={post.tags} render={(tag) => <Tag key={tag} text={tag} />} />
      </div>
      <div className="mt-4 flex gap-4">
        <Views count={post.meta.views} />
        <Likes count={post.meta.likes} />
        <Comments count={post.meta.comments} />
      </div>
    </Card>
  );
}

const Views = ({ count }: { count: number }) => {
  return (
    <div className="text-foreground/70 mt-2 flex items-center gap-1 text-sm">
      <Eye className="h-4 w-4" />
      <span>{count} views</span>
    </div>
  );
};

const Likes = ({ count }: { count: number }) => {
  return (
    <div className="text-foreground/70 mt-2 flex items-center gap-1 text-sm">
      <Heart className="h-4 w-4" />
      <span>{count} likes</span>
    </div>
  );
};

const Comments = ({ count }: { count: number }) => {
  return (
    <div className="text-foreground/70 mt-2 flex items-center gap-1 text-sm">
      <MessageCircleDashed className="h-4 w-4" />
      <span>{count} comments</span>
    </div>
  );
};
