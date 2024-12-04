import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import clsx from 'clsx';
import styles from './_styles.module.scss';
import Link from 'next/link';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  secondary?: boolean;
  empty?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  tooltip?: string;
  to?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      secondary = false,
      empty = false,
      icon = null,
      iconPosition = 'left',
      iconClassName,
      type,
      children = null,
      to,
      ...rest
    },
    ref
  ) => {
    return to ? (
      <Link href={to}>
        <button
          {...rest}
          ref={ref}
          className={clsx(styles.button, className, {
            [styles.secondary]: secondary,
            [styles.empty]: empty,
          })}
        >
          {' '}
          {icon && iconPosition === 'left' ? (
            <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
          ) : null}
          {children}
          {icon && iconPosition === 'right' ? (
            <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
          ) : null}
        </button>
      </Link>
    ) : (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={clsx(styles.button, className, {
          [styles.secondary]: secondary,
          [styles.empty]: empty,
        })}
      >
        {' '}
        {icon && iconPosition === 'left' ? (
          <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
        ) : null}
        {children}
        {icon && iconPosition === 'right' ? (
          <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
        ) : null}
      </button>
    );
  }
);

export default Button;
