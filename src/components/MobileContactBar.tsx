import React from 'react';
import { businessData } from '../data/business';
import { Phone, MessageSquare, UtensilsCrossed } from 'lucide-react';

interface MobileContactBarProps {
  onOpenMenu: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenMenu }) => {
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    businessData.whatsappDefaultMessage
  )}`;

  const handleMenuClick = () => {
    const element = document.querySelector('#menu');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    onOpenMenu();
  };

  return (
    <div
      id="mobile-sticky-contact-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#140204]/95 backdrop-blur-md border-t-2 border-[#D4AF37] px-3 py-2.5 shadow-2xl safe-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          id="mobile-bar-call-btn"
          href={`tel:${businessData.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#5D0E11] text-[#FFFDD0] border border-[#D4AF37] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="font-cinzel text-[11px] font-bold tracking-wider text-[#FFFDD0]">
            CALL
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          id="mobile-bar-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-emerald-900 text-white border border-emerald-500/60 active:scale-95 transition-transform shadow-md"
        >
          <MessageSquare className="w-4 h-4 text-emerald-300 mb-0.5" />
          <span className="font-cinzel text-[11px] font-bold tracking-wider text-white">
            WHATSAPP
          </span>
        </a>

        {/* MENU */}
        <button
          id="mobile-bar-menu-btn"
          type="button"
          onClick={handleMenuClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#D4AF37] text-[#5D0E11] active:scale-95 transition-transform shadow-md cursor-pointer border border-[#FFFDD0]/40"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#5D0E11] mb-0.5" />
          <span className="font-cinzel text-[11px] font-bold tracking-wider text-[#5D0E11]">
            MENU
          </span>
        </button>
      </div>
    </div>
  );
};
