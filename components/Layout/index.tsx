import React, { FC, ReactNode, memo } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

type Props = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default memo(Layout);
