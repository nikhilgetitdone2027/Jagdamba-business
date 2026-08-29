import { OwnerProfile } from '../types';

/**
 * =========================================================================
 * JAGDAMBA CATERER - OWNERS / OUR FAMILY DATA
 * =========================================================================
 * You can easily update names, roles, bios, contact details, and photos here.
 * Place photos in:
 *   - /public/images/owners/founder.jpg
 *   - /public/images/owners/son-1.jpg
 *   - /public/images/owners/son-2.jpg
 */
export const ownersData: OwnerProfile[] = [
  {
    id: 'founder',
    name: 'Chef Haribansh Pandey',
    role: 'Founder & Master Chef',
    relationship: 'Founder & Culinary Director',
    bio: 'With ~30 years of deep culinary experience in royal banquets, Chef Haribansh Pandey oversees every recipe, specialized spice blend, and customized client menu to ensure supreme flavor and tradition.',
    experience: '30+ Years Experience',
    image: '/images/owners/founder.jpg',
    isFounder: true,
    contactNote: 'haribanshpandey2011@gmail.com | +91 91137 80293',
  },
  {
    id: 'son-1',
    name: '[Owner / Partner Name]',
    role: 'Managing Partner - Operations & Catering Management',
    relationship: 'Son / Owner',
    bio: 'Oversees on-ground banquet operations, event logistics, fresh ingredients sourcing, and kitchen coordination to ensure flawless service across every celebration.',
    experience: 'Operations & Catering Head',
    image: '/images/owners/son-1.jpg',
    isFounder: false,
    contactNote: 'Contact via Central Desk: +91 91137 80293',
  },
  {
    id: 'son-2',
    name: '[Owner / Partner Name]',
    role: 'Managing Partner - Decoration & Lighting Production',
    relationship: 'Son / Owner',
    bio: 'Manages client consultations, bespoke decoration setups, stage lighting integration, and venue styling to bring the customer vision to life with royal grandeur.',
    experience: 'Decor & Production Head',
    image: '/images/owners/son-2.jpg',
    isFounder: false,
    contactNote: 'Contact via Central Desk: +91 96930 70308',
  },
];
