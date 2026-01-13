
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
}

export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  subdomain: string;
  gmbLink: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  STRATEGY = 'strategy',
  CONTACT = 'contact',
}
