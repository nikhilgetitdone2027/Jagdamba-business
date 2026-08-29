import { VideoItem } from '../types';

/**
 * =========================================================================
 * JAGDAMBA CATERER - EVENT VIDEOS & HIGHLIGHTS DATA
 * =========================================================================
 * You can easily add your own local MP4 videos here.
 * Place video files in:
 *   - /public/videos/event-highlight.mp4
 *   - /public/videos/catering-showcase.mp4
 *   - /public/videos/venue-decor-highlight.mp4
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
    title: 'Celebration Highlights & Hospitality',
    category: 'wedding',
    categoryLabel: 'Wedding Setup',
    videoSrc: '/videos/event-highlight.mp4',
    poster: '/images/decoration/outdoor-live-buffet.jpg',
    duration: 'Event Highlights',
    description: 'A look at the welcoming atmosphere, coordinated service, and memorable moments that bring a family celebration together.',
  },
  {
    id: 'vid-2',
    title: 'Live Catering Counter Showcase',
    category: 'catering',
    categoryLabel: 'Catering Live Counters',
    videoSrc: '/videos/catering-showcase.mp4',
    poster: '/images/decoration/lantern-lit-buffet.jpg',
    duration: 'Catering Reel',
    description: 'Watch our catering presentation in action, from thoughtfully arranged buffet counters to attentive service for every guest.',
  },
  {
    id: 'vid-3',
    title: 'Venue Décor & Buffet Presentation',
    category: 'decoration',
    categoryLabel: 'Floral Decoration',
    videoSrc: '/videos/venue-decor-highlight.mp4',
    poster: '/images/decoration/royal-buffet-counter.jpg',
    duration: 'Décor Tour',
    description: 'A showcase of festive venue styling, illuminated buffet presentation, and the details that give every event its own character.',
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
  {
    id: 'vid-5',
    title: 'Celebration Moments Reel',
    category: 'events',
    categoryLabel: 'Event Highlights',
    videoSrc: '/videos/celebration-reel.mp4',
    poster: '/images/decoration/festive-sweets-counter.jpg',
    duration: 'Celebration Reel',
    description: 'A lively glimpse of the colour, hospitality, and carefully coordinated details that make each Jagdamba celebration memorable.',
  },
];
