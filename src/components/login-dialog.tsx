'use client';

import { SiGoogle } from '@icons-pack/react-simple-icons';
import { GithubIcon } from 'lucide-react';
import React from 'react';

import createSupabaseCLient from '@/services/supabase-client';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface LoginDialogProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function LoginDialog({
  children,
  redirectTo,
}: LoginDialogProps) {
  const supabase = createSupabaseCLient();

  const loginGithubHandler = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}${redirectTo}`,
      },
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild={true}>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>
            To continue to antonisaputra.my.id
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <Button className='gap-2 w-full' onClick={loginGithubHandler}>
            <GithubIcon />
            Continue with GitHub
          </Button>
          <Button variant='outline' className='gap-2 text-foreground w-full'>
            <SiGoogle />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
