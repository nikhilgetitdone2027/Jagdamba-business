import React, { useState, useEffect } from 'react';
import { Logo } from '../assets/logo/Logo';
import { businessData } from '../data/business';
import { Menu, X, Phone, CalendarHeart, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenMenuModal?: (type: 'veg' | 'non-veg') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#owners' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#5D0E11]/98 backdrop-blur-md py-3 shadow-2xl border-b-2 border-[#D4AF37]'
          : 'bg-[#5D0E11] border-b-2 border-[#D4AF37] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <Logo size={isScrolled ? 'sm' : 'md'} className="transition-all duration-300" />
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-widest text-[#D4AF37] group-hover:text-[#FFFDD0] transition-colors leading-none">
              JAGDAMBA
            </span>
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#FFFDD0]/90 leading-none mt-1">
              CATERER & EVENT PLANNER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-sans text-xs font-semibold tracking-widest uppercase text-[#FFFDD0] hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Quick Call */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${businessData.primaryPhone}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs font-semibold tracking-wider text-[#FFFDD0] bg-[#5D0E11] border border-[#D4AF37]/50 hover:bg-[#7A1C2B] hover:text-[#D4AF37] transition-colors shadow-sm"
            title="Call Jagdamba Caterer"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xl:inline">+91 91137 80293</span>
            <span className="xl:hidden">Call</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center justify-center px-6 py-2 rounded-sm text-xs font-bold tracking-widest uppercase text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] shadow-md transition-colors active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="sm:hidden px-3 py-1.5 rounded-sm text-xs font-bold tracking-wider uppercase text-[#5D0E11] bg-[#D4AF37]"
          >
            Inquire
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-sm text-[#FFFDD0] bg-[#5D0E11] hover:bg-[#7A1C2B] border border-[#D4AF37]/40 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-[#D4AF37]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#5D0E11] border-b-2 border-[#D4AF37] px-6 py-6 space-y-4 shadow-2xl transition-all"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-[#D4AF37]/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#FFFDD0] hover:bg-[#7A1C2B] hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${businessData.primaryPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#FFFDD0] bg-[#4A0E17] border border-[#D4AF37]/40"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call +91 91137 80293
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0]"
            >
              <Sparkles className="w-4 h-4 text-[#5D0E11]" />
              Contact Us for Bookings
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
