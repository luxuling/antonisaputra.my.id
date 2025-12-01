'use client';

import { Toaster } from 'sonner';

import { Cursor } from '../cursor';
import Loading from '../../../app/loading';

interface ClientProviderProps {
  children?: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <>
      <Toaster
        position="top-right"
        expand={true}
        toastOptions={{
          className: '!bg-background/10 !text-white !py-2 !px-3 !w-fit',
        }}
      />
      <Cursor
        variants={{
          initial: { height: 0, opacity: 0, scale: 0.3 },
          animate: { height: 'auto', opacity: 1, scale: 1 },
          exit: { height: 0, opacity: 0, scale: 0.3 },
        }}
        transition={{
          type: 'spring',
          duration: 0.3,
          bounce: 0.1,
        }}
        springConfig={{
          bounce: 0.01,
        }}
      >
        <span className="bg-accent/5 block h-96 w-96 rounded-full blur-3xl brightness-150" />
      </Cursor>
      <Loading>{children}</Loading>
    </>
  );
}
