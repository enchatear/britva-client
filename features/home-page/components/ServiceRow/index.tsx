import React from 'react';
import type { ServiceContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import { getTranslations } from 'next-intl/server';

const ServiceRow: React.FC<{ service: ServiceContent }> = async ({
  service,
}) => {
  const t = await getTranslations();

  return (
    <div className={styles.service_row}>
      <div className={styles.service_info}>
        <img src={getImageUrl(service.icon)} alt="service icon" />
        <h4>{service.name}</h4>
        <p>{service.description}</p>
      </div>
      <div className={styles.service_price_block}>
        <h6>{t('junior')}</h6>
        <span>
          {service.juniorPrice}
          {Number.isSafeInteger(service.juniorPrice) ? (
            <span className={styles.currency}>₴</span>
          ) : null}
        </span>
      </div>
      <div className={styles.service_price_block}>
        <h6>{t('middle')}</h6>
        <span>
          {service.middlePrice}
          {Number.isSafeInteger(service.juniorPrice) ? (
            <span className={styles.currency}>₴</span>
          ) : null}
        </span>
      </div>
      <div className={styles.service_price_block}>
        <h6>{t('senior')}</h6>
        <span>
          {service.seniorPrice}
          {Number.isSafeInteger(service.juniorPrice) ? (
            <span className={styles.currency}>₴</span>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default ServiceRow;
