import React from 'react';
import { businessData } from '../data/business';
import { Sparkles, UtensilsCrossed, ArrowRight, PhoneCall, Award, ChefHat } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onViewMenu: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewMenu, onContact }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#5D0E11]">
      {/* Background Image with Deep Maroon Luxury Overlay and Dot Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=85"
          alt="Jagdamba Catering and Event Feast Setup"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered dark maroon vignette & gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140204] via-[#5D0E11]/90 to-[#5D0E11]/95" />
        <div className="absolute inset-0 dark-dot-pattern opacity-30 pointer-events-none" />
      </div>

      {/* Subtle Golden Mandala Corner Watermark Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-15 pointer-events-none rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border border-[#D4AF37] rotate-45" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FFFDD0]">
        {/* Heritage Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#5D0E11] border border-[#D4AF37] backdrop-blur-sm mb-6 shadow-xl">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#D4AF37] uppercase">
            30+ Years of Royal Banqueting & Event Excellence
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFDD0] leading-[1.15] drop-shadow-xl mb-4">
          JAGDAMBA CATERER
          <span className="block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37]">
            & EVENT PLANNER
          </span>
        </h1>

        {/* Indian Ornamental Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-5 sm:my-6">
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37] shadow-sm" />
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Supporting Tagline */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D4AF37] font-medium tracking-wide mb-4">
          &ldquo;{businessData.tagline}&rdquo;
        </p>

        {/* Supporting Descriptive Paragraph */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#FFFDD0]/85 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Creating bespoke culinary journeys, breathtaking stage lighting, royal floral decorations, and seamless event management for weddings, receptions, and monumental celebrations across Dhanbad and beyond.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
          <button
            id="hero-explore-services-btn"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#5D0E11]" />
            Explore Our Services
          </button>

          <button
            id="hero-view-menu-btn"
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-[#5D0E11]/80 hover:bg-[#D4AF37] hover:text-[#5D0E11] border border-[#D4AF37] backdrop-blur-sm shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            View Our Menu
          </button>
        </div>

        {/* Smaller Secondary CTA */}
        <div>
          <button
            id="hero-contact-cta"
            onClick={onContact}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37] hover:text-[#FFFDD0] uppercase underline underline-offset-4 decoration-[#D4AF37]/60 hover:decoration-[#FFFDD0] transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Have an upcoming celebration? Contact Us for Custom Bookings
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Highlights Strip at bottom of Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 pt-8 border-t border-[#D4AF37]/30 text-left">
          <div className="p-4 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 shadow-md">
            <span className="block font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37]">30+ Years</span>
            <span className="text-xs uppercase tracking-wider text-[#FFFDD0]/80">Culinary Mastery</span>
          </div>
          <div className="p-4 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 shadow-md">
            <span className="block font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37]">Multi-Cuisine</span>
            <span className="text-xs uppercase tracking-wider text-[#FFFDD0]/80">Veg & Non-Veg Banquets</span>
          </div>
          <div className="p-4 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 shadow-md">
            <span className="block font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37]">Grand Decor</span>
            <span className="text-xs uppercase tracking-wider text-[#FFFDD0]/80">Stage & Entrance Lighting</span>
          </div>
          <div className="p-4 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 shadow-md">
            <span className="block font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37]">Bespoke Menus</span>
            <span className="text-xs uppercase tracking-wider text-[#FFFDD0]/80">Curated by Chef Pandey</span>
          </div>
        </div>
      </div>
    </section>
  );
};
