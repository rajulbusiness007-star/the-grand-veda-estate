import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Sparkles, 
  Gift, 
  Shirt, 
  Star, 
  ExternalLink, 
  Check, 
  HeartHandshake, 
  Music, 
  GlassWater, 
  Utensils, 
  CalendarDays 
} from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

interface TheFinerDetailsProps {
  onBookRoom: () => void;
  onOpenEnquiry: (notes?: string) => void;
}

export const TheFinerDetails: React.FC<TheFinerDetailsProps> = ({ onBookRoom, onOpenEnquiry }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [waxSealStampActive, setWaxSealStampActive] = useState(false);

  const timelineSteps = [
    {
      time: "3:30 PM",
      title: "Guest Arrival",
      desc: "Chilled vetiver & rose sherbet welcome at the Grand Portico",
      icon: Clock,
    },
    {
      time: "4:30 PM",
      title: "Cocktail Hour",
      desc: "Garden Terrace sunset canapés & botanical infusions",
      icon: GlassWater,
    },
    {
      time: "6:00 PM",
      title: "Royal Dinner",
      desc: "Gourmet feast under starlight & glowing brass lamps",
      icon: Utensils,
    },
    {
      time: "7:30 PM",
      title: "Cake Cutting",
      desc: "Sweet moments & celebratory toast with live flute melodies",
      icon: Sparkles,
    },
    {
      time: "8:00 PM",
      title: "First Dance",
      desc: "Chandeliers dim as classical acoustic strings begin",
      icon: Music,
    },
    {
      time: "8:30 PM",
      title: "Grand Celebration",
      desc: "Live orchestra, DJ rhythms & dancing into the night",
      icon: Sparkles,
    },
  ];

  const paletteColors = [
    { name: "Forest Sage", hex: "#5B6B54" },
    { name: "Hillside Olive", hex: "#788059" },
    { name: "Dusty Mauve", hex: "#A97576" },
    { name: "Royal Wine", hex: "#571C24" },
    { name: "Champagne Gold", hex: "#C6A15B" },
  ];

  const accommodations = [
    {
      name: "The Royal Valley Villas",
      rating: 5,
      proximity: "5 Minutes from Lawn",
      price: "₹18,500 / night",
      image: "/assets/suite.jpg",
    },
    {
      name: "Grand Veda Heritage Suites",
      rating: 5,
      proximity: "On-site Courtyard",
      price: "₹14,500 / night",
      image: "/assets/estate-hero.jpg",
    },
    {
      name: "Hilltop Gazebo Lodge",
      rating: 5,
      proximity: "8 Minutes from Venue",
      price: "₹12,000 / night",
      image: "/assets/banquet.jpg",
    },
  ];

  const handleCopyColor = (colorHex: string, name: string) => {
    navigator.clipboard?.writeText(colorHex);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleWaxSealClick = () => {
    setWaxSealStampActive(true);
    setTimeout(() => setWaxSealStampActive(false), 2500);
    onOpenEnquiry("Celebration Registry & Bespoke Gift Arrangements");
  };

  return (
    <section id="finer-details" className="py-24 bg-[#F5EFEB] relative overflow-hidden">
      {/* Background Deckle Edge Paper SVG at Top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-[#FAF7F2] fill-current"
        >
          <path d="M0,0 L0,15 Q30,28 60,14 T120,20 T180,10 T240,25 T300,16 T360,22 T420,10 T480,24 T540,15 T600,26 T660,12 T720,22 T780,14 T840,27 T900,16 T960,23 T1020,12 T1080,25 T1140,15 T1200,22 L1200,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Parchment Letterhead Canvas */}
        <div className="parchment-card rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-[#C6A15B]/30 shadow-2xl relative">
          
          {/* Olive Silk Ribbon with Wax Seal Stamp on Top Corner */}
          <div className="absolute -top-3 left-8 sm:left-14 flex flex-col items-center z-20">
            {/* Olive draped ribbon */}
            <div className="w-9 h-14 ribbon-olive rounded-b-md relative">
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#3F4B39] clip-path-chevron"></div>
            </div>
            {/* Golden Embossed Wax Seal */}
            <button
              onClick={handleWaxSealClick}
              title="Click to stamp your celebration interest"
              className={`-mt-5 w-12 h-12 rounded-full wax-seal flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 shadow-xl ${
                waxSealStampActive ? 'ring-4 ring-[#C6A15B]/70 scale-110' : ''
              }`}
            >
              <span className="text-white font-serif text-sm font-bold tracking-tighter drop-shadow">
                GV
              </span>
            </button>
          </div>

          {/* Romantic Header Title */}
          <div className="text-center pt-8 mb-12">
            <p className="font-script text-3xl sm:text-4xl text-[#788059] font-normal mb-1">
              Every Love Story is Beautiful, But Ours Is My Favorite
            </p>
            
            <div className="flex items-center justify-center space-x-3 my-2">
              <span className="w-12 h-[1px] bg-[#C6A15B]"></span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#173D32] tracking-wider uppercase font-normal">
                The Finer <span className="font-script text-4xl sm:text-6xl text-[#C6A15B] lowercase">details</span>
              </h2>
              <span className="w-12 h-[1px] bg-[#C6A15B]"></span>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#888888] mt-2">
              Bespoke Wedding & Milestone Celebration Guide
            </p>
          </div>

          {/* Welcome Letter Note */}
          <div className="max-w-2xl mx-auto text-center mb-16 px-4">
            <div className="inline-block p-1 mb-3">
              <div className="w-8 h-[2px] bg-[#C6A15B] mx-auto"></div>
            </div>
            <h3 className="text-xl font-serif text-[#173D32] tracking-widest uppercase mb-3">
              Welcome
            </h3>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-serif italic">
              "We are overjoyed to welcome you to our celebration grounds. Everything you need for an exquisite, deeply relaxed, and unforgettable weekend with our estate family can be found below."
            </p>
          </div>

          {/* 'OUR DAY AT A GLANCE' Timeline */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#173D32] font-bold block mb-1">
                Our Day At A Glance
              </span>
              <div className="w-12 h-[1px] bg-[#C6A15B] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {timelineSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E8DFD3] hover:border-[#C6A15B] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/40 flex items-center justify-center mb-3 text-[#173D32]">
                      <IconComponent className="w-5 h-5 text-[#C6A15B]" />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#173D32] tracking-wide mb-1">
                      {step.time}
                    </span>
                    <span className="text-xs font-semibold text-[#222222] uppercase tracking-wider mb-1">
                      {step.title}
                    </span>
                    <span className="text-[11px] text-[#777777] leading-tight">
                      {step.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Two-Column Showcase: Our Venue + Dress Code & Registry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
            
            {/* Left 6 cols: Our Venue Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/40 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF7F2] rounded-bl-full border-l border-b border-[#C6A15B]/20 pointer-events-none"></div>
              
              <div>
                <div className="flex items-center space-x-2 text-[#C6A15B] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#173D32]">Our Celebration Venue</span>
                </div>
                
                <h4 className="text-2xl font-serif text-[#173D32] font-semibold mb-1">
                  The Shahi Glasshouse & Lawn
                </h4>
                <p className="font-script text-2xl text-[#C6A15B] mb-4">
                  Grand Veda Estate Grounds
                </p>

                <div className="relative h-56 rounded-xl overflow-hidden mb-5 border border-[#C6A15B]/30">
                  <img
                    src="/assets/wedding.jpg"
                    alt="The Grand Veda Celebration Grounds"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#173D32] tracking-wide">
                    Hillside Valley • Nashik
                  </div>
                </div>

                <p className="text-xs text-[#666666] leading-relaxed mb-4">
                  {HOTEL_CONFIG.address}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={HOTEL_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#173D32] text-white hover:bg-[#0E2921] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center space-x-2"
                >
                  <span>View On Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                </a>

                <button
                  onClick={() => onOpenEnquiry("Venue Visit & Private Tour Booking")}
                  className="px-5 py-2.5 border border-[#C6A15B] text-[#173D32] hover:bg-[#FAF7F2] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Schedule Private Tour
                </button>
              </div>
            </div>

            {/* Right 6 cols: Dress Code & Gift Registry */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Dress Code Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C6A15B]/40 shadow-sm">
                <div className="flex items-center space-x-2 text-[#C6A15B] mb-2">
                  <Shirt className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#173D32]">Celebration Attire</span>
                </div>
                
                <h4 className="text-xl font-serif text-[#173D32] font-semibold mb-1">
                  Dress Code: Royal Cocktail & Festive Heritage
                </h4>
                <p className="text-xs text-[#666666] mb-4">
                  We invite our cherished guests to dress in sophisticated hues inspired by our hillside estate palette:
                </p>

                {/* Color Palette Swatches */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {paletteColors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyColor(color.hex, color.name)}
                      className="group flex flex-col items-center text-center focus:outline-none"
                      title={`Click to copy ${color.name} (${color.hex})`}
                    >
                      <div
                        className="w-9 h-9 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {copiedColor === color.name && (
                          <Check className="w-4 h-4 text-white drop-shadow" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#555555] font-medium mt-1">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
                {copiedColor && (
                  <p className="text-[11px] text-[#173D32] italic mt-1 font-serif">
                    Copied {copiedColor} code!
                  </p>
                )}
              </div>

              {/* Gift Registry / Blessings Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C6A15B]/40 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#C6A15B] mb-2">
                    <Gift className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#173D32]">Blessings & Registry</span>
                  </div>
                  
                  <h4 className="text-xl font-serif text-[#173D32] font-semibold mb-2">
                    Your Presence Is Our Greatest Honor
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed mb-4">
                    Your love and presence on our celebration lawns are truly the only gifts we request. If you wish to bestow a traditional blessing or contribute to the estate tree-planting initiative, we have arranged an effortless registry below.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleWaxSealClick}
                    className="w-full py-3 px-5 rounded-xl border border-[#C6A15B] bg-[#FCFAF6] hover:bg-[#FAF7F2] transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full wax-seal flex items-center justify-center shrink-0">
                        <span className="text-white text-[10px] font-serif font-bold">GV</span>
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-serif font-bold text-[#173D32] block">
                          Estate Registry & Wishes
                        </span>
                        <span className="text-[10px] text-[#888888]">
                          Click to leave your blessing or wish note
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#C6A15B] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      Click Here →
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 'WHERE TO STAY' Accommodations Section */}
          <div>
            <div className="text-center mb-10">
              <p className="font-script text-3xl text-[#788059] mb-1">
                Where To Stay
              </p>
              <h3 className="text-2xl font-serif text-[#173D32] tracking-wider uppercase font-semibold">
                Guest Lodging & Suites
              </h3>
              <p className="text-xs text-[#777777] mt-1 font-serif italic">
                Thoughtfully reserved rooms for wedding parties and celebration guests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accommodations.map((hotel, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full flex items-center space-x-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#C6A15B] fill-[#C6A15B]" />
                      ))}
                    </div>
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-[#173D32]">
                      {hotel.proximity}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#173D32] mb-1">
                        {hotel.name}
                      </h4>
                      <p className="text-xs text-[#888888] font-medium">
                        Exclusive celebration rates from {hotel.price}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F2ECE1]">
                      <button
                        onClick={onBookRoom}
                        className="w-full py-2.5 bg-[#173D32] hover:bg-[#0E2921] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Romantic Couple Byline / Date */}
          <div className="mt-16 pt-8 border-t border-[#C6A15B]/30 text-center">
            <p className="font-script text-3xl sm:text-4xl text-[#788059]">
              The Grand Veda Estate Celebrations
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#173D32] font-semibold mt-1">
              Nasik Valley • Established For Timeless Memories
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
