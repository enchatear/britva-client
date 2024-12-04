import React from 'react';
import styles from './_styles.module.scss';
import { FranchiseBlock } from '@/types/strapi';
import { getImageUrl } from '@/lib/strapi';
import FranchiseMotionBlock from '@/features/home-page/components/FranchiseMotionBlock';

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
      <div className="container">
        <div className={styles.franchise_content}>
          <FranchiseMotionBlock
            content={{
              title: content.title,
              subtitle: content.subtitle,
              button: content.button,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
