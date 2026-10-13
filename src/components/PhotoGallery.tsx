import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { Maximize2, Sparkles, Filter } from 'lucide-react';

interface PhotoGalleryProps {
  onOpenLightbox: (image: string, title: string, subtitle?: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Weddings',
    'Architecture',
    'Rooms & Suites',
    'Dinners & Anniversaries',
    'Banquets',
    'Birthdays',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Splendor</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            Property & Celebration Photo Gallery
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Glimpses of real weddings, illuminated stages, serene heritage corridors, candlelit courtyards, and joyful celebrations hosted at our sanctuary.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#173D32] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#222222] hover:bg-neutral-100 border border-[#C6A15B]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.image, item.title, item.subtitle)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-[#C6A15B]/20 shadow-xs cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#173D32]/85 text-white backdrop-blur-sm border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Magnify Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Captions */}
              <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform group-hover:-translate-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
