'use client';

import React from 'react';
import styles from './_styles.module.scss';
import { motion } from 'framer-motion';

const HeroTitle: React.FC<{ content: { subtitle: string; title: string } }> = ({
  content,
}) => {
  return (
    <motion.div className={styles.hero_title}>
      <motion.h2
        initial={{
          y: 75,
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
        {content.subtitle}
      </motion.h2>
      <motion.h1
        initial={{
          y: 75,
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
            delay: 0.6,
          },
        }}
        viewport={{ once: true }}
      >
        {content.title}
      </motion.h1>
    </motion.div>
  );
};

export default HeroTitle;
