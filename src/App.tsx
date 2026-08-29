import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CateringSection } from './components/CateringSection';
import { LightingSection } from './components/LightingSection';
import { DecorationSection } from './components/DecorationSection';
import { EventPlanningSection } from './components/EventPlanningSection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { MenuSection } from './components/MenuSection';
import { OwnersSection } from './components/OwnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#5D0E11] font-sans relative selection:bg-[#D4AF37] selection:text-[#5D0E11] pb-16 lg:pb-0">
      {/* Top Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Single-Page Website Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('#services')}
          onViewMenu={() => scrollToSection('#menu')}
          onContact={() => scrollToSection('#contact')}
        />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Owners / Our Family Section */}
        <OwnersSection />

        {/* 4. Services Overview */}
        <ServicesSection onSelectService={(id) => scrollToSection(`#${id}`)} />

        {/* 5. Dedicated Catering Section */}
        <CateringSection onViewMenu={() => scrollToSection('#menu')} />

        {/* 6. Dedicated Lighting Section */}
        <LightingSection />

        {/* 7. Dedicated Decoration Section */}
        <DecorationSection />

        {/* 8. Event Planning Process */}
        <EventPlanningSection />

        {/* 9. Previous Works / Gallery */}
        <GallerySection />

        {/* 10. Event Highlights / Videos */}
        <VideoSection />

        {/* 11. Menu Experience */}
        <MenuSection />

        {/* 12. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky 1-Tap Quick Action Bar */}
      <MobileContactBar onOpenMenu={() => scrollToSection('#menu')} />
    </div>
  );
}
