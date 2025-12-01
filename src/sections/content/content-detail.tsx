import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';

import { Post } from '@/types/post';
import Tag from '@/components/core/tag';
import { formatDate } from '@/lib/utils';
import Button from '@/components/button';
import { Project } from '@/types/project';
import Container from '@/components/container';
import LazyImage from '@/components/lazy-image';
import Typography from '@/components/typography';
import { Comments, Likes, Views } from '@/components/content-meta';

interface ContentDetailProps {
  contentMetadata: Post | Project;
  Data: FC<{}>;
}

export default function ContentDetail({
  contentMetadata,
  Data,
}: ContentDetailProps) {
  return (
    <Container>
      <Button variant="link" href="/" className="mb-6">
        <ArrowLeft size={16} className="mr-2" />
        Back to Home
      </Button>

      <Typography variant="h1" className="mb-4">
        {contentMetadata.metadata.title}
      </Typography>

      <div className="h-[300px] bg-white w-full flex justify-center items-center overflow-hidden rounded-md">
        <LazyImage
          src={contentMetadata.metadata.banner}
          alt={contentMetadata.metadata.title}
        />
      </div>
      <div className="mt-10">
        <div className=" flex flex-wrap items-center gap-4 text-sm">
          <span>{formatDate(contentMetadata.metadata.date)}</span>
          {contentMetadata.metadata.tags && (
            <div className="flex gap-2">
              {contentMetadata.metadata.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-4">
          <Views count={contentMetadata.analytic.views} />
          <Likes count={contentMetadata.analytic.likes} />
          <Comments count={contentMetadata.analytic.comments} />
        </div>
      </div>
      <div className="prose prose-invert mt-10 max-w-none">
        <Data />
      </div>
    </Container>
  );
}
