'use client';

import Loading from '../../../app/loading';

interface ClientProviderProps {
  children?: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <>
      <Loading>{children}</Loading>
    </>
  );
}
