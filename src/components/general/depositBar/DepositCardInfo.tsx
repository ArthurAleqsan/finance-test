import React, { FC } from 'react';
import { Typography } from '../../common/Typography';
import styles from './styles.module.scss';

const DepositCardInfo: FC = () => {
  const fakeData = [
    {
      roleName: 'You sell',
      balance: `Balance: 0.7412`,
      balanceImg: '/images/max.png',
      logo: 'images/eth.png',
      number: 1,
      cryptoName: 'Ethereum',
      cost: '~$1.849,06',
    },
    {
      roleName: 'You buy',
      balance: `Balance: 0.678`,
      logo: 'images/dydx.png',
      number: 0,
      cryptoName: 'Curve',
      cost: '~$1.849,06',
    },
  ];
  return (
    <div>
      {fakeData.map((data, i) => (
        <>
          <div key={i} className={styles.depositCardInfo}>
            <div className={styles.currentCard}>
              <Typography color="gray-300" variant="body2" className={styles.block}>
                <Typography component="span"> {data.roleName}</Typography>
                <Typography component="span">
                  {data.balance} {data.balanceImg && <img src={data.balanceImg} alt={data.balanceImg} />}
                </Typography>
              </Typography>
              <Typography color="gray-300" variant="body2" className={styles.block}>
                <Typography component="span">{data.logo && <img src={data.logo} alt={data.logo} />}</Typography>
                <Typography component="span" className={styles.number}>
                  {data.number}
                </Typography>
              </Typography>
              <Typography color="gray-300" variant="body2" className={styles.block}>
                <Typography component="span">{data.cryptoName}</Typography>
                <Typography component="span">{data.cost}</Typography>
              </Typography>
            </div>
          </div>
          <div className={styles.arrow}>
            {i !== fakeData.length - 1 && <img src={'/images/icon/arrow_down.png'} alt={'ddd'} />}
          </div>
        </>
      ))}
    </div>
  );
};

export default DepositCardInfo;
