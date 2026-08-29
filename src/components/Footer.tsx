import React from 'react';
import { Logo } from '../assets/logo/Logo';
import { businessData } from '../data/business';
import { Phone, Mail, MapPin, Sparkles, ChevronUp, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Catering Feasts', href: '#catering' },
    { name: 'Lighting & Ambience', href: '#lighting' },
    { name: 'Decoration', href: '#decoration' },
    { name: 'Our Works', href: '#gallery' },
    { name: 'Curated Menu', href: '#menu' },
    { name: 'The Family', href: '#owners' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#140204] text-[#FFFDD0] relative border-t-2 border-[#D4AF37] pt-16 pb-24 sm:pb-16 overflow-hidden">
      {/* Top ornamental line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D4AF37]/30">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="lg" />
              <div>
                <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#FFFDD0]">
                  JAGDAMBA
                </h3>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block">
                  CATERER & EVENT PLANNER
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-[#D4AF37] font-medium">
              &ldquo;{businessData.tagline}&rdquo;
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/80 leading-relaxed max-w-md">
              With 30+ years of culinary tradition and hospitality, we curate bespoke wedding catering, atmospheric stage lighting, royal floral decoration, and turnkey celebrations across Jharkhand and beyond.
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5D0E11] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5D0E11] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
                className="w-9 h-9 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5D0E11] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#FFFDD0]/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Head Office & Inquiries
            </h4>

            <div className="flex items-start gap-3 text-xs text-[#FFFDD0]/85">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{businessData.location.fullAddress}</span>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#FFFDD0]/85">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="space-y-1">
                {businessData.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block text-[#FFFDD0] hover:text-[#D4AF37]"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#FFFDD0]/85">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a
                href={`mailto:${businessData.email}`}
                className="text-[#FFFDD0] hover:text-[#D4AF37] break-all"
              >
                {businessData.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(businessData.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDD0]/60">
          <p>
            &copy; {currentYear} Jagdamba Caterer & Event Planner. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D4AF37]">
              Chef Haribansh Pandey & Family
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#5D0E11] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5D0E11] border border-[#D4AF37]/50 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-[10px] hidden sm:inline font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
