import React from 'react';
import { getHomePageContent } from '@/lib/strapi';
import HeroSection from '@/features/home-page/containers/hero-section';
import BarbersSection from '@/features/home-page/containers/barbers-section';
import ScrollHandler from '@/components/ScrollHandler';
import './page.scss';
import ServicesSection from '@/features/home-page/containers/services-section';

export default async function Home() {
  const data = await getHomePageContent('en');

  return (
    <main className="main">
      <HeroSection
        content={data.data.content[1]}
        header_contacts={data.data.content[0]}
      />
      <BarbersSection content={data.data.content[2]} />
      <ServicesSection content={data.data.content[3]} />
      <ScrollHandler />
    </main>
  );
}
