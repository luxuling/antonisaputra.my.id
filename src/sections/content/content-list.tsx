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
      <Typography variant="h1">{title}</Typography>
      <Typography variant="base">{subtitle}</Typography>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
        <For
          data={list}
          render={(content) => (
            <ContentCard
              content={content}
              className="h-full w-full"
              showActions={false}
            />
          )}
        />
      </div>
    </Container>
  );
}
