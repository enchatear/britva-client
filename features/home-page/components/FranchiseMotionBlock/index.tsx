'use client';

import React from 'react';
import Button from '@/components/Button';
import styles from './_styles.module.scss';
import { motion } from 'framer-motion';
import { ButtonContent } from '@/types/strapi';

const MotionButton = motion.create(Button, { forwardMotionProps: true });

const FranchiseMotionBlock: React.FC<{
  content: {
    subtitle: string;
    title: string;
    button: ButtonContent;
  };
}> = ({ content }) => {
  return (
    <motion.div className={styles.franchise_block}>
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
            delay: 0.3,
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
            delay: 0.6,
          },
        }}
      >
        {content.title}
      </motion.h2>
      <MotionButton
        to={content.button.url}
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
            delay: 0.9,
          },
        }}
      >
        {content.button.title}
      </MotionButton>
    </motion.div>
  );
};

export default FranchiseMotionBlock;
