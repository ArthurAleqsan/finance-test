import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/common/Button';
import TextField from 'src/components/common/TextField';
import { Typography } from 'src/components/common/Typography';
import styles from './styles.module.scss';

const SubHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className="col-30">
        <Button variant="text" size="contained" icon={'/images/icon/arrow.svg'} className={styles.container__btn}>
          back
        </Button>
      </div>
      <div className="col-40">
        <div className={styles.container__centralWidget}>
          <img src={'/images/sub-logo.svg'} alt={'logo'} className={styles.container__centralWidget__logo} />
          <Typography color="textPrimary" className={styles.container__centralWidget__text}>
            DYDX-ETH
          </Typography>
          <Link to="/" className={styles.container__centralWidget__link}>
            <Typography color="textPrimary">Curve Colifrax</Typography>
          </Link>
        </div>
      </div>
      <div className="col-30">
        <div>
          <TextField firstText="Vault TVL" secondText="$20.000" variant="primary" />
          <TextField firstText="Last harvest:" secondText="2 hours ago" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
