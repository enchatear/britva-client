'use client';
import React, { useMemo, useState } from 'react';
import { BarbersBlock } from '@/types/strapi';
import styles from './_styles.module.scss';
import BarberCard from '@/features/home-page/components/BarberCard';
import clsx from 'clsx';
import Button from '@/components/Button';

const COUNT_OF_BARBERS_ON_VIEWPORT = 6;

const BarbersSection: React.FC<{ content: BarbersBlock }> = ({ content }) => {
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
        startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT >
          content.barbers.length
          ? undefined
          : startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT
      ),
    [startCarouselIndex, content.barbers]
  );

  const nextViewportBarbers = useMemo(
    () =>
      startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT >=
      content.barbers.length
        ? undefined
        : content.barbers.slice(
            startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT,
            startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT * 2 >
              content.barbers.length
              ? undefined
              : startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT * 2
          ),
    [startCarouselIndex, content.barbers]
  );

  const prevViewportBarbers = useMemo(
    () =>
      startCarouselIndex === 0
        ? undefined
        : content.barbers.slice(
            startCarouselIndex - COUNT_OF_BARBERS_ON_VIEWPORT,
            startCarouselIndex < COUNT_OF_BARBERS_ON_VIEWPORT
              ? undefined
              : startCarouselIndex
          ),
    [startCarouselIndex, content.barbers]
  );

  const handleAnimationEnd = () => {
    if (scrollEffect === 'left') {
      setScrollEffect(null);
      setStartCarouselIndex(prevIndex =>
        Math.max(prevIndex - COUNT_OF_BARBERS_ON_VIEWPORT, 0)
      );
    } else if (scrollEffect === 'right') {
      setScrollEffect(null);
      setStartCarouselIndex(prevIndex =>
        Math.min(
          prevIndex + COUNT_OF_BARBERS_ON_VIEWPORT,
          content.barbers.length
        )
      );
    }
  };

  const defaultGridTemplateColumns = Array.from(
    { length: COUNT_OF_BARBERS_ON_VIEWPORT },
    () => '2fr'
  );

  return (
    <section className={styles.barbers}>
      <div className="container">
        <h2>OUR TEAM</h2>
        <div className={styles.barbers_content}>
          {content.barbers.length > COUNT_OF_BARBERS_ON_VIEWPORT && (
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
                  startCarouselIndex + COUNT_OF_BARBERS_ON_VIEWPORT >=
                  content.barbers.length
                }
              />
            </>
          )}
          <div className={styles.barbers_list}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;
