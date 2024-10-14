import React from 'react';
import styles from './_styles.module.scss';
import { HeaderBlock } from '@/types/strapi';
import HamburgerButton from '@/components/HamburgerButton';
import { getImageUrl } from '@/lib/strapi';
import Icon from '@/components/Icon';
import Link from 'next/link';
import LogoBox from '@/components/LogoBox';

const Header: React.FC<{ content: HeaderBlock }> = ({ content }) => {
  return (
    <header className={styles.header}>
      <HamburgerButton navLinks={content.navLink} />
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
  );
};

export default Header;
