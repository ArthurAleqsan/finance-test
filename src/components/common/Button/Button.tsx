import cn from 'classnames';
import noop from 'lodash/noop';
import { CSSProperties, FC, ReactNode } from 'react';
import { Loader } from '../Loader';
import { SvgIcon } from '../SvgIcon';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

type Props = {
  fontWeight?: 'default' | 'bold' | '600';
  uppercase?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | undefined | string;
  children?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  height?: any;
  width?: any;
  color?: 'primary' | 'secondary' | 'alert' | 'none' | 'transparent';
  style?: CSSProperties;
  type?: 'button' | 'submit';
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'contained';
  id?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconOrientation?: 'left' | 'right';
  minWidth?: boolean;
};

const iconColors = {
  primary: 'white',
  secondary: 'main',
  none: 'main',
};

export const Button: FC<Props> = ({
  fontWeight = 'default',
  uppercase,
  className,
  disabled,
  children,
  onClick,
  variant = 'contained',
  loading,
  height,
  width,
  style,
  color = 'primary',
  type = 'button',
  size = 'md',
  id = '',
  icon,
  iconPosition = 'left',
  iconOrientation,
  minWidth = true,
}) => {
  const iconColor: string = iconColors[color];

  return (
    <button
      id={id}
      className={cn(
        styles.button,
        {
          [styles[`button_fontWeight_${fontWeight}`]]: fontWeight,
          [styles[`button_variant_${variant}`]]: variant,
          [styles[`button_padding_${height}`]]: height && width === 'content',
          [styles[`button_size_${size}`]]: size,
          [styles.button_disabled]: disabled,
          [styles.button_loading]: loading,
          [styles.button_minWidth]: !minWidth,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={loading || disabled ? noop : onClick}
      style={style}
      type={type}
    >
      <div className={styles.button__content}>
        {icon && iconPosition === 'left' && (
          <div className={cn('flexible vertical-reverse', styles.button__icon)}>
            <SvgIcon pointer src={icon} color={iconColor} />
          </div>
        )}
        <Typography
          uppercase={uppercase}
          component="div"
          variant="inherit"
          color="inherit"
          display="flex"
          fontWeight={fontWeight}
          className={cn(styles.button__content__typography, {
            [styles[`button__content__typography__orientation_${iconOrientation}`]]:
              !!iconOrientation && iconOrientation,
          })}
        >
          {loading && (
            <div className="flexible vertical">
              <Loader color="primary" size="sm" />
            </div>
          )}
          {children}
        </Typography>
        {icon && iconPosition === 'right' && (
          <div className="flexible vertical right" style={{ right: '0.55rem' }}>
            <SvgIcon pointer src={icon} color={iconColor} />
          </div>
        )}
      </div>
    </button>
  );
};
