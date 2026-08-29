import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ownersData } from '../data/owners';
import { ChefHat, User, Sparkles, Phone, Mail, Award, Users } from 'lucide-react';

export const OwnersSection: React.FC = () => {
  return (
    <section id="owners" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#5D0E11] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 ornamental-divider opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Legacy"
          title="THE PEOPLE BEHIND JAGDAMBA"
          subtitle="A dedicated family-run catering and event planning enterprise with a legacy of authentic hospitality."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Founder (More Prominent - 4 columns on desktop) */}
          {ownersData.filter((o) => o.isFounder).map((founder) => (
            <div
              key={founder.id}
              className="lg:col-span-4 rounded-sm bg-[#5D0E11] text-[#FFFDD0] p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Founder Crown Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-sm bg-[#140204] text-[#D4AF37] border border-[#D4AF37]/60 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                <ChefHat className="w-3.5 h-3.5" />
                FOUNDER
              </div>

              <div>
                {/* Photo Placeholder */}
                <div className="relative aspect-square max-w-[200px] mx-auto rounded-full overflow-hidden bg-[#140204] border-4 border-[#D4AF37] shadow-xl mb-6 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#5D0E11] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-2">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D4AF37] leading-tight">
                    [PHOTO PLACEHOLDER]
                  </span>
                  <span className="text-[9px] text-[#FFFDD0]/80 mt-0.5">
                    Chef Haribansh Pandey
                  </span>
                </div>

                {/* Founder Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFDD0] tracking-wide">
                    {founder.name}
                  </h3>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mt-1">
                    {founder.role}
                  </div>
                  <div className="inline-block mt-2 px-3 py-0.5 rounded-sm bg-[#140204] text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider border border-[#D4AF37]/40">
                    {founder.experience}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/85 leading-relaxed text-center mb-6">
                  {founder.bio}
                </p>
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-[#D4AF37]/30 bg-[#140204]/80 p-3.5 rounded-sm text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                  DIRECT CONTACT
                </span>
                <p className="text-xs font-bold text-[#FFFDD0]">
                  {founder.contactNote}
                </p>
              </div>
            </div>
          ))}

          {/* Cards 2 & 3: Sons / Partners (8 columns total, 4 cols each) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {ownersData.filter((o) => !o.isFounder).map((owner, index) => (
              <div
                key={owner.id}
                className="rounded-sm bg-[#FDFBF7] text-[#5D0E11] p-6 sm:p-7 border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg flex flex-col justify-between relative transition-all duration-300 group"
              >
                {/* Role Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-sm bg-[#FAF7F2] text-[#5D0E11] border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider">
                    {index === 0 ? 'Son & Partner (Operations)' : 'Son & Partner (Decor & Lighting)'}
                  </span>
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <div>
                  {/* Photo Placeholder */}
                  <div className="relative aspect-square max-w-[160px] mx-auto rounded-full overflow-hidden bg-[#FAF7F2] border-3 border-[#D4AF37] shadow-md mb-5 flex flex-col items-center justify-center p-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#5D0E11] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-1.5">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#5D0E11]">
                      [PHOTO PLACEHOLDER]
                    </span>
                    <span className="text-[9px] text-[#4A3236]">
                      Son / Partner {index + 1}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-3">
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#5D0E11]">
                      {owner.name}
                    </h3>
                    <div className="text-xs uppercase font-bold tracking-wider text-[#5D0E11]/80 mt-0.5">
                      {owner.role}
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#4A3236] leading-relaxed text-center mb-5">
                    {owner.bio}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="pt-3 border-t border-[#D4AF37]/30 bg-[#FAF7F2] p-3 rounded-sm text-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5D0E11] block mb-0.5">
                    DIRECT CONTACT
                  </span>
                  <p className="text-xs font-semibold text-[#5D0E11]">
                    {owner.contactNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Enterprise Note */}
        <div className="mt-12 text-center text-xs text-[#5D0E11]/70 italic max-w-xl mx-auto">
          * Profile details and photographs can be personalized in the central data configuration.
        </div>
      </div>
    </section>
  );
};
