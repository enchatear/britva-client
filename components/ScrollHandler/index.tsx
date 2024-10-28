'use client';
import { useEffect } from 'react';

const ScrollHandler = () => {
  useEffect(() => {
    const mainElement = document.querySelector('.main') as HTMLElement;

    if (!mainElement) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      let target = event.target as HTMLElement;
      let isInnerScroll = false;

      // Traverse up the DOM tree to find the closest scrollable container
      while (target && target !== mainElement) {
        const isScrollable = target.scrollHeight > target.clientHeight;
        const canScrollUp = target.scrollTop > 0;
        const canScrollDown =
          target.scrollTop + target.clientHeight < target.scrollHeight;

        if (
          isScrollable &&
          ((event.deltaY < 0 && canScrollUp) ||
            (event.deltaY > 0 && canScrollDown))
        ) {
          // Check if the scrollable section is in the viewport
          const rect = target.getBoundingClientRect();
          const isInViewport =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth);

          if (isInViewport) {
            isInnerScroll = true;
            break; // Exit the loop if we are in a scrollable section in the viewport
          }
        }

        target = target.parentElement as HTMLElement;
      }

      if (isInnerScroll) {
        return; // Allow default scroll behavior for inner scrollable elements
      }

      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      const scrollAmount = 100; // Adjust this value to control the scroll amount
      mainElement.scrollBy({
        top: delta * scrollAmount,
        behavior: 'smooth',
      });
    };

    mainElement.addEventListener('wheel', handleWheel);
    return () => {
      mainElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
};

export default ScrollHandler;
