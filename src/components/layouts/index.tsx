import React, { ReactNode } from 'react';

import Footer from '../footer';
import Navbar from '../navbar';
import { AuthProvider } from '../provider/auth';
import { ThemeProvider } from '../theme-provider';
import { Toaster } from '../ui/toast';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='system' enableSystem={true}>
      <Toaster />
      <Navbar />
      <AuthProvider>{children}</AuthProvider>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
