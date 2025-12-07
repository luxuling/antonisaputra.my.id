import { cn } from '@/lib/utils';
import { PostList } from '@/types/post';
import For from '@/components/core/for';
import { ProjectList } from '@/types/project';
import Container from '@/components/container';
import Typography from '@/components/typography';
import ContentCard from '@/components/content-card';

interface ContentListProps {
  list: ProjectList | PostList;
  title: string;
  subtitle: string;
}

export default function ContentList({
  list,
  title,
  subtitle,
}: ContentListProps) {
  return (
    <Container>
      <div className="text-center">
        <Typography variant="h1">{title}</Typography>
        <Typography variant="base">{subtitle}</Typography>
      </div>
      <div
        className={cn(
          'mt-6 w-full',
          list.length > 1
            ? 'mt-6 grid grid-cols-1 gap-2 md:grid-cols-2'
            : 'flex items-center justify-center'
        )}
      >
        <For
          data={list}
          render={(content) => (
            <ContentCard
              content={content}
              className={cn(
                'h-full',
                list.length > 1 ? 'w-full' : 'w-fit max-w-md'
              )}
              showActions={false}
            />
          )}
        />
      </div>
    </Container>
  );
}
