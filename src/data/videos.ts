import { VideoItem } from '../types';

/**
 * =========================================================================
 * JAGDAMBA CATERER - EVENT VIDEOS & HIGHLIGHTS DATA
 * =========================================================================
 * You can easily add your own local MP4 videos here.
 * Place video files in:
 *   - /public/videos/wedding-setup.mp4
 *   - /public/videos/catering-live-counters.mp4
 *   - /public/videos/mandap-decor.mp4
 *   - /public/videos/lighting-ambience.mp4
 *
 * Supported categories:
 *   - 'events' / 'wedding'
 *   - 'catering'
 *   - 'decoration'
 *   - 'lighting'
 */
export const videosData: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Grand Wedding Banquet & Hospitality',
    category: 'wedding',
    categoryLabel: 'Wedding Setup',
    videoSrc: '/videos/wedding-setup.mp4',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    duration: 'Banqueting Film',
    description: 'Comprehensive setup walkthrough showcasing royal floral entryways, buffet line presentation, and welcoming guest hospitality.',
  },
  {
    id: 'vid-2',
    title: 'Live Chaat & Tandoori Counter Showcase',
    category: 'catering',
    categoryLabel: 'Catering Live Counters',
    videoSrc: '/videos/catering-live-counters.mp4',
    poster: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    duration: 'Culinary Reel',
    description: 'Live interactive counters featuring sizzling kebabs, tandoor roasted naans, and hot Banarasi street chaats prepared fresh.',
  },
  {
    id: 'vid-3',
    title: 'Royal Mandap & Floral Stage Decor',
    category: 'decoration',
    categoryLabel: 'Floral Decoration',
    videoSrc: '/videos/mandap-decor.mp4',
    poster: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    duration: 'Decor Tour',
    description: 'Detailed visual tour of a custom-designed royal wedding mandap with exotic fresh flower cascades and golden chandeliers.',
  },
  {
    id: 'vid-4',
    title: 'Illuminated Night Ambience & Tunnel Lights',
    category: 'lighting',
    categoryLabel: 'Lighting & Ambience',
    videoSrc: '/videos/lighting-ambience.mp4',
    poster: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    duration: 'Night Highlights',
    description: 'Magical 100-foot fairy light pathway tunnel and synchronized LED stage lighting creating a fairy-tale evening atmosphere.',
  },
];
