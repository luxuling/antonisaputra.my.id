import React, { ReactNode } from 'react';

import Footer from '../footer';
import Navbar from '../navbar';
import { ThemeProvider } from '../theme-provider';
import { Toaster } from '../ui/toast';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='system' enableSystem={true}>
      <Toaster />
      <Navbar />
      {children} <Footer />
    </ThemeProvider>
  );
};

export default Layout;
