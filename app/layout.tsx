import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getHomePageContent } from '@/lib/strapi';
import Header from '@/components/Header';
import './globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const unboundedFont = localFont({
  src: [
    {
      path: './fonts/Unbounded-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/Unbounded-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/Unbounded-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Unbounded-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/Unbounded-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/Unbounded-Bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/Unbounded-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './fonts/Unbounded-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-unbounded',
});
const urbanistFont = localFont({
  src: [
    {
      path: './fonts/Urbanist-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: './fonts/Urbanist-RegularItalic.ttf',
    //   weight: '400',
    //   style: 'italic',
    // },
    {
      path: './fonts/Urbanist-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/Urbanist-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'BRITVA',
  description: 'Barbershop website',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getHomePageContent('en');

  return (
    <html lang="en">
      <body className={`${unboundedFont.variable} ${urbanistFont.variable}`}>
        <Header content={data.data.content[0]} />
        {children}
      </body>
    </html>
  );
}
