import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
