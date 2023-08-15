import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from 'src/components/common/SvgIcon';
import Navigation from '../navigation';
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className="col-30">
        <div className={styles.container__logo}>
          <Link to="/">
            <SvgIcon src={'/images/Logo.svg'} />
          </Link>
        </div>
      </div>
      <div className="col-40">
        <Navigation />
      </div>
      <div className="col-30"></div>
    </header>
  );
};

export default Header;
