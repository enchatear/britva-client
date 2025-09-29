export const config = {
  strapi: {
    baseUrl:
      process.env.NEXT_PUBLIC_STRAPI_URL || 'http://admin.britvairpin.com.ua',
    apiToken: process.env.STRAPI_API_TOKEN,
    previewSecret: process.env.STRAPI_PREVIEW_SECRET,
    revalidateToken: process.env.REVALIDATE_TOKEN,
  },
} as const;
