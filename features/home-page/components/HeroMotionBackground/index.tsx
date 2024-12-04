'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './_styles.module.scss';

const HeroMotionBackground: React.FC<{ url: string }> = ({ url }) => {
  return (
    <motion.img
      src={url}
      className={styles.hero_background}
      alt="background"
      initial={{ height: '85%', opacity: 0 }}
      animate={{ height: '95%', opacity: 1 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
    ></motion.img>
  );
};

export default HeroMotionBackground;
