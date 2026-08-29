import React, { useState, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { vegMenuData, nonVegMenuData } from '../data/menu';
import { MenuViewerModal } from './MenuViewerModal';
import {
  Leaf,
  Drumstick,
  Sparkles,
  Flame,
  Search,
  ChevronDown,
  ChevronRight,
  FileText,
  ChefHat,
  Eye,
} from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeMenuType, setActiveMenuType] = useState<'veg' | 'non-veg'>('veg');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'veg' | 'non-veg'>('veg');
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Record<string, boolean>>({});

  const currentMenuData = activeMenuType === 'veg' ? vegMenuData : nonVegMenuData;

  // Initialize selected category when changing menu type
  React.useEffect(() => {
    if (currentMenuData.categories.length > 0) {
      setSelectedCategoryId(currentMenuData.categories[0].id);
      // Expand first few for mobile
      const initialExpanded: Record<string, boolean> = {};
      currentMenuData.categories.forEach((cat, index) => {
        initialExpanded[cat.id] = index < 3; // First 3 expanded by default
      });
      setExpandedMobileCategories(initialExpanded);
    }
  }, [activeMenuType]);

  const toggleMobileCategory = (catId: string) => {
    setExpandedMobileCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  // Filtered categories and dishes based on search query
  const displayedCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentMenuData.categories;
    }
    const q = searchQuery.toLowerCase();
    return currentMenuData.categories
      .map((cat) => {
        const matchingItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            (item.hindiName && item.hindiName.includes(q)) ||
            (item.description && item.description.toLowerCase().includes(q))
        );
        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [currentMenuData, searchQuery]);

  const activeCategory = useMemo(() => {
    return (
      displayedCategories.find((c) => c.id === selectedCategoryId) ||
      displayedCategories[0] ||
      currentMenuData.categories[0]
    );
  }, [displayedCategories, selectedCategoryId, currentMenuData]);

  const handleOpenFullMenu = (type: 'veg' | 'non-veg') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#140204] text-[#FFFDD0] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#5D0E11]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dark-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Banqueting"
          title="OUR MENU"
          subtitle="Curated menus for unforgettable celebrations."
          theme="dark"
        />

        {/* Major VEG / NON-VEG Selector Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="inline-flex p-1 rounded-sm bg-[#140204] border-2 border-[#D4AF37]/60 shadow-2xl">
            <button
              id="veg-menu-tab-btn"
              onClick={() => {
                setActiveMenuType('veg');
                setSearchQuery('');
              }}
              className={`px-6 sm:px-8 py-2.5 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeMenuType === 'veg'
                  ? 'bg-emerald-900/90 text-[#FFFDD0] shadow-lg border border-emerald-500/70'
                  : 'text-[#FFFDD0]/70 hover:text-[#FFFDD0]'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-xs border-2 border-emerald-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              VEG MENU
            </button>

            <button
              id="non-veg-menu-tab-btn"
              onClick={() => {
                setActiveMenuType('non-veg');
                setSearchQuery('');
              }}
              className={`px-6 sm:px-8 py-2.5 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeMenuType === 'non-veg'
                  ? 'bg-[#5D0E11] text-[#FFFDD0] shadow-lg border border-[#D4AF37]/70'
                  : 'text-[#FFFDD0]/70 hover:text-[#FFFDD0]'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-xs border-2 border-rose-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              </div>
              NON-VEG MENU
            </button>
          </div>

          {/* Quick PDF/Full Menu View Modal Triggers */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleOpenFullMenu('veg')}
              className="px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider bg-[#5D0E11] hover:bg-[#D4AF37] hover:text-[#5D0E11] text-[#FFFDD0] border border-[#D4AF37]/50 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View Veg Brochure</span>
            </button>
            <button
              onClick={() => handleOpenFullMenu('non-veg')}
              className="px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider bg-[#5D0E11] hover:bg-[#D4AF37] hover:text-[#5D0E11] text-[#FFFDD0] border border-[#D4AF37]/50 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View Non-Veg Brochure</span>
            </button>
          </div>
        </div>

        {/* Search Input Filter */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search dish in ${activeMenuType === 'veg' ? 'Veg' : 'Non-Veg'} menu (e.g. Paneer, Kebab, Biryani)...`}
            className="w-full pl-11 pr-4 py-2.5 rounded-sm bg-[#140204] border border-[#D4AF37]/50 text-sm text-[#FFFDD0] placeholder-[#FFFDD0]/50 focus:outline-none focus:border-[#D4AF37] transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#D4AF37] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Desktop Layout: Category Sidebar on Left + Dish Grid on Right */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Category Sidebar */}
          <div className="col-span-4 bg-[#5D0E11] rounded-sm p-4 border border-[#D4AF37]/40 shadow-xl sticky top-28 max-h-[75vh] overflow-y-auto space-y-1">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 mb-2 flex items-center justify-between">
              <span>Categories</span>
              <span>{displayedCategories.length}</span>
            </div>

            {displayedCategories.map((category) => {
              const isSelected = category.id === activeCategory?.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-sm text-sm font-medium transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#140204] text-[#FFFDD0] border-l-4 border-[#D4AF37] shadow-md'
                      : 'text-[#FFFDD0]/80 hover:bg-[#140204]/60 hover:text-[#FFFDD0]'
                  }`}
                >
                  <span className="truncate pr-2 font-cinzel text-xs font-bold tracking-wide">
                    {category.name}
                  </span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-sm font-sans font-bold shrink-0 ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#5D0E11]'
                        : 'bg-[#140204] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#5D0E11]'
                    }`}
                  >
                    {category.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dish Content Panel on Right */}
          <div className="col-span-8 bg-[#5D0E11] rounded-sm p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl min-h-[500px]">
            {activeCategory ? (
              <div>
                {/* Header of Active Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4AF37]/30 mb-6 gap-2">
                  <div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFDD0]">
                      {activeCategory.name}
                    </h3>
                    {activeCategory.description && (
                      <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/80 mt-1">
                        {activeCategory.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] bg-[#140204] px-3 py-1.5 rounded-sm border border-[#D4AF37]/50 shrink-0 self-start sm:self-auto uppercase tracking-wider">
                    {activeCategory.items.length} Curated Dishes
                  </span>
                </div>

                {/* Dish Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.items.map((dish) => (
                    <div
                      key={dish.id}
                      className="p-4 rounded-sm bg-[#140204]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all hover:bg-[#140204] group flex flex-col justify-between"
                    >
                      <div>
                        {/* Title and Badges */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors leading-snug">
                            {dish.name}
                          </h4>
                          <div className="flex items-center gap-1 shrink-0">
                            {dish.isChefSpecial && (
                              <span
                                title="Chef Haribansh Pandey Special"
                                className="p-1 rounded-sm bg-[#5D0E11] text-[#D4AF37] border border-[#D4AF37]/40"
                              >
                                <ChefHat className="w-3.5 h-3.5" />
                              </span>
                            )}
                            {dish.isLiveCounter && (
                              <span
                                title="Live Counter Preparation"
                                className="p-1 rounded-sm bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40"
                              >
                                <Flame className="w-3.5 h-3.5" />
                              </span>
                            )}
                            {dish.isSpicy && (
                              <span
                                title="Spicy Delicacy"
                                className="px-1.5 py-0.5 rounded-sm text-[9px] font-bold bg-rose-900/60 text-rose-200 border border-rose-600/40"
                              >
                                SPICY
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Hindi Name */}
                        {dish.hindiName && (
                          <div className="text-xs text-[#D4AF37] font-sans font-medium mb-1.5">
                            {dish.hindiName}
                          </div>
                        )}

                        {/* Description */}
                        {dish.description && (
                          <p className="font-sans text-xs text-[#FFFDD0]/80 leading-relaxed">
                            {dish.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Tag Strip */}
                      <div className="mt-3 pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-[#FFFDD0]/60">
                        <span>Bespoke Catering Item</span>
                        {dish.isLiveCounter && (
                          <span className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Live Counter
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-[#FFFDD0]/70">
                No items found matching your search.
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout: Responsive Accordion List */}
        <div className="lg:hidden space-y-4">
          {displayedCategories.map((category) => {
            const isExpanded = expandedMobileCategories[category.id];
            return (
              <div
                key={category.id}
                className="rounded-sm bg-[#5D0E11] border border-[#D4AF37]/40 overflow-hidden shadow-lg"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleMobileCategory(category.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-[#5D0E11] hover:bg-[#4A0B0E] transition-colors cursor-pointer"
                >
                  <div className="pr-2">
                    <h4 className="font-cinzel text-base font-bold text-[#FFFDD0]">
                      {category.name}
                    </h4>
                    {category.description && (
                      <p className="text-xs text-[#FFFDD0]/80 mt-0.5 line-clamp-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-[#D4AF37] bg-[#140204] px-2 py-0.5 rounded-sm border border-[#D4AF37]/40">
                      {category.items.length}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[#FFFDD0]/70" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="p-4 space-y-3 bg-[#140204]">
                    {category.items.map((dish) => (
                      <div
                        key={dish.id}
                        className="p-3 rounded-sm bg-[#5D0E11] border border-[#D4AF37]/30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-cinzel text-sm font-bold text-[#FFFDD0]">
                            {dish.name}
                          </h5>
                          {dish.isChefSpecial && (
                            <span className="text-[10px] font-bold text-[#D4AF37] bg-[#140204] px-1.5 py-0.5 rounded-sm border border-[#D4AF37]/40">
                              Chef Pick
                            </span>
                          )}
                        </div>
                        {dish.hindiName && (
                          <div className="text-xs text-[#D4AF37] font-medium">
                            {dish.hindiName}
                          </div>
                        )}
                        {dish.description && (
                          <p className="text-xs text-[#FFFDD0]/80 mt-1 leading-normal">
                            {dish.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Menu Customization Notice & PDF Openers */}
        <div className="mt-14 p-6 rounded-sm bg-[#5D0E11] border-2 border-[#D4AF37] text-center max-w-3xl mx-auto shadow-2xl">
          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFFDD0] mb-2">
            Custom Banquet Menus Curated on Demand
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/85 leading-relaxed mb-5">
            We adapt every dish to your community traditions, spice preferences, and guest profiles. You can combine courses across North Indian, Chinese, South Indian, and Continental menus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleOpenFullMenu('veg')}
              className="px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#5D0E11] bg-[#D4AF37] hover:bg-[#FFFDD0] transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Full Veg Menu Brochure
            </button>
            <button
              onClick={() => handleOpenFullMenu('non-veg')}
              className="px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#FFFDD0] bg-[#140204] hover:bg-[#D4AF37] hover:text-[#5D0E11] border border-[#D4AF37] transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              View Full Non-Veg Menu Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Full Menu Viewer Brochure Modal */}
      <MenuViewerModal
        isOpen={modalOpen}
        menuType={modalType}
        onClose={() => setModalOpen(false)}
        onSwitchType={(type) => setModalType(type)}
      />
    </section>
  );
};
