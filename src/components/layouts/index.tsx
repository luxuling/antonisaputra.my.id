import React, { ReactNode } from 'react';

import Footer from '../footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children} <Footer />{' '}
    </div>
  );
};

export default Layout;
