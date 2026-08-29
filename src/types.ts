export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  experienceYears: string;
  experienceTitle: string;
  description: string;
  leadChef: string;
  location: {
    addressLine1: string;
    area: string;
    city: string;
    state: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  serviceAreas: string[];
  cuisines: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  tag: string;
}

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  description?: string;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  isLiveCounter?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  items: MenuItem[];
}

export interface MenuData {
  type: 'veg' | 'non-veg';
  title: string;
  subtitle: string;
  categories: MenuCategory[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'catering' | 'decoration' | 'lighting' | 'events';
  categoryLabel: string;
  image: string;
  caption: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface OwnerProfile {
  id: string;
  name: string;
  role: string;
  relationship: string;
  bio: string;
  experience?: string;
  image: string;
  isFounder?: boolean;
  contactNote: string;
}
