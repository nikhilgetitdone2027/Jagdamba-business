import React from 'react';
import { SectionHeading } from './SectionHeading';
import { businessData } from '../data/business';
import { ChefHat, CheckCircle2, Utensils, Sparkles, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 ornamental-divider opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Heritage & Expertise"
          title="THREE DECADES OF CULINARY EXCELLENCE"
          subtitle="Crafting authentic tastes and unforgettable celebrations rooted in tradition and passion."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: About Story & Cuisine Details */}
          <div className="lg:col-span-7 space-y-6 text-[#4A3236]">
            <div className="border-l-4 border-[#D4AF37] pl-4 sm:pl-6 py-1">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#5D0E11] mb-1">
                Jagdamba Caterer & Event Planner
              </h3>
              <p className="font-serif italic text-base text-[#5D0E11]/80 font-medium">
                Serving timeless culinary memories across Jharkhand and adjoining regions.
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#4A3236]">
              With approximately <strong className="text-[#5D0E11] font-bold">30 years of rich experience</strong> in the food and banqueting business, Jagdamba Caterer has established a steadfast reputation for exquisite flavors, uncompromised ingredient purity, and impeccable hospitality.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#4A3236]">
              Every auspicious wedding, reception, and family gathering deserves a tailored menu that delights every guest. Under the guidance of <strong className="text-[#5D0E11] font-bold">{businessData.leadChef}</strong>, our experienced culinary team specializes in designing bespoke menus crafted specifically around each customer's preferences and dietary traditions.
            </p>

            {/* Specialization List */}
            <div className="pt-2 pb-4">
              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#5D0E11] uppercase tracking-widest mb-3 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[#D4AF37]" />
                Our Culinary Specialties:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {businessData.cuisines.map((cuisine) => (
                  <div
                    key={cuisine}
                    className="flex items-center gap-2.5 p-3 rounded-sm bg-[#FDFBF7] border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold text-[#5D0E11] shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{cuisine}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef Attribution Note */}
            <div className="p-4 rounded-sm bg-[#FDFBF7] border border-[#D4AF37]/50 shadow-sm flex items-start gap-3.5">
              <div className="p-2 rounded-sm bg-[#5D0E11] text-[#D4AF37] shrink-0 mt-0.5">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-cinzel text-sm font-bold text-[#5D0E11]">
                  Personalized Menu Customization
                </h5>
                <p className="text-xs sm:text-sm text-[#4A3236] mt-0.5">
                  Led directly by <strong className="text-[#5D0E11]">{businessData.leadChef}</strong>, we sit down with families to curate balanced, multi-course menus tailored to your guest profile and auspicious event timelines.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Chef / Founder Image Card & Stat Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Golden Border Framing */}
              <div className="relative rounded-sm overflow-hidden bg-[#5D0E11] p-1.5 shadow-2xl border-2 border-[#D4AF37]">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#3D0C13] flex flex-col items-center justify-center text-center p-8 group">
                  {/* Visual Background Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140204] via-[#5D0E11]/70 to-transparent" />

                  {/* Icon and Founder Placeholder Area */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-[#140204] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-inner mb-4">
                      <ChefHat className="w-12 h-12" />
                    </div>
                    <span className="font-cinzel text-xl font-bold text-[#FFFDD0] tracking-wide">
                      {businessData.leadChef}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold mt-1">
                      Founder & Master Chef
                    </span>
                    <p className="text-xs text-[#FFFDD0]/80 mt-3 max-w-xs leading-relaxed">
                      Leading menu curation, ingredient selection, and authentic taste preservation for over 30 years.
                    </p>

                    <div className="mt-4 px-3 py-1 rounded-sm bg-[#140204]/90 border border-[#D4AF37]/50 text-[11px] text-[#FFFDD0]">
                      Founder / Chef Photograph Placeholder
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Highlighted Statistic Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#5D0E11] text-[#FFFDD0] p-4 sm:p-5 rounded-sm border-2 border-[#D4AF37] shadow-2xl flex items-center gap-4">
                <div className="p-3 rounded-sm bg-[#140204] border border-[#D4AF37]/40 text-[#D4AF37]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                    30+
                  </div>
                  <div className="font-sans text-xs sm:text-sm font-semibold text-[#FFFDD0] uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
