import { config } from './config';
import { HomePageContent, MediaImage } from '@/types/strapi';

// Using React's cache function to ensure the same data is reused
export const getHomePageContent = async (
  locale: 'en' | 'ua'
): Promise<HomePageContent> => {
  const strapiLocalesDictionary = {
    en: 'en',
    ua: 'uk-UA',
  };

  const res = await fetch(
    `${config.strapi.baseUrl}/api/home-page?locale=${strapiLocalesDictionary[locale]}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: 'no-store',
      next: {
        // revalidate: 3600, // Revalidate every hour
        tags: ['homepage-content'],
      },
    }
  );

  if (!res.ok) {
    const errorBody = await res.text();
    console.error('Failed to fetch home page content:', res.status, errorBody);
    throw new Error(
      `Failed to fetch home page content: message: ${res}, status:${res.status}`
    );
  }

  const data = await res.json();

  return data;
};

export const getImageUrl = (image: MediaImage): string => {
  if (!image?.url) return '';
  const imageUrl = image.url;
  return imageUrl.startsWith('http')
    ? imageUrl
    : `${config.strapi.baseUrl}${imageUrl}`;
};
