import { Github, Link } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Post } from '@/types/post';
import { formatDate } from '@/lib/utils';
import { Project } from '@/types/project';

import For from './core/for';
import Tag from './core/tag';
import Button from './button';
import { Comments, Likes, Views } from './content-meta';
import { Card, CardBanner, CardDescription, CardTitle } from './core/card';

type ContentCardProps = {
  content: Post | Project;
  className?: string;
  showActions?: boolean;
};

export default function ContentCard({
  content,
  className,
  showActions = true,
}: ContentCardProps) {
  const isProject =
    'githubUrl' in content.metadata || 'liveUrl' in content.metadata;
  const hasTags =
    content.metadata.tags &&
    Array.isArray(content.metadata.tags) &&
    content.metadata.tags.length > 0;

  return (
    <Card className={cn('flex h-full flex-col', className)}>
      <CardBanner src={content.metadata.banner} alt={content.metadata.title} />
      <CardTitle className="mt-2">
        <Button
          variant="link"
          href={
            isProject ? `/projects/${content.slug}` : `/posts/${content.slug}`
          }
          className='backdrop-blur-none no-underline hover:underline'
        >
          {content.metadata.title}
        </Button>
      </CardTitle>
      <CardDescription>{content.metadata.description}</CardDescription>

      {content.metadata.date && (
        <div className="text-foreground/60 mt-2 text-sm">
          {formatDate(content.metadata.date)}
        </div>
      )}

      {hasTags && (
        <div className="mt-2 mb-4 flex gap-2">
          <For
            data={content.metadata.tags || []}
            render={(tag) => <Tag key={tag} text={tag} />}
          />
        </div>
      )}

      {showActions && (
        <div className="mt-2 mb-4 flex gap-2">
          {isProject && (
            <>
              {content.metadata.githubUrl && (
                <Button
                  variant="icon"
                  href={content.metadata.githubUrl}
                  target="_blank"
                >
                  <Github size={14} />
                </Button>
              )}
              {content.metadata.liveUrl && (
                <Button
                  variant="icon"
                  href={content.metadata.liveUrl}
                  target="_blank"
                >
                  <Link size={14} />
                </Button>
              )}
            </>
          )}
        </div>
      )}

      <div className="mt-auto flex gap-4">
        <Views count={content.analytic.views} />
        <Likes count={content.analytic.likes} />
        <Comments count={content.analytic.comments} />
      </div>
    </Card>
  );
}
