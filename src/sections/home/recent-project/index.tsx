'use client';

import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import For from '@/components/core/for';
import Button from '@/components/button';
import { ProjectList } from '@/types/project';
import Container from '@/components/container';
import { NAVIGATION_PATHS } from '@/lib/config';
import Typography from '@/components/typography';
import ContentCard from '@/components/content-card';

export default function RecentProject({ projects }: { projects: ProjectList }) {
  return (
    <Container>
      <div className="flex flex-col items-center gap-3">
        <Typography variant="h1">Recent Projects</Typography>
        <Typography>
          Experiments I’m trying and tools I’m building along the way
        </Typography>
        <Button href={NAVIGATION_PATHS.projects.root}>
          <Typography variant="base">See All</Typography>
          <ArrowUpRight />
        </Button>
      </div>
      <div
        className={cn(
          'mt-6 w-full',
          projects.length > 1
            ? 'mt-6 grid grid-cols-1 gap-2 md:grid-cols-2'
            : 'flex items-center justify-center'
        )}
      >
        <For
          data={projects}
          render={(project) => (
            <ContentCard
              content={project}
              className={cn(
                'h-full',
                project.length > 1 ? 'w-full' : 'w-fit max-w-md'
              )}
            />
          )}
        />
      </div>
    </Container>
  );
}
