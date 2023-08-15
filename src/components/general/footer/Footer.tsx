import React, { FC, SyntheticEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'src/components/common/Typography';
import styles from './styles.module.scss';

const Footer: FC = () => {
  const handleOpenMail = useCallback((e: SyntheticEvent) => {
    window.location.href = 'mailto:hi@bau.finance';
    e.preventDefault();
  }, []);
  return (
    <footer className={styles.container}>
      <div className={styles.container__subFooter}>
        <nav className={styles.container__subFooter__nav}>
          <Link to="/">
            <Typography color="gray-300" variant="h3">
              Docs
            </Typography>
          </Link>
          <Link to="/">
            <img src="/images/Logo.svg" alt="logo" />
          </Link>
          <Link to="/">
            <Typography color="gray-300" variant="h3">
              Audit
            </Typography>
          </Link>
        </nav>
        <Link to="#" onClick={handleOpenMail}>
          <Typography color="primary" variant="h3">
            hi@bau.finance
          </Typography>
        </Link>
      </div>
      <div className={styles.container__widgets}>
        <Link to="/">
          <img src="/images/Twitter.png" alt="Twitter" />
        </Link>
        <Link to="/">
          <img src="/images/Github.png" alt="Github" />
        </Link>
        <Link to="/">
          <img src="/images/Telegram.png" alt="Telegram" />
        </Link>
        <Link to="/">
          <img src="/images/Mirror.png" alt="Mirror" />
        </Link>
        <Link to="/">
          <img src="/images/Discord.png" alt="Discord" />
        </Link>
      </div>
      <div className={styles.copyright}>
        <Typography color="textPrimary" variant="body4">
          &copy; | {new Date().getFullYear()} | Bau.Finance
        </Typography>
      </div>
    </footer>
  );
};
export default Footer;
