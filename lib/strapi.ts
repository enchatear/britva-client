import { cache } from 'react';
import { config } from './config';
import { HomePageContent, MediaImage } from '@/types/strapi';

// Using React's cache function to ensure the same data is reused
export const getHomePageContent = cache(
  async (locale: 'en' | 'uk-UA'): Promise<HomePageContent> => {
    const res = await fetch(
      `${config.strapi.baseUrl}/api/home-page?locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: {
          revalidate: 3600, // Revalidate every hour
          tags: ['homepage-content'],
        },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch barbershop data');
    }

    const data = await res.json();

    return data;
  }
);

export const getImageUrl = (image: MediaImage): string => {
  if (!image.url) return '';
  const imageUrl = image.url;
  return imageUrl.startsWith('http')
    ? imageUrl
    : `${config.strapi.baseUrl}${imageUrl}`;
};
