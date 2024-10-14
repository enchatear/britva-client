import React from 'react';
import { BarberContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import clsx from 'clsx';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

const BarberCard: React.FC<{
  barberInfo: BarberContent;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  isMouseOver: boolean;
  style?: React.CSSProperties;
}> = ({ barberInfo, onMouseOver, onMouseLeave, isMouseOver, style }) => {
  return (
    <div
      className={clsx(styles.barber_card, {
        [styles.barber_card_over]: isMouseOver,
      })}
      style={{
        ...style,
        backgroundImage: `url(${getImageUrl(barberInfo.image)})`,
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isMouseOver ? (
        // <div className={styles.barber_content}>
        <>
          <div className={styles.barber_info}>
            <span className={styles.position}>
              {barberInfo.position}
              {/*<Icon name="" />*/}
            </span>
            <span className={styles.name}>{barberInfo.name}</span>
          </div>
          <Button className={styles.book_btn}>BOOK NOW</Button>
        </>
      ) : // </div>
      null}
      {/*<img className={styles.barber_img} src={getImageUrl(barberInfo.image)} />*/}
      <div className={styles.shadow_down} />
    </div>
  );
};

export default BarberCard;
