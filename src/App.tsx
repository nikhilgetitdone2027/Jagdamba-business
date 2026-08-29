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

        {/* 3. Services Overview */}
        <ServicesSection onSelectService={(id) => scrollToSection(`#${id}`)} />

        {/* 4. Dedicated Catering Section */}
        <CateringSection onViewMenu={() => scrollToSection('#menu')} />

        {/* 5. Dedicated Lighting Section */}
        <LightingSection />

        {/* 6. Dedicated Decoration Section */}
        <DecorationSection />

        {/* 7. Event Planning Process */}
        <EventPlanningSection />

        {/* 8. Previous Works / Gallery */}
        <GallerySection />

        {/* 9. Menu Experience */}
        <MenuSection />

        {/* 10. Owners & Family Section */}
        <OwnersSection />

        {/* 11. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky 1-Tap Quick Action Bar */}
      <MobileContactBar onOpenMenu={() => scrollToSection('#menu')} />
    </div>
  );
}
