import React, { ReactNode } from 'react';

import Footer from '../footer';
import Navbar from '../navbar';
import { ThemeProvider } from '../theme-provider';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='system' enableSystem={true}>
      <Navbar />
      {children} <Footer />
    </ThemeProvider>
  );
};

export default Layout;
