import React from 'react';
import { SalonsBlock } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';

const SalonsSection: React.FC<{ content: SalonsBlock }> = ({ content }) => {
  return (
    <section
      className={styles.salons_section}
      id="salons"
      style={
        content.backgroundImg
          ? {
              backgroundImage: `url(${getImageUrl(content.backgroundImg)})`,
            }
          : undefined
      }
    >
      {/*<div className={styles.backdrop} />*/}
      <div className="container">
        <div className={styles.salons_content}>
          <h3>{content.subtitle}</h3>
          <h2>{content.title}</h2>
        </div>
      </div>
    </section>
  );
};

export default SalonsSection;
