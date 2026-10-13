import React from 'react';
import { AMENITIES_LIST } from '../data/hotelData';
import {
  Flower2,
  Building,
  BedDouble,
  UtensilsCrossed,
  Car,
  Sparkles,
  Zap,
  Accessibility,
  Music,
  CheckCircle,
} from 'lucide-react';

export const AmenitiesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-[#C6A15B]" />;
      case 'Building':
        return <Building className="w-6 h-6 text-[#C6A15B]" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 text-[#C6A15B]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#C6A15B]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#C6A15B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C6A15B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#C6A15B]" />;
      case 'Accessibility':
        return <Accessibility className="w-6 h-6 text-[#C6A15B]" />;
      case 'Music':
        return <Music className="w-6 h-6 text-[#C6A15B]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#C6A15B]" />;
    }
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-white border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Property Infrastructure</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            Amenities & Celebratory Facilities
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Every inch of our estate is designed to ensure seamless event logistics, uncompromising guest comfort, and unforgettable hospitality for all generations.
          </p>
        </div>

        {/* 9 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITIES_LIST.map((item) => (
            <div
              key={item.title}
              className="bg-[#FAF7F2] rounded-xl p-7 border border-[#C6A15B]/25 hover:border-[#C6A15B] transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-[#C6A15B]/30 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#173D32] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#173D32]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Facility on Grounds</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
