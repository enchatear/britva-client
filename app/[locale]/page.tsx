import React from 'react';
import { getHomePageContent } from '@/lib/strapi';
import HeroSection from '@/features/home-page/containers/hero-section';
import BarbersSection from '@/features/home-page/containers/barbers-section';
import './page.scss';
import ServicesSection from '@/features/home-page/containers/services-section';
import SalonsSection from '@/features/home-page/containers/salons-section';
import FranchiseSection from '@/features/home-page/containers/franchise-section';

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'ua' };
}) {
  const { locale } = params;
  const data = await getHomePageContent(locale);

  return (
    <main className="main">
      <HeroSection
        content={data.data.content[1]}
        header_contacts={data.data.content[0]}
      />
      <BarbersSection content={data.data.content[2]} />
      <ServicesSection content={data.data.content[3]} />
      <SalonsSection content={data.data.content[4]} />
      <FranchiseSection content={data.data.content[5]} />
    </main>
  );
}
