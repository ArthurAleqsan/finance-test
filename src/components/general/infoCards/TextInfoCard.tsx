import cn from 'classnames';
import React, { FC } from 'react';
import { Typography } from 'src/components/common/Typography';
import styles from './styles.module.scss';

const TextInfoCard: FC = () => {
  const fakeData = [
    {
      first: 'Curve fff',
      second: '12 LP',
      third: '$568',
      forth: '',
    },
    {
      first: 'COLIFRAX',
      second: '12.865 LP',
      third: '$568',
      forth: '',
    },
    {
      first: 'Curve COLIFRAX',
      second: '12.865 LP',
      third: '$568',
      forth: 'saaa',
    },
    {
      first: 'Curve COLIFRAX-33',
      second: '12.865 LP',
      third: '$568',
      forth: '',
    },
  ];
  return (
    <div className={cn(styles.container, styles.textInfoCard)}>
      <div className={styles.container__content}>
        <Typography color="textPrimary" variant="subtitle4">
          Your Position
        </Typography>
        {fakeData.map((d, i) => (
          <div key={d.first + i} className={styles.textInfoCard__row}>
            <Typography color="gray-300" variant="body2" className={styles.textInfoCard__row__first}>
              {d.first}
            </Typography>
            <Typography color="gray-300" variant="body2" className={styles.textInfoCard__row__second}>
              {d.second}
            </Typography>
            <Typography color="gray-300" variant="body2" className={styles.textInfoCard__row__third}>
              {d.third}
            </Typography>
            <Typography color="gray-300" variant="body2" className={styles.textInfoCard__row__forth}>
              {d.forth}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextInfoCard;
