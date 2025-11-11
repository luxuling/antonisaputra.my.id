import For from '@/components/core/for';
import posts from '@/lib/mock/post.json';
import Button from '@/components/button';
import PostCard from '@/components/post-card';
import Container from '@/components/container';
import Typography from '@/components/typography';

export default function RecentPost() {
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
          render={(post) => <PostCard post={post} className="h-full w-full" />}
        />
      </div>
    </Container>
  );
}
