import React from 'react';
import arrow from '@/assets/icons/arrow.svg';
import arrowUp from '@/assets/icons/arrowUp.svg';
import bullet from '@/assets/icons/bullet.svg';
import chevronDown from '@/assets/icons/chevronDown.svg';
import chevronUp from '@/assets/icons/chevronUp.svg';
import close from '@/assets/icons/close.svg';
import insta from '@/assets/icons/insta.svg';
import location from '@/assets/icons/location.svg';
import menu from '@/assets/icons/menu.svg';
import clsx from 'clsx';
import styles from './_styles.module.scss';

export type IconName =
  | 'arrow'
  | 'arrowUp'
  | 'bullet'
  | 'chevronDown'
  | 'chevronUp'
  | 'close'
  | 'insta'
  | 'location'
  | 'menu';

const icons: { [Key in IconName]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  arrow,
  arrowUp,
  bullet,
  chevronDown,
  chevronUp,
  close,
  insta,
  location,
  menu,
};

type IconProps = React.SVGProps<SVGSVGElement> & { name: IconName };

const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = icons[name];

  return IconComponent ? (
    <IconComponent
      className={clsx(styles.icon, styles[name], className)}
      {...rest}
    />
  ) : null;
};

export default Icon;
