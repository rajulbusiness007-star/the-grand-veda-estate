import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Heart, Sparkles, Compass, Users, CheckCircle, Award } from 'lucide-react';

interface AboutSectionProps {
  onPlanCelebration: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onPlanCelebration }) => {
  const occasionPillars = [
    {
      title: "Intimate & Grand Weddings",
      desc: "Sacred mandaps under starry canopies and baarat processions surrounded by natural hills.",
      tag: "Varmala & Sangeet"
    },
    {
      title: "Engagements & Rings",
      desc: "Warm ceremonial plazas and illuminated poolside decks for your family's beginning.",
      tag: "Roka & Cocktails"
    },
    {
      title: "Family Gatherings & Reunions",
      desc: "Spacious multi-bedroom suites and private lawns where generations unite in comfort.",
      tag: "Family Retreats"
    },
    {
      title: "Milestone Birthdays",
      desc: "Vibrant garden pavilions with customized themes, live grills, and dancefloor energy.",
      tag: "Jubilee Milestones"
    },
    {
      title: "Special Occasions & Dinners",
      desc: "Romantic candlelit gazebos, silver jubilee celebrations, and bespoke culinary feasts.",
      tag: "Anniversaries"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Subtle Watermark/Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#173D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebrate · Gather · Stay</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            A Beautiful Setting for Unforgettable Moments
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Nestled in the tranquil valleys of Nashik, {HOTEL_CONFIG.name} brings together heritage architectural grandeur, 25,000 square feet of verdant celebration lawns, and 48 palatial suites. Designed to turn vows into eternal memories and stays into treasured family chapters.
          </p>
        </div>

        {/* The 3 Core Pillars: Comfort · Spaces · Ambience (Directly inspired by reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Comfort */}
          <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/20 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="w-full h-56 rounded-lg overflow-hidden mb-6 bg-[#FAF7F2] relative">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Comfortable heritage rooms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#173D32]/85 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded backdrop-blur-sm">
                  Sanctuary of Rest
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#173D32] mb-2 tracking-tight">
                Comfort
              </h3>
              <p className="text-sm font-medium text-[#C6A15B] mb-3">
                That feels like home, elevated by royal service
              </p>
              <p className="text-sm text-[#222222]/75 leading-relaxed">
                Hand-carved wooden headboards, Egyptian cotton linens, marble soaking tubs, and personalized 24/7 hospitality so your family rests in absolute serenity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-[#173D32] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C6A15B]" />
              <span>48 Air-Conditioned Rooms & Suites</span>
            </div>
          </div>

          {/* Pillar 2: Spaces */}
          <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/20 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="w-full h-56 rounded-lg overflow-hidden mb-6 bg-[#FAF7F2] relative">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Expansive celebration spaces"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#173D32]/85 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded backdrop-blur-sm">
                  Grand Grounds
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#173D32] mb-2 tracking-tight">
                Spaces
              </h3>
              <p className="text-sm font-medium text-[#C6A15B] mb-3">
                To relax, celebrate & connect seamlessly
              </p>
              <p className="text-sm text-[#222222]/75 leading-relaxed">
                From our 25,000 sq.ft natural grass marriage lawn to our 8,500 sq.ft pillarless AC crystal banquet hall, each venue is engineered for majestic guest circulation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-[#173D32] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C6A15B]" />
              <span>Indoor & Outdoor Options (Up to 1,500 Guests)</span>
            </div>
          </div>

          {/* Pillar 3: Ambience */}
          <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/20 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="w-full h-56 rounded-lg overflow-hidden mb-6 bg-[#FAF7F2] relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Candlelit and floral ambience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#173D32]/85 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded backdrop-blur-sm">
                  Twilight Glow
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#173D32] mb-2 tracking-tight">
                Ambience
              </h3>
              <p className="text-sm font-medium text-[#C6A15B] mb-3">
                That elevates every ceremony into royalty
              </p>
              <p className="text-sm text-[#222222]/75 leading-relaxed">
                Romantic hillside twilight, thousands of woven fairy lights, fragrant jasmine blooms, crystal chandeliers, and bespoke live acoustic melodies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-[#173D32] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C6A15B]" />
              <span>Master Floral & Lighting Direction</span>
            </div>
          </div>
        </div>

        {/* Occasions Horizontal Strip: "PERFECT FOR" */}
        <div className="bg-[#173D32] text-white rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E6C280] font-semibold">
              Versatile Celebrations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Curated for Every Milestone in Life
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Whether you are planning an intimate 30-guest anniversary or an extravagant 1,200-guest baarat wedding, our dedicated team brings precision to every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {occasionPillars.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#E6C280] uppercase tracking-wide block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-serif font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner Quote */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-sm font-serif italic text-[#E6C280] block">
                “One Stay. Endless Memories.”
              </span>
              <span className="text-xs text-neutral-400">
                Heritage Hospitality with Modern 5-Star Amenities
              </span>
            </div>

            <button
              onClick={onPlanCelebration}
              className="px-6 py-2.5 rounded-md text-xs sm:text-sm font-semibold text-[#173D32] bg-[#FAF7F2] hover:bg-white transition-all shadow whitespace-nowrap"
            >
              Discuss Your Event With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
