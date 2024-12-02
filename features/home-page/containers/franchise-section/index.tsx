import React from 'react';
import styles from './_styles.module.scss';
import { FranchiseBlock } from '@/types/strapi';
import { getImageUrl } from '@/lib/strapi';
import Button from '@/components/Button';

const FranchiseSection: React.FC<{ content: FranchiseBlock }> = ({
  content,
}) => {
  return (
    <section
      className={styles.franchise_section}
      id="franchise"
      style={
        content.backgroundImg
          ? { backgroundImage: `url(${getImageUrl(content.backgroundImg)})` }
          : undefined
      }
    >
      {/*<div className={styles.backdrop} />*/}
      <div className="container">
        <div className={styles.franchise_content}>
          <div className={styles.franchise_block}>
            <h3>{content.subtitle}</h3>
            <h2>{content.title}</h2>
            <Button to={content.button.url}>{content.button.title}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
