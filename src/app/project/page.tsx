import { Metadata } from 'next';
import React from 'react';

import { getAllProjects } from '@/lib/mdx';

import BlurFade from '@/components/effect/blur-fade';
import { ProjectCard } from '@/components/ui/project-card';

export const metadata: Metadata = {
  title: 'Project | Antoni Saputra',
};

const ProjectListPage = async () => {
  const projects = await getAllProjects();
  return (
    <main className='mx-auto w-full max-w-4xl'>
      <section className='w-full border-b pb-5 flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
          Project
        </h1>
        <p>The list of my projects. Everything was made with 💙.</p>
      </section>
      <section className='flex flex-col mt-7 gap-5 md:grid md:grid-cols-2'>
        {projects.map((project) => (
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
      </section>
    </main>
  );
};

export default ProjectListPage;
