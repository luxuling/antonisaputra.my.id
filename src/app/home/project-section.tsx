import React from 'react';

import { getRecentProjects } from '@/lib/mdx';

import DATA from '@/data';

import BlurFade from '@/components/ui/blur-fade';
import { ProjectCard } from '@/components/ui/project-card';

const ProjectSection = async () => {
  const recentProjects = await getRecentProjects();

  return (
    <section className='mx-auto w-full max-w-2xl'>
      <BlurFade delay={DATA.animateDelay}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
              My Projects
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Check out my latest work
            </h2>
            <p className='text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              I&apos;ve worked on a variety of projects, from simple websites to
              complex applications. Here are a few of my latest project.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className='flex flex-col mt-7 gap-5 md:grid md:grid-cols-2'>
        {recentProjects.map((project) => (
          <BlurFade key={project.title}>
            <ProjectCard
              title={project.title}
              href={'/project/' + project.slug}
              tags={project.tags}
              description={project.description}
              date={project.date}
              image={project.image}
              previewUrl={project.previewUrl}
              githubUrl={project.githubUrl}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
