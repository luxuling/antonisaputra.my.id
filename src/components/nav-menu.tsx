'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LucideIcon, MessageCircleQuestionMark, ToolCase } from 'lucide-react';
import {
  BookUser,
  Ghost,
  Home,
  LayoutPanelTop,
  SquareTerminal,
  TextCursorInput,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { NAVIGATION_PATHS } from '@/lib/config';

import Typography from './typography';
import ToolbarExpandable, { ItemToolbar } from './core/toolbar-expandable';

const isPathNameSame = (path: string, pathname: string) => {
  return path.replace('/', '') === pathname.replace('/', '');
};

export default function NavMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const menus: ItemToolbar[] = useMemo(
    () => [
      {
        id: 1,
        label: 'Home',
        title: <Home className="h-4 w-4" />,
        onClick: () => router.push(NAVIGATION_PATHS.home),
        isActive: isPathNameSame(NAVIGATION_PATHS.home, pathname),
      },
      {
        id: 2,
        label: 'Posts',
        title: <TextCursorInput className="h-4 w-4" />,
        onClick: () => router.push(NAVIGATION_PATHS.posts.root),
        isActive: isPathNameSame(NAVIGATION_PATHS.posts.root, pathname),
      },
      {
        id: 3,
        label: 'Projects',
        title: <SquareTerminal className="h-4 w-4" />,
        onClick: () => router.push(NAVIGATION_PATHS.projects.root),
        isActive: isPathNameSame(NAVIGATION_PATHS.projects.root, pathname),
      },
      {
        id: 4,
        label: 'Me',
        title: <Ghost className="h-4 w-4" />,
        onClick: () => router.push(NAVIGATION_PATHS.me),
        isActive: isPathNameSame(NAVIGATION_PATHS.me, pathname),
      },
      {
        id: 5,
        label: 'Other',
        title: <LayoutPanelTop className="h-4 w-4" />,
        isActive:
          isPathNameSame(NAVIGATION_PATHS.guestbook, pathname) ||
          isPathNameSame(NAVIGATION_PATHS.tools, pathname) ||
          isPathNameSame(NAVIGATION_PATHS.request, pathname),
        content: (
          <div className="space-y-2">
            <NavigationCard
              icon={BookUser}
              title="Guest book"
              description="Leave a Little Love Behind!"
              onClick={() => router.push(NAVIGATION_PATHS.guestbook)}
            />
            <NavigationCard
              icon={ToolCase}
              title="Tools"
              description="The Toolkit I Use to Build"
              onClick={() => router.push(NAVIGATION_PATHS.guestbook)}
            />
            <NavigationCard
              icon={MessageCircleQuestionMark}
              title="Request"
              description="The Q&A Hub"
              onClick={() => router.push(NAVIGATION_PATHS.guestbook)}
            />
          </div>
        ),
      },
    ],
    [pathname, router]
  );

  return (
    <ToolbarExpandable
      items={menus}
      className="fixed top-10 left-1/2 z-50 -translate-x-1/2"
    />
  );
}

interface NavigationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}

function NavigationCard({
  icon: Icon,
  title,
  description,
  onClick,
  className = '',
}: NavigationCardProps) {
  return (
    <button
      type="button"
      className={cn(
        'border-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground flex w-full items-center gap-3 rounded-lg border p-2 transition-colors',
        className
      )}
      onClick={onClick}
    >
      <div className="bg-foreground/10 rounded-lg p-2">
        <Icon className="h-4 w-4" />
      </div>
      <div className="h-fit text-left">
        <Typography variant="small" className="leading-5">
          {title}
        </Typography>
        <Typography variant="extra-small" className="leading-5">
          {description}
        </Typography>
      </div>
    </button>
  );
}
