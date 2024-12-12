'use client';
import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { BarberContent } from '@/types/strapi';
import { getImageUrl } from '@/lib/strapi';
import Button from '@/components/Button';
import styles from './_styles.module.scss';
import Icon from '@/components/Icon';

const BarberCard: React.FC<{
  barberInfo: BarberContent;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  isMouseOver: boolean;
  style?: React.CSSProperties;
}> = ({ barberInfo, onMouseOver, onMouseLeave, isMouseOver, style }) => {
  const t = useTranslations();

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
        <>
          <div className={styles.barber_info}>
            <span className={styles.position}>
              {t(barberInfo.position)}
              {barberInfo.position === 'senior' ? <Icon name="crown" /> : null}
            </span>
            <span className={styles.name}>{barberInfo.name}</span>
          </div>
          <Button
            to="https://w666725.alteg.io/"
            target="_blank"
            className={styles.book_btn}
          >
            {t('bookNow')}
          </Button>
        </>
      ) : null}
      <div className={styles.shadow_down} />
    </div>
  );
};

export default BarberCard;
