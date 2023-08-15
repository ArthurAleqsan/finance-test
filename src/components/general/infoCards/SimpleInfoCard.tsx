import cn from 'classnames';
import React, { FC } from 'react';
import TextField from 'src/components/common/TextField';
import { Typography } from 'src/components/common/Typography';
import styles from './styles.module.scss';

type Props = {
  withImage?: boolean;
};

const SimpleInfoCard: FC<Props> = ({ withImage = false }) => {
  return (
    <div className={cn(styles.container, styles.simpleInfoCard)}>
      <div className={styles.container__content}>
        <Typography color="textPrimary" variant="subtitle4">
          APY
        </Typography>
        <div className={styles.container__content__fieldSet}>
          <TextField firstText="Last harvest APY" secondText="7%  |" className="sm-rightMargin" size="sm" />
          <TextField firstText="Last harvest APY" secondText="7%  |" className="sm-rightMargin" size="sm" />
          <TextField firstText="Last harvest APY" secondText="7%" className="sm-rightMargin" size="sm" />
        </div>
      </div>
      {withImage && <img src="/images/decor.png" alt="decor" />}
    </div>
  );
};

export default SimpleInfoCard;
