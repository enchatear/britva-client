'use client';
import React from 'react';
import styles from './_styles.module.scss';
import { Snowfall } from 'react-snowfall';

const SnowAnimation = () => {
  return (
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 100,
      }}
    />
  );
};

export default SnowAnimation;
