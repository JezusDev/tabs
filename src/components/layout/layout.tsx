import { ReactElement } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout
