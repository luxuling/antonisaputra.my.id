import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { cn, formatDate } from '@/lib';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  title: string;
  href: string;
  image?: string;
  description: string;
  date: number;
  tags: readonly string[];
  previewUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  previewUrl,
  githubUrl,
  date,
  tags,
  image,
  className,
}: Props) {
  return (
    <Card className='flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'>
      <Link
        href={href || '#'}
        className={cn('block cursor-pointer h-52 overflow-hidden', className)}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className='h-full hover:scale-105 w-full transition-transform overflow-hidden object-cover object-top'
          />
        )}
      </Link>
      <CardHeader className='px-2 mt-2'>
        <div className='space-y-1'>
          <CardTitle className='mt-1 text-base md:text-lg'>{title}</CardTitle>
          <time className='font-sans text-sm'>
            {formatDate(new Date(date * 1000))}
          </time>
          <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col px-2'>
        {tags && tags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {tags?.map((tag) => (
              <Badge
                className='px-1 py-0 text-xs'
                variant='secondary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='px-2 pb-2'>
        <div className='flex flex-row flex-wrap items-start gap-1'>
          {previewUrl && (
            <Link href={previewUrl} target='_blank'>
              <Badge className='flex gap-2 px-2 py-1 text-xs'>
                <Globe size={20} />
                Preview
              </Badge>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target='_blank'>
              <Badge className='flex gap-2 px-2 py-1 text-xs'>
                <Github size={20} />
                Github
              </Badge>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
