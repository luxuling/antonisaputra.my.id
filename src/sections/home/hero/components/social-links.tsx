import { Github, Linkedin } from 'lucide-react';

import { cn } from '@/lib/utils';
import Button from '@/components/button';
import { SITE_CONFIG } from '@/lib/config';
import XIcon from '@/components/icons/x-icon';
import { Tooltip } from '@/components/core/tooltip';

interface SocialLinksProps {
  className?: string;
}

const SOCIALS = [
  {
    icon: <Github size={14} />,
    link: SITE_CONFIG.githubUrl,
    label: 'GitHub',
  },
  {
    icon: <Linkedin size={14} />,
    link: SITE_CONFIG.linkedinUrl,
    label: 'LinkedIn',
  },
  {
    icon: <XIcon width={14} height={14} />,
    link: SITE_CONFIG.xUrl,
    label: 'X',
  },
];

export const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn('flex flex-row gap-2', className)}>
      {SOCIALS.map((social, index) => (
        <Tooltip key={index} tooltip={social.label}>
          <Button variant="icon" href={social.link} target="_blank">
            {social.icon}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};
