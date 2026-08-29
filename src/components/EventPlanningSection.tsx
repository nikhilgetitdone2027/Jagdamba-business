import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ClipboardList, Palette, Wrench, PartyPopper, ArrowRight, CheckCircle2 } from 'lucide-react';

export const EventPlanningSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'PLAN',
      subtitle: 'Menu & Event Roadmap',
      desc: 'In-depth consultation to understand your guest count, traditional preferences, cuisine choices with Chef Haribansh Pandey, and event timelines.',
      icon: <ClipboardList className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: 'Themes & Lighting Layouts',
      desc: 'Crafting the visual layout of your venue — from floral stage themes and entrance arches to fairy-light canopy positions and buffet counter flows.',
      icon: <Palette className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      step: '03',
      title: 'SETUP',
      subtitle: 'On-Ground Execution',
      desc: 'Precise on-site preparation by our chefs, lighting engineers, and decorators hours before guests arrive to ensure pristine presentation.',
      icon: <Wrench className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      step: '04',
      title: 'CELEBRATE',
      subtitle: 'Flawless Hospitality',
      desc: 'Live food counters, warm hospitality, and smooth dining service allow you and your family to enjoy every moment with total peace of mind.',
      icon: <PartyPopper className="w-6 h-6 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="event-planning" className="py-20 sm:py-28 bg-[#140204] text-[#FFFDD0] relative overflow-hidden">
      <div className="absolute inset-0 dark-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Process"
          title="HOW WE CREATE YOUR CELEBRATION"
          subtitle="A structured, meticulous journey ensuring your special occasion is effortless, royal, and memorable."
          theme="dark"
        />

        {/* Timeline Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-[#140204] border border-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-cinzel text-3xl font-extrabold text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/80 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Progress Indicator Arrow for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#140204] text-[#D4AF37] p-1.5 rounded-full border border-[#D4AF37]/50 shadow-lg">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#5D0E11] border-2 border-[#D4AF37] text-center shadow-2xl">
          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFFDD0] mb-2">
            Complete Turnkey Event Coordination
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/85 max-w-2xl mx-auto leading-relaxed">
            From intimacy of 100 guests to royal wedding gatherings of 5,000+, Jagdamba Caterer & Event Planner brings unity, punctual delivery, and refined elegance to every detail.
          </p>
        </div>
      </div>
    </section>
  );
};
