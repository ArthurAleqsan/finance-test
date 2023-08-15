import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export type Props = {
  className?: string;
  color?: 'primary' | 'secondary' | 'onSecondary';
  size?: 'sm' | 'md' | 'lg';
  loadingText?: string;
};

export const Loader: FC<Props> = ({ size = 'sm' }) => {
  return (
    <div className={cn(styles.loader, styles[size])}>
      <img src="/images/loading.png" alt="Spinner" className={styles.loader_inner} />
    </div>
  );
};
