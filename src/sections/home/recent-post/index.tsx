'use client';

import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import For from '@/components/core/for';
import { PostList } from '@/types/post';
import Button from '@/components/button';
import Container from '@/components/container';
import { NAVIGATION_PATHS } from '@/lib/config';
import Typography from '@/components/typography';
import ContentCard from '@/components/content-card';

export default function RecentPost({ posts }: { posts: PostList }) {
  return (
    <Container>
      <div className="flex flex-col items-center gap-3 text-center">
        <Typography variant="h1">Recent Posts</Typography>
        <Typography>What’s On My Mind: Coding and Everything Else.</Typography>
      </div>
      <div
        className={cn(
          'mt-6 w-full',
          posts.length > 1
            ? 'mt-6 grid grid-cols-1 gap-2 md:grid-cols-2'
            : 'flex items-center justify-center'
        )}
      >
        <For
          data={posts}
          render={(post) => (
            <ContentCard
              content={post}
              className={cn(
                'h-full',
                posts.length > 1 ? 'w-full' : 'w-fit max-w-md'
              )}
              showActions={false}
            />
          )}
        />
      </div>
      <Button href={NAVIGATION_PATHS.posts.root} className="mx-auto mt-6">
        <Typography variant="base">See All</Typography>
        <ArrowUpRight />
      </Button>
    </Container>
  );
}
