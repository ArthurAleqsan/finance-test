import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'src/components/common/Typography';
import styles from './styles.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="body4" color="primary">
        Soon
      </Typography>
      <nav className={styles.container__nav}>
        <Link to="/" className={styles.container__nav__item}>
          <Typography variant="subtitle3" color="textPrimary">
            Vaults
          </Typography>
        </Link>
        <Link to="/" className={styles.container__nav__item}>
          <Typography variant="subtitle3" color="textPrimary">
            Dashboard
          </Typography>
        </Link>
        <Link to="/" className={styles.container__nav__item}>
          <Typography variant="subtitle3" color="textPrimary">
            Docs
          </Typography>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
