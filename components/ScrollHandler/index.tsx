'use client';
import { useEffect, useState } from 'react';

const ScrollHandler = () => {
  // useEffect(() => {
  //   const mainElement = document.querySelector('.main') as HTMLElement;
  //
  //   if (!mainElement) {
  //     return;
  //   }
  //
  //   const handleWheel = (event: WheelEvent) => {
  //     event.preventDefault();
  //     const delta = Math.sign(event.deltaY);
  //     const scrollAmount = 100; // Adjust this value to control the scroll amount
  //     mainElement.scrollBy({
  //       top: delta * scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   };
  //
  //   mainElement.addEventListener('wheel', handleWheel);
  //   return () => {
  //     mainElement.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);

  return null;
};

export default ScrollHandler;
