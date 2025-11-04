import { Eye, Heart, MessageCircleDashed } from 'lucide-react';

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

export { Views, Likes, Comments };
