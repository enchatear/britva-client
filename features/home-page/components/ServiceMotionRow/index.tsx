'use client';
import React from 'react';
import type { ServiceContent } from '@/types/strapi';
import styles from './_styles.module.scss';
import { getImageUrl } from '@/lib/strapi';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const ServiceMotionRow: React.FC<{ service: ServiceContent }> = ({
  service,
}) => {
  const t = useTranslations();

  console.log('service:', service);

  return (
    <motion.div
      className={styles.service_row}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: 'circOut',
          y: { stiffness: 1000, velocity: -100 },
        },
      }}
      initial={{
        y: 50,
        opacity: 0,
      }}
      viewport={{ once: true }}
    >
      <div className={styles.service_info}>
        <img src={getImageUrl(service.icon)} alt="service icon" />
        <h4>{service.name}</h4>
        <p>{service.description}</p>
      </div>
      {/*<div className={styles.service_price_block}>*/}
      {/*  <h6>{t('junior')}</h6>*/}
      {/*  <span>*/}
      {/*    {service.juniorPrice}*/}
      {/*    {Number.isSafeInteger(+service.juniorPrice) ? (*/}
      {/*      <span className={styles.currency}>₴</span>*/}
      {/*    ) : null}*/}
      {/*  </span>*/}
      {/*</div>*/}
      <div className={styles.service_price_block}>
        <h6>{t('middle')}</h6>
        <span>
          {service.middlePrice}
          {Number.isSafeInteger(+service.middlePrice) ? (
            <span className={styles.currency}>₴</span>
          ) : null}
        </span>
      </div>
      <div className={styles.service_price_block}>
        <h6>{t('senior')}</h6>
        <span>
          {service.seniorPrice}
          {Number.isSafeInteger(+service.seniorPrice) ? (
            <span className={styles.currency}>₴</span>
          ) : null}
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceMotionRow;
