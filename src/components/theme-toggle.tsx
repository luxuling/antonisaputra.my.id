'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  if (!theme) return '';

  return theme === 'dark' ? (
    <div
      className='p-3 hover:bg-foreground/10 rounded-full'
      onClick={() => setTheme('light')}
    >
      <MoonStar />
    </div>
  ) : (
    <div
      className='p-3 hover:bg-foreground/10 rounded-full'
      onClick={() => setTheme('dark')}
    >
      <Sun />
    </div>
  );
};

export default ThemeToggle;
