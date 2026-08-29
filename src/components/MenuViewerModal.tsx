import React from 'react';
import { MenuData } from '../types';
import { vegMenuData, nonVegMenuData } from '../data/menu';
import { businessData } from '../data/business';
import { Logo } from '../assets/logo/Logo';
import { X, Printer, Download, Sparkles, ChefHat, Leaf, Drumstick } from 'lucide-react';

interface MenuViewerModalProps {
  isOpen: boolean;
  menuType: 'veg' | 'non-veg';
  onClose: () => void;
  onSwitchType: (type: 'veg' | 'non-veg') => void;
}

export const MenuViewerModal: React.FC<MenuViewerModalProps> = ({
  isOpen,
  menuType,
  onClose,
  onSwitchType,
}) => {
  if (!isOpen) return null;

  const currentMenu: MenuData = menuType === 'veg' ? vegMenuData : nonVegMenuData;
  const isVeg = menuType === 'veg';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="menu-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 lg:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-sm shadow-2xl border-2 border-[#D4AF37] my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header Bar */}
        <div className="bg-[#5D0E11] text-[#FFFDD0] px-6 py-4 flex items-center justify-between border-b-2 border-[#D4AF37] shrink-0">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#D4AF37] leading-tight">
                {currentMenu.title}
              </h3>
              <p className="text-[11px] text-[#FFFDD0]/80 hidden sm:block">
                Jagdamba Caterer & Event Planner • Official Banquet Menu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Menu Type Switcher in Modal */}
            <div className="flex bg-[#140204] p-1 rounded-sm border border-[#D4AF37]/50 mr-2">
              <button
                onClick={() => onSwitchType('veg')}
                className={`px-3 py-1 rounded-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isVeg
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-[#FFFDD0]/70 hover:text-white'
                }`}
              >
                <Leaf className="w-3 h-3 text-emerald-300" />
                Veg Menu
              </button>
              <button
                onClick={() => onSwitchType('non-veg')}
                className={`px-3 py-1 rounded-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  !isVeg
                    ? 'bg-[#5D0E11] text-[#D4AF37] border border-[#D4AF37]/50 shadow-sm'
                    : 'text-[#FFFDD0]/70 hover:text-white'
                }`}
              >
                <Drumstick className="w-3 h-3 text-rose-300" />
                Non-Veg Menu
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-sm bg-[#140204] hover:bg-[#D4AF37] hover:text-[#5D0E11] text-[#D4AF37] border border-[#D4AF37]/50 transition-colors hidden md:flex items-center gap-1 text-xs font-bold uppercase cursor-pointer"
              title="Print Menu"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-[#140204] hover:bg-[#D4AF37] hover:text-[#5D0E11] text-[#FFFDD0] border border-[#D4AF37]/50 transition-colors cursor-pointer"
              aria-label="Close Menu Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Menu Sheet Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:overflow-visible">
          {/* Royal Menu Header */}
          <div className="text-center pb-6 border-b-2 border-[#D4AF37]/40">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-[#5D0E11] text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 border border-[#D4AF37]/40">
              <Sparkles className="w-3.5 h-3.5" />
              Customized Catering Services by Chef Haribansh Pandey
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#5D0E11] tracking-tight">
              {currentMenu.title}
            </h2>
            <p className="font-serif italic text-sm sm:text-base text-[#5D0E11] mt-1 max-w-xl mx-auto">
              {currentMenu.subtitle}
            </p>
            <p className="text-xs text-[#5D0E11]/80 mt-2">
              All dishes can be customized and curated to create your dream wedding or celebration menu.
            </p>
          </div>

          {/* Categorized Menu Dish List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentMenu.categories.map((category) => (
              <div
                key={category.id}
                className="bg-[#FDFBF7] p-5 rounded-sm border border-[#D4AF37]/40 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/30 mb-3">
                    <h4 className="font-cinzel text-base font-bold text-[#5D0E11] flex items-center gap-2">
                      <span className="w-2 h-2 rotate-45 bg-[#5D0E11]" />
                      {category.name}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5D0E11] bg-[#FAF7F2] px-2 py-0.5 rounded-sm border border-[#D4AF37]/40">
                      {category.items.length} Items
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs text-[#5D0E11]/80 italic mb-3">
                      {category.description}
                    </p>
                  )}

                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item.id} className="text-xs sm:text-sm text-[#5D0E11]">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-semibold text-[#5D0E11]">
                            {item.name}
                          </span>
                          {item.hindiName && (
                            <span className="text-[11px] text-[#5D0E11] font-semibold shrink-0 font-sans">
                              {item.hindiName}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[11px] text-[#4A3236] mt-0.5 leading-normal">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Official Terms & Conditions from Menu PDF */}
          <div className="mt-8 p-5 rounded-sm bg-[#FAF7F2] border border-[#D4AF37] text-left">
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#5D0E11] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
              Terms & Conditions (From Official Menu)
            </h4>
            <ul className="text-xs text-[#5D0E11]/90 space-y-1.5 list-disc list-inside">
              <li>20% will be charged if the function is less than 50 persons.</li>
              <li>Tentative booking is not confirmed unless advance is paid.</li>
              {isVeg ? (
                <>
                  <li><strong>Jain Preparations:</strong> Please notify us in advance regarding ingredients not required and total count of Jain guests.</li>
                  <li>Booking will be confirmed against <strong>50% advance payment</strong> and rest of the bills to be settled at the end of the party.</li>
                  <li>In the event of cancellation, advance amount will be refunded after deduction of service charges (10%).</li>
                </>
              ) : (
                <>
                  <li>Booking will be confirmed against <strong>60% advance payment</strong> and rest of the bills to be settled at the end of the party.</li>
                  <li>In the event of cancellation, advance amount will be refunded after deduction of service charges (20%).</li>
                </>
              )}
              <li>Plate count will determine the final number of persons.</li>
              <li>Damages to catering properties if any will be charged.</li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5D0E11]">
              <div>
                <strong>Contact Person:</strong> Chef Haribansh Kumar Pandey (S/O Shri Damodar Pandey)
              </div>
              <div>
                Sonar Dangal, Opposite of Durga Mandir, Chirkunda, Dhanbad (JH)
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-6 p-5 rounded-sm bg-[#5D0E11] text-[#FFFDD0] text-center border-2 border-[#D4AF37]">
            <h4 className="font-cinzel text-base font-bold text-[#D4AF37] mb-1">
              Ready to Customize Your Event Menu?
            </h4>
            <p className="text-xs text-[#FFFDD0]/80 max-w-lg mx-auto mb-3">
              Contact Chef Haribansh Pandey and the Jagdamba team at {businessData.phones.join(' or ')} to finalize your dishes and live counter requirements.
            </p>
            <a
              href={`https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(businessData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] transition-colors"
            >
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
