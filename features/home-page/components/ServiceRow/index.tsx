import React from 'react';
import type { ServiceContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';

const ServiceRow: React.FC<{ service: ServiceContent }> = ({ service }) => {
  return (
    <div className={styles.service_row}>
      <div className={styles.service_info}>
        <img src={getImageUrl(service.icon)} alt="service icon" />
        <div className={styles.service_info_text}>
          <h4>{service.name}</h4>
          <p>{service.description}</p>
        </div>
      </div>
      <div className={styles.service_price_block}>
        <h6>junior</h6>
        <span>
          {service.juniorPrice} <span className={styles.currency}>₴</span>
        </span>
      </div>
      <div className={styles.service_price_block}>
        <h6>middle</h6>
        <span>
          {service.middlePrice} <span className={styles.currency}>₴</span>
        </span>
      </div>
      <div className={styles.service_price_block}>
        <h6>senior</h6>
        <span>
          {service.seniorPrice} <span className={styles.currency}>₴</span>
        </span>
      </div>
    </div>
  );
};

export default ServiceRow;
