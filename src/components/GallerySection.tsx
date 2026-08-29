import React, { useState, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { galleryItems } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Eye, Sparkles, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'catering', label: 'CATERING' },
    { id: 'decoration', label: 'DECORATION' },
    { id: 'lighting', label: 'LIGHTING' },
    { id: 'events', label: 'EVENTS' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (itemIndex: number) => {
    setCurrentImageIndex(itemIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#5D0E11] relative overflow-hidden">
      {/* Ornamental Pattern */}
      <div className="absolute inset-0 ornamental-divider opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Visual Portfolio"
          title="OUR PREVIOUS WORKS"
          subtitle="Celebrations we've helped bring to life."
          theme="light"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#5D0E11] text-[#FFFDD0] border border-[#D4AF37] shadow-md scale-105'
                  : 'bg-[#FDFBF7] text-[#5D0E11] hover:text-[#5D0E11] hover:bg-[#F3EFE6] border border-[#D4AF37]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-sm overflow-hidden bg-[#5D0E11] border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[300px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140204] via-[#140204]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest bg-[#140204]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Quick View Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-sm bg-[#5D0E11] text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-5 transform transition-transform duration-300">
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#FFFDD0]/80 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider">
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Image Replacement Helper Note for Business */}
        <div className="mt-12 text-center text-xs text-[#5D0E11]/70 italic">
          * Photographs display representative wedding catering, stage lighting, and venue decoration setups by Jagdamba.
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </section>
  );
};
