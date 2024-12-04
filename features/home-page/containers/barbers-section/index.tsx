'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { BarbersBlock } from '@/types/strapi';
import BarberCard from '@/features/home-page/components/BarberCard';
import clsx from 'clsx';
import Button from '@/components/Button';
import styles from './_styles.module.scss';
import { motion } from 'framer-motion';

const BarbersSection: React.FC<{ content: BarbersBlock }> = ({ content }) => {
  const t = useTranslations();
  const [isClient, setIsClient] = useState(false);

  const [countOfBarbersOnViewport, setCountOfBarbersOnViewport] = useState(7);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setCountOfBarbersOnViewport(4);
    }
  }, []);

  const [mouseOverIndex, setMouseOverIndex] = React.useState<number | null>(
    null
  );

  const [startCarouselIndex, setStartCarouselIndex] = useState(0);
  const [scrollEffect, setScrollEffect] = useState<'left' | 'right' | null>(
    null
  );

  const handleMouseOver = (index: number) => {
    setMouseOverIndex(index);
  };

  const handleMouseLeave = () => {
    setMouseOverIndex(null);
  };

  const handleScrollLeft = () => {
    setScrollEffect('left');
  };

  const handleScrollRight = () => {
    setScrollEffect('right');
  };

  const viewportBarbers = useMemo(
    () =>
      content.barbers.slice(
        startCarouselIndex,
        startCarouselIndex + countOfBarbersOnViewport > content.barbers.length
          ? undefined
          : startCarouselIndex + countOfBarbersOnViewport
      ),
    [startCarouselIndex, countOfBarbersOnViewport, content.barbers]
  );

  const nextViewportBarbers = useMemo(
    () =>
      startCarouselIndex + countOfBarbersOnViewport >= content.barbers.length
        ? undefined
        : content.barbers.slice(
            startCarouselIndex + countOfBarbersOnViewport,
            startCarouselIndex + countOfBarbersOnViewport * 2 >
              content.barbers.length
              ? undefined
              : startCarouselIndex + countOfBarbersOnViewport * 2
          ),
    [startCarouselIndex, countOfBarbersOnViewport, content.barbers]
  );

  const prevViewportBarbers = useMemo(
    () =>
      startCarouselIndex === 0
        ? undefined
        : content.barbers.slice(
            startCarouselIndex - countOfBarbersOnViewport,
            startCarouselIndex < countOfBarbersOnViewport
              ? undefined
              : startCarouselIndex
          ),
    [startCarouselIndex, countOfBarbersOnViewport, content.barbers]
  );

  const handleAnimationEnd = () => {
    if (scrollEffect === 'left') {
      setScrollEffect(null);
      setStartCarouselIndex(prevIndex =>
        Math.max(prevIndex - countOfBarbersOnViewport, 0)
      );
    } else if (scrollEffect === 'right') {
      setScrollEffect(null);
      setStartCarouselIndex(prevIndex =>
        Math.min(prevIndex + countOfBarbersOnViewport, content.barbers.length)
      );
    }
  };

  const defaultGridTemplateColumns = Array.from(
    { length: countOfBarbersOnViewport },
    () => '2fr'
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <section className={styles.barbers} id="barbers">
      {/*<div className="container">*/}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: 'circOut',
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
      >
        {t('ourTeam')}
      </motion.h2>
      <motion.div
        className={styles.barbers_content}
        initial={{ opacity: 0, y: 300 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: 'circOut',
            duration: 0.6,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        {content.barbers.length > countOfBarbersOnViewport &&
          window.innerWidth > 992 && (
            <>
              <Button
                icon="arrow"
                secondary
                className={styles.left_arrow}
                onClick={handleScrollLeft}
                disabled={startCarouselIndex <= 0}
              />
              <Button
                icon="arrow"
                secondary
                className={styles.right_arrow}
                onClick={handleScrollRight}
                disabled={
                  startCarouselIndex + countOfBarbersOnViewport >=
                  content.barbers.length
                }
              />
            </>
          )}
        <div className={styles.barbers_list}>
          {window.innerWidth > 992 ? (
            <>
              {prevViewportBarbers && (
                <div
                  className={clsx(
                    styles.fake_grid_track,
                    styles.fake_grid_track_prev,
                    {
                      [styles.fake_grid_track_prev_scroll]:
                        scrollEffect === 'left',
                    }
                  )}
                  style={{
                    gridTemplateColumns: defaultGridTemplateColumns.join(' '),
                  }}
                >
                  {prevViewportBarbers.map((barber, index) => (
                    <BarberCard
                      key={barber.id}
                      barberInfo={barber}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseLeave={handleMouseLeave}
                      isMouseOver={index === mouseOverIndex}
                    />
                  ))}
                </div>
              )}
              <div
                className={clsx(styles.barbers_grid_track, {
                  [styles.scroll_left]: scrollEffect === 'left',
                  [styles.scroll_right]: scrollEffect === 'right',
                })}
                onAnimationEnd={handleAnimationEnd}
                style={{
                  gridTemplateColumns:
                    typeof mouseOverIndex === 'number'
                      ? defaultGridTemplateColumns
                          .map((col, idx) =>
                            idx === mouseOverIndex ? '5fr' : col
                          )
                          .join(' ')
                      : defaultGridTemplateColumns.join(' '),
                }}
              >
                {viewportBarbers.map((barber, index) => (
                  <BarberCard
                    key={barber.id}
                    barberInfo={barber}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave}
                    isMouseOver={index === mouseOverIndex}
                  />
                ))}
              </div>
              {nextViewportBarbers && (
                <div
                  className={clsx(
                    styles.fake_grid_track,
                    styles.fake_grid_track_next,
                    {
                      [styles.fake_grid_track_next_scroll]:
                        scrollEffect === 'right',
                    }
                  )}
                  style={{
                    gridTemplateColumns: defaultGridTemplateColumns.join(' '),
                  }}
                >
                  {nextViewportBarbers.map((barber, index) => (
                    <BarberCard
                      key={barber.id}
                      barberInfo={barber}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseLeave={handleMouseLeave}
                      isMouseOver={index === mouseOverIndex}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {content.barbers.map(barber => (
                <BarberCard
                  key={barber.id}
                  barberInfo={barber}
                  isMouseOver={true}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
      {/*</div>*/}
    </section>
  ) : null;
};

export default BarbersSection;
