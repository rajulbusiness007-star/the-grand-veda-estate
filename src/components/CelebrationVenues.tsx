import React, { useState } from 'react';
import { CELEBRATION_VENUES, VenueItem } from '../data/hotelData';
import { 
  Users, 
  Maximize2, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  Layers, 
  Crown, 
  Leaf, 
  Flower2, 
  Grid3X3,
  Flame,
  SunMedium
} from 'lucide-react';

interface CelebrationVenuesProps {
  onSelectImageForLightbox: (imageUrl: string, title: string, caption?: string) => void;
  onOpenCalculator: () => void;
  onOpenEnquiry: (preferredVenue?: string) => void;
}

export const CelebrationVenues: React.FC<CelebrationVenuesProps> = ({
  onSelectImageForLightbox,
  onOpenCalculator,
  onOpenEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVenueModal, setSelectedVenueModal] = useState<VenueItem | null>(null);
  const [selectedSeatingPlan, setSelectedSeatingPlan] = useState<'round-table' | 'royal-theater' | 'diwan-cabana'>('round-table');
  const [activeMandapTheme, setActiveMandapTheme] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Grounds (4 Venues)' },
    { id: 'weddings', label: 'Weddings & Lawns' },
    { id: 'banquet', label: 'AC Crystal Banquet' },
    { id: 'birthdays', label: 'Poolside & Decks' },
    { id: 'anniversaries', label: 'Sunset Gazebo' },
  ];

  const mandapThemes = [
    {
      title: "Royal Vedic Sandstone Mandap",
      desc: "Hand-strung marigold & mogra tassels, brass antique thalis, and sacred havan kund facing mountain ridges.",
      image: "/assets/wedding.jpg",
      bestFor: "Traditional Vedic Pheras & Sangeet"
    },
    {
      title: "Crystal Starlight Glasshouse Mandap",
      desc: "Transparent acrylic pillars, cascading white wisteria, crystal chandeliers, and glowing fairy light ceiling.",
      image: "/assets/banquet.jpg",
      bestFor: "Sunset Vows & Evening Cocktails"
    },
    {
      title: "Palatial Hillside Pergola Mandap",
      desc: "Grand palatial arches, natural olive sprigs, starlit garden terrace, and royal velvet diwans overlooking the valley.",
      image: "/assets/estate-hero.jpg",
      bestFor: "Intimate Engagements & Royal Receptions"
    }
  ];

  const seatingPlans = {
    'round-table': {
      title: "Royal Round Table Banquet Layout",
      description: "Elegant 8-seater circular dining tables with gold Tiffany chairs, floral centerpieces, and clear aisles towards the elevated central mandap stage.",
      idealCapacity: "Up to 800 Guests Seated comfortably with dining service",
      features: ["VIP Family Front Row Seating", "360° Unobstructed Mandap Sightlines", "Dedicated Aisle for Grand Baarat Entry"]
    },
    'royal-theater': {
      title: "Tiered Amphitheater Ceremony Seating",
      description: "Concentric crescent curved seating rows facing the elevated mandap, maximizing unobstructed ceremony viewing for large wedding parties.",
      idealCapacity: "Up to 1,500 Guests Ceremony capacity",
      features: ["Stepped Lawn Elevation", "Comfortable Cushioned Banquet Seating", "Wide Processional Aisle for Floral Chadar"]
    },
    'diwan-cabana': {
      title: "Bohemian Diwan & Lounge Cabana Setup",
      description: "Low-seating silk diwans, bolster pillows, Persian kilim carpets, and brass Moroccan lanterns for energetic Mehendi and Sangeet nights.",
      idealCapacity: "Up to 500 Guests Informal celebration capacity",
      features: ["Relaxed Interactive Atmosphere", "Direct Access to Live Chaat Stations", "Integrated Dance Floor & DJ Stage Space"]
    }
  };

  const filteredVenues =
    activeCategory === 'all'
      ? CELEBRATION_VENUES
      : CELEBRATION_VENUES.filter((v) => v.category === activeCategory);

  return (
    <section id="celebrations" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#C6A15B]/25">
      {/* Decorative botanical corners */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20 pointer-events-none">
        <Leaf className="w-full h-full text-[#173D32]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#173D32] font-semibold">
              The Grand Grounds & Marriage Lawns
            </span>
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-[#173D32] tracking-tight mb-2">
            Palatial Venues & Marriage Lawns
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#C6A15B] font-normal my-2">
            Where Forever Begins Under the Starlit Sky
          </p>

          <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl mx-auto mt-3">
            From our illuminated 25,000 sq.ft marriage lawn overlooking hillside horizons to our crystal-chandeliered ballroom, explore the ideal setting for your once-in-a-lifetime occasion.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#173D32] text-white shadow-md'
                  : 'bg-white text-[#444444] hover:bg-[#FAF7F2] border border-[#C6A15B]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {filteredVenues.map((venue) => {
            const isGrandLawn = venue.id.includes('lawn') || venue.id.includes('shahi');
            const capacityPercent = isGrandLawn ? 100 : venue.id.includes('banquet') ? 60 : 35;

            return (
              <div
                key={venue.id}
                className="bg-white rounded-2xl border border-[#C6A15B]/35 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Lightbox */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E2921]">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#173D32]/90 text-[#E6C280] backdrop-blur-md border border-white/10 shadow-md">
                      {venue.type}
                    </span>
                    <button
                      onClick={() => onSelectImageForLightbox(venue.image, venue.name, venue.tagline)}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-transform hover:scale-110"
                      title="Open Fullscreen Gallery Lightbox"
                      aria-label="View photo in lightbox"
                    >
                      <Maximize2 className="w-4 h-4 text-[#C6A15B]" />
                    </button>
                  </div>

                  {/* Bottom Overlay Title & Space */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center gap-3 text-xs font-medium text-[#E6C280] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>{venue.capacityRange}</span>
                      </span>
                      <span>•</span>
                      <span>{venue.area}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                      {venue.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Guest Capacity Meter */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-script text-2xl text-[#C6A15B] mb-2">
                      “{venue.tagline}”
                    </p>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 font-light">
                      {venue.description}
                    </p>

                    {/* Guest Capacity Comfort Meter */}
                    <div className="mb-6 p-3.5 bg-[#FCFAF6] rounded-xl border border-[#EFE8DD]">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-[#173D32] flex items-center space-x-1.5">
                          <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>Guest Comfort Capacity Meter:</span>
                        </span>
                        <span className="font-serif font-bold text-[#C6A15B]">
                          {venue.capacityRange}
                        </span>
                      </div>
                      
                      {/* Visual Meter Bar */}
                      <div className="w-full bg-[#E8E0D2] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#173D32] to-[#C6A15B] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${capacityPercent}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-[#888888] mt-1 block">
                        Spacious lawn spacing adhering to royal wedding banquet standards
                      </span>
                    </div>

                    {/* Ideal Ceremonies Badges */}
                    <div className="mb-5">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#173D32] block mb-2">
                        Ceremonies Handled:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {venue.bestFor.map((item) => (
                          <span
                            key={item}
                            className="text-xs text-[#173D32] bg-[#FAF7F2] border border-[#C6A15B]/30 px-2.5 py-1 rounded-lg font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Specs */}
                  <div className="pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-[#888888] uppercase tracking-wider block font-medium">
                        Celebration Package
                      </span>
                      <span className="text-sm font-serif font-bold text-[#173D32]">
                        {venue.packageStartingAt || "Customized on Request"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => setSelectedVenueModal(venue)}
                        className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold rounded-xl border border-[#C6A15B] text-[#173D32] hover:bg-[#FAF7F2] transition-colors whitespace-nowrap"
                      >
                        Specs & Layout
                      </button>
                      <button
                        onClick={() => onOpenEnquiry(venue.name)}
                        className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-[#173D32] hover:bg-[#0E2921] text-white transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center justify-center gap-1.5"
                      >
                        <span>Check Dates</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Seating Layout Diagrams Showcase */}
        <div className="bg-white rounded-3xl border border-[#C6A15B]/35 shadow-xl p-6 sm:p-10 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
              Floorplan & Spatial Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#173D32] font-semibold">
              3D Seating Diagrams & Banquet Flow
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light mt-1">
              Choose your celebration configuration to view how our lawn and hall layouts ensure flawless guest movement.
            </p>
          </div>

          {/* Seating Plan Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setSelectedSeatingPlan('round-table')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedSeatingPlan === 'round-table'
                  ? 'bg-[#173D32] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-[#444444] border border-[#C6A15B]/30 hover:bg-[#F2ECE1]'
              }`}
            >
              Round Table Banquet (800 Guests)
            </button>
            <button
              onClick={() => setSelectedSeatingPlan('royal-theater')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedSeatingPlan === 'royal-theater'
                  ? 'bg-[#173D32] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-[#444444] border border-[#C6A15B]/30 hover:bg-[#F2ECE1]'
              }`}
            >
              Royal Amphitheater (1,500 Guests)
            </button>
            <button
              onClick={() => setSelectedSeatingPlan('diwan-cabana')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedSeatingPlan === 'diwan-cabana'
                  ? 'bg-[#173D32] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-[#444444] border border-[#C6A15B]/30 hover:bg-[#F2ECE1]'
              }`}
            >
              Bohemian Diwan Cabanas (500 Guests)
            </button>
          </div>

          {/* Active Seating Plan Content */}
          <div className="p-6 bg-[#FCFAF6] rounded-2xl border border-[#C6A15B]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h4 className="font-serif font-bold text-xl text-[#173D32] mb-1">
                {seatingPlans[selectedSeatingPlan].title}
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {seatingPlans[selectedSeatingPlan].description}
              </p>
              
              <div className="space-y-1.5">
                {seatingPlans[selectedSeatingPlan].features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#333333]">
                    <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 text-center md:text-right p-4 bg-white rounded-xl border border-[#E8DFD3] w-full md:w-auto">
              <span className="text-[10px] uppercase tracking-wider text-[#888888] block font-semibold">
                Layout Capacity
              </span>
              <span className="font-serif font-bold text-lg text-[#173D32] block mb-3">
                {seatingPlans[selectedSeatingPlan].idealCapacity}
              </span>
              <button
                onClick={() => onOpenEnquiry(`Seating Layout Inquiry: ${seatingPlans[selectedSeatingPlan].title}`)}
                className="px-5 py-2.5 bg-[#173D32] hover:bg-[#0E2921] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                Inquire For This Layout
              </button>
            </div>
          </div>
        </div>

        {/* Mandap Styling Themes Gallery */}
        <div className="bg-[#173D32] text-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/40 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#E6C280] mb-1">
              <Flower2 className="w-4 h-4 text-[#C6A15B]" />
              <span>Sacred Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Signature Mandap & Floral Decor Styles
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Crafted by master floral artisans using fresh seasonal blooms, fragrant mogra, and royal Indian heritage motifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mandapThemes.map((mandap, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-lg flex flex-col justify-between group hover:bg-white/15 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={mandap.image}
                    alt={mandap.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] text-[#E6C280] font-semibold">
                    {mandap.bestFor}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-white mb-2">
                      {mandap.title}
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                      {mandap.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(`Mandap Theme Styling: ${mandap.title}`)}
                    className="w-full py-2.5 rounded-xl border border-[#C6A15B] text-[#E6C280] hover:bg-[#C6A15B] hover:text-[#173D32] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Select Mandap Theme
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-300 gap-4">
            <span className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>All mandap designs can be personalized with your family astrologer's auspicious orientation and color preferences.</span>
            </span>

            <button
              onClick={onOpenCalculator}
              className="px-6 py-3 bg-[#C6A15B] hover:bg-[#D4AF37] text-[#173D32] rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-md shrink-0"
            >
              Calculate Venue & Mandap Budget →
            </button>
          </div>
        </div>

      </div>

      {/* Venue Detail Specs Modal */}
      {selectedVenueModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedVenueModal(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#C6A15B]/20">
              <div>
                <span className="text-xs uppercase font-semibold text-[#C6A15B] tracking-wider block">
                  {selectedVenueModal.type}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#173D32]">
                  {selectedVenueModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVenueModal(null)}
                className="text-neutral-500 hover:text-neutral-800 text-xl font-bold p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="my-5 aspect-video rounded-lg overflow-hidden bg-black relative">
              <img
                src={selectedVenueModal.image}
                alt={selectedVenueModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-5">
              {selectedVenueModal.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 bg-white p-4 rounded-xl border border-neutral-200 text-xs">
              <div>
                <span className="text-neutral-400 block font-medium">Guest Capacity</span>
                <span className="font-semibold text-[#173D32] text-sm">{selectedVenueModal.capacityRange}</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Usable Area</span>
                <span className="font-semibold text-[#173D32] text-sm">{selectedVenueModal.area}</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Starting Package</span>
                <span className="font-semibold text-[#173D32]">{selectedVenueModal.packageStartingAt || "By Quotation"}</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Parking Linkage</span>
                <span className="font-semibold text-[#173D32]">Direct Paved Valet Entry</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-[#173D32] tracking-wider mb-2">
                Included Facilities & Technical Capabilities:
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700">
                {selectedVenueModal.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#C6A15B]/20 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedVenueModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-semibold text-neutral-600 hover:bg-neutral-200 transition-colors"
              >
                Close Specs
              </button>
              <button
                onClick={() => {
                  const venueName = selectedVenueModal.name;
                  setSelectedVenueModal(null);
                  onOpenEnquiry(venueName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded text-xs font-semibold text-white bg-[#173D32] hover:bg-[#0E2921] transition-colors"
              >
                Inquire For This Venue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
