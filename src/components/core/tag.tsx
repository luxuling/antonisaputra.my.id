import { cn } from '@/lib/utils';

import Typography from '../typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function Tag({ text, ...props }: TagProps) {
  return (
    <div
      className={cn(
        'bg-foreground/[3%] border-foreground/10 w-fit rounded-full border px-2 py-[1px] hover:underline text-foreground/60',
        props.onClick ? 'cursor-pointer' : 'cursor-default'
      )}
      {...props}
    >
      <Typography variant="extra-small">#{text}</Typography>
    </div>
  );
}
