import { Github, Link } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

import Button from './button';
import { Comments, Likes, Views } from './content-meta';
import { Card, CardBanner, CardDescription, CardTitle } from './core/card';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <CardBanner src={project.banner} alt={project.title} />
      <CardTitle className="mt-2">{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
      <div className="mt-2 mb-4 flex gap-2">
        <Button variant="icon" href={project.githubUrl} target="_blank">
          <Github size={14} />
        </Button>
        <Button variant="icon" href={project.liveUrl} target="_blank">
          <Link size={14} />
        </Button>
      </div>
      <div className="mt-auto flex gap-4">
        <Views count={project.meta.views} />
        <Likes count={project.meta.likes} />
        <Comments count={project.meta.comments} />
      </div>
    </Card>
  );
}
