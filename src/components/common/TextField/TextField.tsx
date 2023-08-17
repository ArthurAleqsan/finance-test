import cn from 'classnames';
import React, { FC, useMemo } from 'react';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

type Props = {
  firstText: string;
  secondText: string;
  variant?: 'primary' | 'default';
  className?: string;
  size?: 'sm' | 'normal';
};

const TextField: FC<Props> = ({ firstText, secondText, variant = 'default', className = '', size = 'normal' }) => {
  const secondTypographyColor: 'textPrimary' | 'primary' = useMemo(() => {
    if (variant === 'primary') {
      return 'primary';
    }
    return 'textPrimary';
  }, [variant]);
  const secondTypographyVariant: 'body2' | 'subtitle3' = useMemo(() => {
    if (size === 'sm') {
      return 'body2';
    }
    return 'subtitle3';
  }, [size]);
  return (
    <div className={cn(styles.container, className)}>
      <Typography
        color="gray-300"
        variant="body2"
        component="span"
        fontWeight="300"
        className={styles.container__firstText}
      >
        {firstText}
      </Typography>
      <Typography
        variant={secondTypographyVariant}
        color={secondTypographyColor}
        className={styles.container__secondText}
      >
        {secondText}
      </Typography>
    </div>
  );
};

export default TextField;
