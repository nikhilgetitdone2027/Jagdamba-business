import { OwnerProfile } from '../types';

export const ownersData: OwnerProfile[] = [
  {
    id: 'founder',
    name: 'Chef Haribansh Pandey',
    role: 'Founder & Master Chef',
    relationship: 'Founder & Culinary Director',
    bio: 'With ~30 years of deep culinary experience in royal banquets, Chef Haribansh Pandey oversees every recipe, specialized spice blend, and customized client menu to ensure supreme flavor and tradition.',
    experience: '30+ Years Experience',
    image: '', // Editable placeholder for founder photo
    isFounder: true,
    contactNote: 'haribanshpandey2011@gmail.com | +91 91137 80293',
  },
  {
    id: 'son-1',
    name: '[Owner / Partner Name]',
    role: 'Managing Partner - Operations & Logistics',
    relationship: 'Owner & Operations Head',
    bio: 'Oversees on-ground banquet operations, event logistics, food quality control, and kitchen coordination to ensure timely and smooth service during celebrations.',
    experience: 'Event Operations',
    image: '', // Editable placeholder for Son / Owner photo
    isFounder: false,
    contactNote: 'Contact via Central Desk: +91 91137 80293',
  },
  {
    id: 'son-2',
    name: '[Owner / Partner Name]',
    role: 'Managing Partner - Production & Client Relations',
    relationship: 'Owner & Production Head',
    bio: 'Manages client consultations, bespoke decoration setups, stage lighting integration, and venue styling to bring the customer vision to life.',
    experience: 'Production & Decor',
    image: '', // Editable placeholder for Son / Owner photo
    isFounder: false,
    contactNote: 'Contact via Central Desk: +91 96930 70308',
  },
];
