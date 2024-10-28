import React from 'react';
import styles from './_styles.module.scss';
import type { ServicesBlock } from '@/types/strapi';
import { getImageUrl } from '@/lib/strapi';
import ServiceRow from '@/features/home-page/components/ServiceRow';

const ServicesSection: React.FC<{ content: ServicesBlock }> = ({ content }) => {
  return (
    <section
      id="services"
      className={styles.servicesSection}
      style={
        content.backgroundImg
          ? { backgroundImage: `url(${getImageUrl(content.backgroundImg)})` }
          : undefined
      }
    >
      <div className="container">
        <div className={styles.services_list}>
          <div className={styles.backdrop} />
          {content.service.map(service => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
