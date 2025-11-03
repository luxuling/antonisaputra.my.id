import For from '@/components/core/for';
import posts from '@/lib/mock/post.json';
import PostCard from '@/components/post-card';
import Container from '@/components/container';
import Typography from '@/components/typography';

export default function RecentPost() {
  return (
    <Container className="relative">
      <Typography variant="h1">Recent Posts</Typography>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
        <For
          data={posts}
          render={(post) => (
            <PostCard post={post} className="w-full border-collapse" />
          )}
        />
      </div>
    </Container>
  );
}
