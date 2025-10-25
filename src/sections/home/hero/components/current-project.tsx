import TextLink from '@/components/link';
import Typography from '@/components/typography';

export default function CurrentProject() {
  return (
    <div className="from-accent/20 to-background w-fit rounded-full bg-linear-to-r px-3 py-2">
      <div className="from-accent/20 to-background flex w-fit items-center gap-2 rounded-full bg-linear-to-r px-3 py-2 backdrop-blur-md">
        <span className="bg-foreground shadow-foreground block h-2 w-2 animate-pulse rounded-full shadow brightness-200" />
        <Typography variant="small">Building on my own at</Typography>

        <TextLink href="https://status.antoni.dev" className="text-sm">
          status.antoni.dev
        </TextLink>
      </div>
    </div>
  );
}
