import React from 'react';
import { SectionHeading } from './SectionHeading';
import { businessData } from '../data/business';
import { Utensils, ChefHat, Layers, Sparkles, CheckCircle2, Flame, Award, ArrowRight } from 'lucide-react';

interface CateringSectionProps {
  onViewMenu: () => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onViewMenu }) => {
  const cateringFeatures = [
    {
      title: 'Customized Menus',
      desc: 'Bespoke menus personally crafted by Chef Haribansh Pandey to match family customs, regional palates, and event formats.',
      icon: <ChefHat className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      title: 'Experienced Master Chefs',
      desc: 'Specialized chefs with decades of mastery in authentic North Indian, Awadhi, South Indian, Continental, and Indo-Chinese banquet traditions.',
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      title: 'Multi-Cuisine Expertise',
      desc: 'Extensive range from live tandoor and banarasi chaat counters to royal dum biryanis, gourmet curries, and handcrafted fusion mithai.',
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      title: 'Professional Royal Presentation',
      desc: 'Polished food presentation with traditional brass chafers, illuminated buffet setups, live cooking stations, and hygienic uniform service staff.',
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="catering" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#5D0E11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Banqueting"
          title="ROYAL CATERING EXPERIENCE"
          subtitle="Every feast is an artistic celebration of authentic spices, traditional slow-cooking, and uncompromised culinary hospitality."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Main Visual Showcase with Catering Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden bg-[#5D0E11] p-1.5 shadow-2xl border-2 border-[#D4AF37] group">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                  alt="Jagdamba Catering Food Buffet Feast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140204]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                    Catering by Jagdamba
                  </span>
                  <p className="font-cinzel text-base sm:text-lg font-bold text-[#FFFDD0]">
                    Royal Buffet & Live Cooking Displays
                  </p>
                </div>
              </div>
            </div>

            {/* Small live counter highlight badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-5 bg-[#5D0E11] text-[#FFFDD0] p-3.5 rounded-sm border-2 border-[#D4AF37] shadow-xl flex items-center gap-3">
              <div className="p-2 rounded-sm bg-[#140204] text-[#D4AF37]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Live Counters</span>
                <span className="text-xs text-[#FFFDD0]/80">Tandoor, Chaat & Jalebi</span>
              </div>
            </div>
          </div>

          {/* Core Feature Cards Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cateringFeatures.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-sm bg-[#FDFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#5D0E11] flex items-center justify-center mb-3 shadow-inner group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#5D0E11] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#4A3236] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* View Menu Callout */}
            <div className="p-6 rounded-sm bg-[#5D0E11] text-[#FFFDD0] border-2 border-[#D4AF37] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <h5 className="font-cinzel text-base sm:text-lg font-bold text-[#D4AF37]">
                  Explore Our Comprehensive Menus
                </h5>
                <p className="text-xs sm:text-sm text-[#FFFDD0]/80 mt-0.5">
                  Browse over 90+ authentic Vegetarian and Non-Vegetarian delicacies.
                </p>
              </div>
              <button
                onClick={onViewMenu}
                className="shrink-0 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] shadow-md transition-colors active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
