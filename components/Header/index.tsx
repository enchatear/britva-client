'use client';
import React, { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import styles from './_styles.module.scss';
import type { HeaderBlock } from '@/types/strapi';
import HamburgerButton from '@/components/HamburgerButton';
import { getImageUrl } from '@/lib/strapi';
import Icon from '@/components/Icon';
import Link from 'next/link';
import LogoBox from '@/components/LogoBox';
import clsx from 'clsx';
import Button from '@/components/Button';
import LanguageToggle from '@/components/LanguageToggle';

const Header: React.FC<{ content: HeaderBlock }> = ({ content }) => {
  const t = useTranslations();

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
    <>
      <header className={styles.header}>
        <HamburgerButton
          menuWindowState={menuWindowState}
          openWindow={openWindow}
        />
        <LogoBox className={styles.logo} imgSrc={getImageUrl(content.logo)} />
        <div className={styles.header_right_block}>
          <div className={styles.header_contacts}>
            <span className={styles.schedule}>{content.schedule}</span>
            <a
              href={`tel:${content.phone}`}
              target="_blank"
              className={styles.phone}
              rel="noreferrer"
            >
              {content.phone}
            </a>
          </div>
          <Link href={content.instagramLink} className={styles.social_link}>
            <Icon name="insta" />
          </Link>
        </div>
      </header>
      {menuWindowState.isOpen && content.navLink ? (
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
            {t('close')}
          </Button>
          <nav className={styles.navigation}>
            <ul>
              {content.navLink.map(link => (
                <li key={link.id} className={styles.link_item}>
                  <Button
                    secondary
                    icon="arrow"
                    iconPosition="right"
                    to={`#${link.section}`}
                  >
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle />
          <Button to="#" className={clsx(styles.book_btn, 'ms_booking')}>
            {t('bookNow')}
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Header;
