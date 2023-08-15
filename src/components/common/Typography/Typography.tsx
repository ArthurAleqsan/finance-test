import cn from 'classnames';
import capitalize from 'lodash/capitalize';
import { FC, ReactNode } from 'react';
import { TYPOGRAPHY_VARIATIONS } from 'src/utils/constants';
import styles from './styles.module.scss';

type Props = {
  isCapitalize?: boolean;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  paragraph?: boolean;
  uppercase?: boolean;
  className?: string;
  children: ReactNode | string | number;
  variant?:
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'subtitle4'
    | 'inherit'
    | 'caption'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  display?: 'initial' | 'block' | 'inline' | 'flex';
  noWrap?: boolean;
  color?:
    | 'textSecondary'
    | 'textPrimary'
    | 'white'
    | 'textThird'
    | 'textLight'
    | 'secondary'
    | 'textDark'
    | 'primary'
    | 'initial'
    | 'inherit'
    | 'third'
    | 'error'
    | 'valid'
    | 'gray-300'
    | 'primary';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  font?: 'roboto';
  fontWeight?: 'bold' | 'normal' | '200' | '300' | '400' | '600' | '700' | 'default';
};
export const Typography: FC<Props> = ({
  isCapitalize,
  component,
  paragraph,
  uppercase,
  className,
  children,
  variant,
  display = 'initial',
  noWrap,
  color = 'inherit',
  align = 'left',
  font = 'roboto',
  fontWeight = 'normal',
}) => {
  const CustomTypography = component || (paragraph ? 'p' : variant && TYPOGRAPHY_VARIATIONS[variant]) || 'span';

  let modifiedChildren: ReactNode | string | number;

  if (isCapitalize && typeof children === 'string') modifiedChildren = capitalize(children);

  return (
    <CustomTypography
      className={cn(
        styles.typography,
        {
          [styles[`typography_display_${display}`]]: display,
          [styles[`typography_variant_${variant}`]]: variant,
          [styles[`typography_color_${color}`]]: color,
          [styles[`typography_align_${align}`]]: align,
          [styles[`typography_font_${font}`]]: font,
          [styles[`typography_fontWeight_${fontWeight}`]]: fontWeight,
          [styles.typography_uppercase]: uppercase,
          [styles.typography_nowrap]: noWrap,
        },
        className
      )}
    >
      {modifiedChildren || children}
    </CustomTypography>
  );
};
