import {
  BookOpenText,
  BriefcaseBusiness,
  House,
  LucideIcon,
  ScrollText,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import { Dock, DockIcon } from '@/components/ui/dock';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
const ThemeToggle = dynamic(() => import('./theme-toggle'), { ssr: false });

interface INavbarLink {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  url: string;
}

const navbarLinks: INavbarLink[] = [
  {
    icon: <House />,
    label: 'Home',
    url: '/',
  },
  {
    icon: <BriefcaseBusiness />,
    label: 'Project',
    url: '/project',
  },
  {
    icon: <ScrollText />,
    label: 'Blog',
    url: '/blog',
  },
  {
    icon: <BookOpenText />,
    label: 'Guestbook',
    url: '/guestbook',
  },
];

const Navbar = () => {
  return (
    <nav className='fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50'>
      <Dock direction='middle' className='gap-7'>
        {navbarLinks.map((link, index) => (
          <DockIcon key={index}>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    className='p-3 hover:bg-foreground/10 rounded-full'
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{link.label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DockIcon>
        ))}
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </nav>
  );
};

export default Navbar;
