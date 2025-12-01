'use client';

import For from '@/components/core/for';
import Button from '@/components/button';
import { Project } from '@/types/project';
import Container from '@/components/container';
import Typography from '@/components/typography';
import ContentCard from '@/components/content-card';

export default function RecentProject({
  projects,
}: {
  projects: Omit<Project, 'content'>[];
}) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Typography variant="h1">Recent Project</Typography>
        <Button variant="link" href="/posts" className="mt-2">
          <Typography variant="base">View all projects</Typography>
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
        <For
          data={projects}
          render={(project) => (
            <ContentCard content={project} className="h-full w-full" />
          )}
        />
      </div>
    </Container>
  );
}
