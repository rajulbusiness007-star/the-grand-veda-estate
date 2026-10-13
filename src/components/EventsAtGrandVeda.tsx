import React, { useState } from 'react';
import { Heart, Sparkles, Wine, Users, Cake, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface EventsAtGrandVedaProps {
  onPlanCelebration: (eventType?: string) => void;
}

export const EventsAtGrandVeda: React.FC<EventsAtGrandVedaProps> = ({ onPlanCelebration }) => {
  const [activeCategory, setActiveCategory] = useState<'weddings' | 'engagements' | 'family' | 'birthdays' | 'occasions'>('weddings');

  const celebrationDetails = {
    weddings: {
      title: "Intimate Royal Weddings & Mandap Under the Stars",
      tagline: "Vows whispered amid ancient trees, soft flute melodies, and hand-embroidered floral canopies.",
      capacity: "50 to 500 Guests",
      features: [
        "Vedic mandap facing mist-kissed hillside ridges",
        "Dedicated bridal villa with personal styling suites",
        "Curated royal satvik & multi-cuisine live banqueting",
        "Custom ambient floral architecture & night fairy illumination"
      ],
      badge: "Most Cherished Experience",
      eventKey: "Intimate Wedding"
    },
    engagements: {
      title: "Golden Hour Ring Ceremonies & Champagne Soirees",
      tagline: "Celebrate your beginning as the sun sets over the Nashik valley terrace.",
      capacity: "30 to 250 Guests",
      features: [
        "Private sunset terrace with brass lanterns and candlelit pergolas",
        "Artisanal botanical mocktails & signature champagne reception",
        "Acoustic harp, violin, and live sufi-fusion melodies",
        "Customized photo backdrops and personalized welcome boards"
      ],
      badge: "Sunset Special",
      eventKey: "Engagement Ceremony"
    },
    family: {
      title: "Multi-Generational Family Reunions & Milestones",
      tagline: "Where grandparents, cousins, and little ones gather under one warm royal roof.",
      capacity: "20 to 150 Guests",
      features: [
        "Full estate wing buyouts with private courtyard gathering lawns",
        "Bonfire evenings with live acoustic folk music & stargazing",
        "All-day grazing tables and traditional grandmother recipe menus",
        "Leisure activities: pottery workshops, estate trails, and pool lounging"
      ],
      badge: "Family Favorite",
      eventKey: "Family Gathering"
    },
    birthdays: {
      title: "Curated Milestone Birthday Galas & Theme Nights",
      tagline: "From 1st birthdays to regal 50th celebrations, crafted with joy and distinction.",
      capacity: "25 to 200 Guests",
      features: [
        "Theme styling: Royal Bohemian, Candlelit Vintage, or Tropical Cabana",
        "Artisan multi-tier bakery cakes by master pastry chefs",
        "Live gourmet barbecue stations and wood-fired oven delights",
        "Interactive memory projection walls and keepsake gifts"
      ],
      badge: "Celebration Special",
      eventKey: "Birthday Celebration"
    },
    occasions: {
      title: "Silver Anniversaries, Retirements & Bespoke Retreats",
      tagline: "Honor life’s most profound milestones with timeless heritage grace.",
      capacity: "20 to 300 Guests",
      features: [
        "Bespoke dinner banquet setups with silver cutlery and crystal flutes",
        "Personalized memory speech podium and video tribute screening",
        "Ayurvedic spa relaxation packages for milestone honorees",
        "Seamless VIP chauffeur transfers from Mumbai & Pune"
      ],
      badge: "Signature Occasions",
      eventKey: "Special Milestone Occasion"
    }
  };

  const currentDetails = celebrationDetails[activeCategory];

  return (
    <section id="events-heritage" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative botanical corners (Birla Stays template flair) */}
      <div className="absolute top-4 left-4 w-28 h-28 opacity-25 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#173D32" strokeWidth="1.5">
          <path d="M10,90 Q30,60 50,40 T90,10" />
          <path d="M30,70 Q40,65 45,55" />
          <path d="M50,50 Q60,45 65,35" />
          <circle cx="45" cy="55" r="3" fill="#173D32" />
          <circle cx="65" cy="35" r="3" fill="#173D32" />
          <circle cx="85" cy="15" r="3" fill="#C6A15B" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-28 h-28 opacity-25 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#173D32" strokeWidth="1.5">
          <path d="M10,90 Q30,60 50,40 T90,10" />
          <path d="M30,70 Q40,65 45,55" />
          <path d="M50,50 Q60,45 65,35" />
          <circle cx="45" cy="55" r="3" fill="#173D32" />
          <circle cx="65" cy="35" r="3" fill="#173D32" />
          <circle cx="85" cy="15" r="3" fill="#C6A15B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block with Luxury Crest */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-10 bg-[#C6A15B]"></span>
            <span className="text-xs tracking-[0.25em] uppercase text-[#173D32] font-semibold">Events At</span>
            <span className="h-[1px] w-10 bg-[#C6A15B]"></span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-[#173D32] font-normal tracking-wide uppercase mt-1 mb-2">
            The Grand Veda Estate
          </h2>
          
          <p className="font-script text-3xl sm:text-4xl text-[#C6A15B] font-normal my-2">
            Celebrate. Gather. Stay.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-4">
            <span className="text-xs uppercase tracking-widest text-[#666666] font-medium">
              A Beautiful Setting For
            </span>
          </div>
          
          <p className="font-serif italic text-2xl sm:text-3xl text-[#173D32] mt-1">
            Unforgettable Moments
          </p>
        </div>

        {/* 3 Pillar Photo Cards (Directly replicating the Birla Stays template) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Comfort */}
          <div className="group rounded-2xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#C6A15B]/30 hover:border-[#C6A15B]">
            <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-[#0E2921]">
              <img 
                src="/assets/suite.jpg" 
                alt="Heritage bedroom comfort"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#173D32] tracking-wider uppercase">
                Royal Comfort
              </div>
            </div>
            <div className="text-center px-4 py-2">
              <h3 className="text-lg font-serif tracking-widest text-[#173D32] uppercase font-semibold">
                Comfort
              </h3>
              <p className="text-sm text-[#777777] italic font-serif mt-1">
                that feels like home
              </p>
            </div>
          </div>

          {/* Card 2: Spaces */}
          <div className="group rounded-2xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#C6A15B]/30 hover:border-[#C6A15B]">
            <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-[#0E2921]">
              <img 
                src="/assets/estate-hero.jpg" 
                alt="Open terrace and connection spaces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#173D32] tracking-wider uppercase">
                Hillside Verandas
              </div>
            </div>
            <div className="text-center px-4 py-2">
              <h3 className="text-lg font-serif tracking-widest text-[#173D32] uppercase font-semibold">
                Spaces
              </h3>
              <p className="text-sm text-[#777777] italic font-serif mt-1">
                to relax & connect
              </p>
            </div>
          </div>

          {/* Card 3: Ambience */}
          <div className="group rounded-2xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#C6A15B]/30 hover:border-[#C6A15B]">
            <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-[#0E2921]">
              <img 
                src="/assets/banquet.jpg" 
                alt="Royal dining hall and banquet ambience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#173D32] tracking-wider uppercase">
                Chandelier Diners
              </div>
            </div>
            <div className="text-center px-4 py-2">
              <h3 className="text-lg font-serif tracking-widest text-[#173D32] uppercase font-semibold">
                Ambience
              </h3>
              <p className="text-sm text-[#777777] italic font-serif mt-1">
                that elevates every occasion
              </p>
            </div>
          </div>
        </div>

        {/* 'PERFECT FOR' Interactive Selection Bar */}
        <div className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/30 shadow-lg relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-[#C6A15B]"></span>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#173D32] font-bold">
                Perfect For
              </h3>
              <span className="w-12 h-[1px] bg-[#C6A15B]"></span>
            </div>
            <p className="text-sm text-[#777777] mt-1 font-serif italic">
              Select an occasion to explore our customized celebration arrangements
            </p>
          </div>

          {/* 5 Icons Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('weddings')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border ${
                activeCategory === 'weddings'
                  ? 'bg-[#173D32] text-[#FAF7F2] border-[#173D32] shadow-md transform -translate-y-1'
                  : 'bg-white text-[#222222] border-[#E8DFD3] hover:border-[#C6A15B] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                activeCategory === 'weddings' ? 'bg-[#C6A15B] text-white' : 'bg-[#F2ECE1] text-[#173D32]'
              }`}>
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-center">Intimate Weddings</span>
            </button>

            <button
              onClick={() => setActiveCategory('engagements')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border ${
                activeCategory === 'engagements'
                  ? 'bg-[#173D32] text-[#FAF7F2] border-[#173D32] shadow-md transform -translate-y-1'
                  : 'bg-white text-[#222222] border-[#E8DFD3] hover:border-[#C6A15B] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                activeCategory === 'engagements' ? 'bg-[#C6A15B] text-white' : 'bg-[#F2ECE1] text-[#173D32]'
              }`}>
                <Wine className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-center">Engagements</span>
            </button>

            <button
              onClick={() => setActiveCategory('family')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border ${
                activeCategory === 'family'
                  ? 'bg-[#173D32] text-[#FAF7F2] border-[#173D32] shadow-md transform -translate-y-1'
                  : 'bg-white text-[#222222] border-[#E8DFD3] hover:border-[#C6A15B] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                activeCategory === 'family' ? 'bg-[#C6A15B] text-white' : 'bg-[#F2ECE1] text-[#173D32]'
              }`}>
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-center">Family Gatherings</span>
            </button>

            <button
              onClick={() => setActiveCategory('birthdays')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border ${
                activeCategory === 'birthdays'
                  ? 'bg-[#173D32] text-[#FAF7F2] border-[#173D32] shadow-md transform -translate-y-1'
                  : 'bg-white text-[#222222] border-[#E8DFD3] hover:border-[#C6A15B] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                activeCategory === 'birthdays' ? 'bg-[#C6A15B] text-white' : 'bg-[#F2ECE1] text-[#173D32]'
              }`}>
                <Cake className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-center">Birthday Celebrations</span>
            </button>

            <button
              onClick={() => setActiveCategory('occasions')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border ${
                activeCategory === 'occasions'
                  ? 'bg-[#173D32] text-[#FAF7F2] border-[#173D32] shadow-md transform -translate-y-1'
                  : 'bg-white text-[#222222] border-[#E8DFD3] hover:border-[#C6A15B] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                activeCategory === 'occasions' ? 'bg-[#C6A15B] text-white' : 'bg-[#F2ECE1] text-[#173D32]'
              }`}>
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-center">Special Occasions</span>
            </button>
          </div>

          {/* Active Category Display Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-[#173D32]/10 text-[#173D32] rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                {currentDetails.badge}
              </div>
              <h4 className="text-2xl font-serif text-[#173D32] font-semibold">
                {currentDetails.title}
              </h4>
              <p className="text-[#666666] text-sm mt-1 mb-4 italic font-serif">
                "{currentDetails.tagline}"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentDetails.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end justify-center w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-[#EFE8DD] pt-4 md:pt-0 md:pl-8">
              <div className="text-center md:text-right mb-4">
                <span className="text-xs text-[#888888] uppercase tracking-wider block font-medium">Guest Capacity</span>
                <span className="text-lg font-serif font-bold text-[#173D32]">{currentDetails.capacity}</span>
              </div>
              <button
                onClick={() => onPlanCelebration(currentDetails.eventKey)}
                className="w-full sm:w-auto px-6 py-3 bg-[#173D32] text-white hover:bg-[#0E2921] rounded-xl text-xs font-semibold uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Reserve Dates</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            </div>
          </div>

          {/* Bottom Slogan Bar (Direct from Template) */}
          <div className="mt-8 pt-6 border-t border-[#C6A15B]/30 text-center">
            <div className="inline-flex items-center space-x-4">
              <span className="text-[#C6A15B]">✦</span>
              <span className="text-sm font-serif tracking-[0.25em] uppercase text-[#173D32] font-semibold">
                One Stay. Endless Memories.
              </span>
              <span className="text-[#C6A15B]">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
