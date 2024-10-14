import React from 'react';
import { getHomePageContent } from '@/lib/strapi';
import HeroSection from '@/features/home-page/containers/hero-section';
import BarbersSection from '@/features/home-page/containers/barbers-section';
import ScrollHandler from '@/components/ScrollHandler';
import './page.scss';

export default async function Home() {
  const data = await getHomePageContent('en');

  return (
    <main className="main">
      <HeroSection content={data.data.content[1]} />
      <BarbersSection
        content={data.data.content[2]}
        // content={{
        //   ...data.data.content[2],
        //   barbers: data.data.content[2].barbers.slice(0, 6),
        // }}
      />
      <ScrollHandler />
    </main>
  );
}
