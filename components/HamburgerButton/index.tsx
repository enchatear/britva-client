'use client';

import React, { useCallback } from 'react';
import Button from '@/components/Button';
import styles from './_styles.module.scss';
import clsx from 'clsx';
import { MenuButtonContent } from '@/types/strapi';
import Icon from '@/components/Icon';
import LanguageToggle from '@/components/LanguageToggle';

const HamburgerButton: React.FC<{ navLinks: MenuButtonContent[] }> = ({
  navLinks,
}) => {
  const [menuWindowState, setMenuWindowState] = React.useState<{
    isOpen: boolean;
    isDismissed: boolean;
  }>({
    isOpen: false,
    isDismissed: false,
  });

  const openWindow = useCallback(() => {
    setMenuWindowState({
      isOpen: true,
      isDismissed: false,
    });
  }, []);
  const dismissWindow = useCallback(() => {
    setMenuWindowState({
      isOpen: true,
      isDismissed: true,
    });
  }, []);
  const closeWindow = useCallback(() => {
    setMenuWindowState({ isOpen: false, isDismissed: false });
  }, []);

  const handleAnimationEnd: React.AnimationEventHandler<
    HTMLDivElement
  > = event => {
    if (event.animationName.includes('closeMenu')) {
      closeWindow();
    }
  };

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
        <span>MENU</span>
      </Button>
      {menuWindowState.isOpen && navLinks ? (
        <div
          className={clsx(styles.menu, {
            [styles.dismissed]: menuWindowState.isDismissed,
          })}
          onAnimationEnd={handleAnimationEnd}
        >
          <Button
            onClick={dismissWindow}
            secondary
            icon="close"
            iconPosition="right"
            className={styles.close_btn}
          >
            CLOSE
          </Button>
          <nav className={styles.navigation}>
            <ul>
              {navLinks.map(link => (
                <li key={link.id} className={styles.link_item}>
                  <Button secondary icon="arrow" iconPosition="right">
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle />
          <Button className={styles.book_btn}>BOOK NOW</Button>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerButton;
