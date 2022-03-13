import { ReactNode, memo } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from 'styles/Layout.module.css';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.reset}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Layout);
