import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getProjectBySlug } from '@/lib/mdx';

import { MDXwrapper } from '@/components/mdx-wrapper';
import TableOfContent from '@/components/toc';
import { Badge } from '@/components/ui/badge';

const DetailProject = async ({ params }: { params: { slug: string } }) => {
  const project = await getProjectBySlug(params.slug);

  return (
    <main className='mx-auto w-full max-w-4xl'>
      <section>
        <Image
          src={project.image}
          width={900}
          height={600}
          alt='Project Thubmnail'
          className='rounded-md'
        />
        <div className='py-3'>
          <h1 className='text-2xl font-bold'>{project.title}</h1>
          <p className='text-muted-foreground'>{project.description}</p>
          <div className='pt-3 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <Badge key={tag} variant='secondary'>
                {tag}
              </Badge>
            ))}
          </div>
          {/*<ViewsLikes />*/}
          <div className='flex flex-row flex-wrap items-start gap-1 py-3'>
            {project.previewUrl && (
              <Link href={project.previewUrl} target='_blank'>
                <Badge className='flex gap-2 px-2 py-1 text-xs'>
                  <Globe size={20} />
                  Preview
                </Badge>
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target='_blank'>
                <Badge className='flex gap-2 px-2 py-1 text-xs'>
                  <Github size={20} />
                  Github
                </Badge>
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className='flex relative gap-5'>
        {project.mdxSource ? <MDXwrapper {...project.mdxSource} /> : ''}
        <TableOfContent headings={project.headings} />
      </section>
    </main>
  );
};

export default DetailProject;
