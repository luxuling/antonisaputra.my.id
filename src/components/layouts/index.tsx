import React, { ReactNode } from 'react';

import Footer from '../footer';
import Navbar from '../navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children} <Footer />
    </div>
  );
};

export default Layout;
