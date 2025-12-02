'use client';

import For from '@/components/core/for';
import { PostList } from '@/types/post';
import Button from '@/components/button';
import Container from '@/components/container';
import Typography from '@/components/typography';
import ContentCard from '@/components/content-card';

export default function RecentPost({
  posts,
}: {
  posts: PostList;
}) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Typography variant="h1">Recent Posts</Typography>
        <Button variant="link" href="/posts" className="mt-2">
          <Typography variant="base">View all posts</Typography>
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
        <For
          data={posts}
          render={(post) => (
            <ContentCard
              content={post}
              className="h-full w-full"
              showActions={false}
            />
          )}
        />
      </div>
    </Container>
  );
}
