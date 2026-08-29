import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Flower2, Sparkles, Heart, Crown, LayoutGrid } from 'lucide-react';

export const DecorationSection: React.FC = () => {
  const decorElements = [
    {
      title: 'Grand Stage & Mandap Decoration',
      subtitle: 'Ceremonial Centerpiece',
      desc: 'Breathtaking royal mandaps and reception backdrops draped in rich silks, fresh exotic florals, and carved ornamental pillars.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Majestic Entrance Gateways & Tunnels',
      subtitle: 'First Impression of Royalty',
      desc: 'Floral arches with cascading jasmine, roses, marigolds, and brass urlis illuminated by soft floor diyas.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'VIP Banquet Dining & Table Settings',
      subtitle: 'Sophisticated Guest Comfort',
      desc: 'Luxurious table linens, gold-rimmed glassware, royal chair sashes, and elegant floral centerpiece arrangements.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Decorative Ambience & Photo Corners',
      subtitle: 'Memories for a Lifetime',
      desc: 'Curated selfie corners, vintage brass props, floral swing installations, and integrated mood lighting.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section id="decoration" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#5D0E11] relative overflow-hidden">
      {/* Background Indian ornamental motif */}
      <div className="absolute inset-0 ornamental-divider opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Bespoke Venue Styling"
          title="ROYAL DECORATION & AMBIENCE"
          subtitle="Transforming banquet halls, lawns, and wedding venues into regal settings of timeless Indian splendor."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {decorElements.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-sm bg-[#FDFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Large Image Showcase Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#5D0E11]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140204]/90 via-transparent to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#140204]/90 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm backdrop-blur-xs">
                    {item.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-[11px] text-[#FFFDD0]/70 bg-[#140204]/70 px-2 py-0.5 rounded-sm">
                  Decoration Showcase
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#5D0E11] group-hover:text-[#7A1C2B] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#4A3236] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between text-xs text-[#5D0E11] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[#5D0E11]">
                    <Flower2 className="w-4 h-4 text-[#D4AF37]" />
                    Fresh Florals & Custom Themes
                  </span>
                  <span className="font-cinzel text-[#D4AF37]">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
