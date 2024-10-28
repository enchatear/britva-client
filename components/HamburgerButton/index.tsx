'use client';
import React from 'react';
import clsx from 'clsx';
import Button from '@/components/Button';
import styles from './_styles.module.scss';
import { useTranslations } from 'next-intl';

const HamburgerButton: React.FC<{
  menuWindowState: { isOpen: boolean; isDismissed: boolean };
  openWindow: () => void;
}> = ({ menuWindowState, openWindow }) => {
  const t = useTranslations();
  return (
    <div className={styles.menu_container}>
      <Button
        icon="menu"
        empty
        className={clsx(styles.hamburger, {
          [styles.hamburger_open]: menuWindowState.isOpen,
        })}
        onClick={openWindow}
      >
        <span>{t('menu')}</span>
      </Button>
    </div>
  );
};

export default HamburgerButton;
