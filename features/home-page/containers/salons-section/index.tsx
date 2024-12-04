import React from 'react';
import { SalonsBlock } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import SalonsText from '../../components/SalonsMotionText';

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
        <SalonsText
          content={{ subtitle: content.subtitle, title: content.title }}
        />
      </div>
    </section>
  );
};

export default SalonsSection;
