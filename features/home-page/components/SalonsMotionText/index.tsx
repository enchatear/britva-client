'use client';

import React from 'react';
import styles from './_styles.module.scss';
import { motion } from 'framer-motion';

const SalonsText: React.FC<{
  content: { subtitle: string; title: string };
}> = ({ content }) => {
  return (
    <motion.div className={styles.salons_content}>
      <motion.h3
        initial={{
          y: 125,
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'circOut',
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
      >
        {content.subtitle}
      </motion.h3>
      <motion.h2
        initial={{
          y: 125,
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'circOut',
            duration: 0.6,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        {content.title}
      </motion.h2>
    </motion.div>
  );
};

export default SalonsText;
