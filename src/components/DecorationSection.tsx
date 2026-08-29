import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Flower2, Sparkles, Heart, Crown, LayoutGrid } from 'lucide-react';

export const DecorationSection: React.FC = () => {
  const decorElements = [
    {
      title: 'Starlit Live Buffet',
      subtitle: 'Outdoor Culinary Experience',
      desc: 'A sweeping outdoor live-counter setup with warm string lights, cascading greenery, soft fabric drapes, and chefs serving guests fresh from the kitchen.',
      image: '/images/decoration/outdoor-live-buffet.jpg',
    },
    {
      title: 'Lantern-Lit Banquet',
      subtitle: 'Ambient Buffet Styling',
      desc: 'A graceful buffet pavilion dressed in flowing white fabric, glowing pendant lanterns, and violet uplighting for an elegant evening reception.',
      image: '/images/decoration/lantern-lit-buffet.jpg',
    },
    {
      title: 'Regal Carved Buffet Counter',
      subtitle: 'Heritage-Inspired Presentation',
      desc: 'An illuminated gold-and-black buffet façade with intricate patterned panels, decorative lamps, and a statement chef centerpiece for a royal welcome.',
      image: '/images/decoration/royal-buffet-counter.jpg',
    },
    {
      title: 'Festive Mithai & Dessert Counter',
      subtitle: 'Traditional Celebration Display',
      desc: 'A vibrant sweets counter framed by rich red drapery, fresh florals, colourful display shelves, and festive lighting for special celebrations.',
      image: '/images/decoration/festive-sweets-counter.jpg',
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
