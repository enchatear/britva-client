import React from 'react';
import { HeroContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import Icon from '@/components/Icon';

const HeroSection: React.FC<{ content: HeroContent }> = ({ content }) => {
  return (
    <section
      className={styles.heroSection}
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
          <h2>{content.subtitle}</h2>
          <h1>{content.title}</h1>
          <div className={styles.location_wrapper}>
            <Icon name="location" className={styles.location_icon} />
            <span>{content.location}</span>
          </div>
          <div className={styles.shadow_down} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
