import React from 'react';
import { HeaderBlock, HeroContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import Icon from '@/components/Icon';
import HeroContacts from '@/features/home-page/components/HeroContacts';

const HeroSection: React.FC<{
  content: HeroContent;
  header_contacts: HeaderBlock;
}> = ({ content, header_contacts }) => {
  return (
    <section
      className={styles.heroSection}
      id="home"
      style={
        content.backgroundImg
          ? {
              backgroundImage: `url(${getImageUrl(content.backgroundImg)})`,
            }
          : undefined
      }
    >
      <div className="container">
        <div className={styles.heroSection_content}>
          <HeroContacts header_contacts={header_contacts} />
          <h2>{content.subtitle}</h2>
          <h1>{content.title}</h1>
          <div className={styles.location_wrapper}>
            <Icon name="location" className={styles.location_icon} />
            <span>{content.location}</span>
          </div>
        </div>
      </div>
      <div className={styles.shadow_down} />
    </section>
  );
};

export default HeroSection;
