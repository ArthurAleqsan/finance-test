import cn from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components/common/Button';
import { DropdownMenu } from 'src/components/common/DropdownMenu';
import { Typography } from '../../common/Typography';
import DepositCardInfo from './DepositCardInfo';
import styles from './styles.module.scss';

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const DepositBar: FC = () => {
  const { t }: any = useTranslation();
  return (
    <div className={styles.depositBar}>
      <Typography color="gray-300" variant="body2" className={styles.title}>
        <Typography component="span" className={cn(styles.divider, styles.first)}>
          Deposit
        </Typography>
        <Typography component="span" className={cn(styles.divider, styles.second)}>
          Withdraw
        </Typography>
      </Typography>
      <DepositCardInfo />
      <DropdownMenu items={items} name={'Route'} styleName={styles.dropdownName} styleIcon={styles.dropdownIcon} />
      <Button size="lg" className={styles.btn}>
        {t('Activate approve and deposit')}
      </Button>
    </div>
  );
};

export default DepositBar;
