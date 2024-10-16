'use client';
import React from 'react';
import { HeaderBlock } from '@/types/strapi';
import styles from './_styles.module.scss';

const HeroContacts: React.FC<{ header_contacts: HeaderBlock }> = ({
  header_contacts,
}) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && window.innerWidth <= 886 ? (
    <div className={styles.hero_contacts}>
      <a
        href={`tel:${header_contacts.phone}`}
        target="_blank"
        className={styles.phone}
        rel="noreferrer"
      >
        {header_contacts.phone}
      </a>
      <span className={styles.schedule}>{header_contacts.schedule}</span>
    </div>
  ) : null;
};

export default HeroContacts;
