export type MenuButtonContent = {
  id: number;
  title: string;
  section: string;
};

export type ButtonContent = {
  id: number;
  title: string;
  url: string;
};

export type MediaImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  url: string;
};

export type HeaderBlock = {
  id: number;
  schedule: string;
  phone: string;
  instagramLink: string;
  navLink: MenuButtonContent[];
  logo: MediaImage;
};

export type HeroContent = {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  backgroundImg: MediaImage | null;
};

export type BarberPosition = 'junior' | 'middle' | 'senior';

export type BarberContent = {
  id: number;
  name: string;
  position: BarberPosition;
  image: MediaImage;
};

export type BarbersBlock = {
  id: number;
  barbers: BarberContent[];
};

export type ServiceContent = {
  id: number;
  name: string;
  description: string;
  juniorPrice: string;
  middlePrice: string;
  seniorPrice: string;
  icon: MediaImage;
};

export type ServicesBlock = {
  id: number;
  service: ServiceContent[];
};

export type SalonsBlock = {
  id: number;
  title: string;
  subtitle: string;
  backgroundImg: MediaImage | null;
};

export type FranchiseBlock = {
  id: number;
  title: string;
  subtitle: string;
  button: ButtonContent;
  backgroundImg: MediaImage | null;
};

export type HomePageContent = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: 'en' | 'uk-UA';
    content: [
      HeaderBlock,
      HeroContent,
      BarbersBlock,
      ServicesBlock,
      SalonsBlock,
      FranchiseBlock,
    ];
  };
  meta: {};
};
