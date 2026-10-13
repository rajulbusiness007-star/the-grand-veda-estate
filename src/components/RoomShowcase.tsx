import React, { useState } from 'react';
import { ROOMS_DATA, RoomItem, HOTEL_CONFIG } from '../data/hotelData';
import { 
  Users, 
  Bed, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Eye, 
  Calendar, 
  Maximize2, 
  Compass, 
  ShieldCheck, 
  Coffee, 
  Bath, 
  Heart,
  Crown,
  Leaf
} from 'lucide-react';

interface RoomShowcaseProps {
  onBookRoom: (room: RoomItem) => void;
  onViewRoomDetails: (room: RoomItem) => void;
}

export const RoomShowcase: React.FC<RoomShowcaseProps> = ({
  onBookRoom,
  onViewRoomDetails,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'suites' | 'villas'>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<{ [roomId: string]: number }>({});

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'rooms') return room.id.includes('room');
    if (activeFilter === 'suites') return room.id.includes('suite');
    if (activeFilter === 'villas') return room.id.includes('villa');
    return true;
  });

  const getCuratedBadge = (id: string) => {
    if (id.includes('bridal')) return { text: "Bridal Preparation Favorite", icon: Crown, color: "bg-[#173D32] text-[#E6C280]" };
    if (id.includes('villa')) return { text: "Exclusive Royal Buyout", icon: Sparkles, color: "bg-[#C6A15B] text-white" };
    if (id.includes('palace')) return { text: "Celebration Family Suite", icon: Heart, color: "bg-[#788059] text-white" };
    return { text: "Deluxe Heritage Classic", icon: Leaf, color: "bg-[#FAF7F2] text-[#173D32] border border-[#C6A15B]/40" };
  };

  const handleNextImage = (e: React.MouseEvent, roomId: string, galleryLength: number) => {
    e.stopPropagation();
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % galleryLength
    }));
  };

  return (
    <section id="rooms" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#C6A15B]/25">
      {/* Decorative Botanical Leaf Flourishes */}
      <div className="absolute top-8 right-8 w-24 h-24 opacity-20 pointer-events-none">
        <Leaf className="w-full h-full text-[#173D32]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Royal Calligraphy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#173D32] font-semibold">
              Sanctuary of Rest & Comfort
            </span>
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-[#173D32] tracking-tight mb-2">
            Rooms & Celebration Suites
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#C6A15B] font-normal my-2">
            Where Heritage Charm Meets Deep Tranquility
          </p>

          <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl mx-auto mt-3">
            Crafted for wedding parties, festive families, and luxury seekers. Each suite features antique teakwood detailing, four-poster emperor beds, private garden verandas, and 24/7 dedicated estate hospitality.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-[#173D32] text-white shadow-md'
                : 'bg-white text-[#444444] hover:bg-[#FAF7F2] border border-[#C6A15B]/30'
            }`}
          >
            All Suites (48 Keys)
          </button>
          <button
            onClick={() => setActiveFilter('rooms')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
              activeFilter === 'rooms'
                ? 'bg-[#173D32] text-white shadow-md'
                : 'bg-white text-[#444444] hover:bg-[#FAF7F2] border border-[#C6A15B]/30'
            }`}
          >
            Deluxe Garden Rooms
          </button>
          <button
            onClick={() => setActiveFilter('suites')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
              activeFilter === 'suites'
                ? 'bg-[#173D32] text-white shadow-md'
                : 'bg-white text-[#444444] hover:bg-[#FAF7F2] border border-[#C6A15B]/30'
            }`}
          >
            Royal & Bridal Suites
          </button>
          <button
            onClick={() => setActiveFilter('villas')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
              activeFilter === 'villas'
                ? 'bg-[#173D32] text-white shadow-md'
                : 'bg-white text-[#444444] hover:bg-[#FAF7F2] border border-[#C6A15B]/30'
            }`}
          >
            Presidential Pool Villas
          </button>
        </div>

        {/* Enhanced Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room) => {
            const badge = getCuratedBadge(room.id);
            const BadgeIcon = badge.icon;
            const currentImgIdx = activeImageIndex[room.id] || 0;
            const currentImage = room.gallery[currentImgIdx] || room.image;

            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl border border-[#C6A15B]/35 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header with Image Slideshow and Virtual Tour Access */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E2921]">
                  <img
                    src={currentImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-sm ${badge.color}`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      <span>{badge.text}</span>
                    </span>

                    <button
                      onClick={() => onViewRoomDetails(room)}
                      className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all text-[11px] font-medium flex items-center space-x-1.5 border border-white/20"
                      title="Explore 360° Virtual Bedroom & Specs"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>360° Tour</span>
                    </button>
                  </div>

                  {/* Image Gallery Switcher Dots */}
                  {room.gallery.length > 1 && (
                    <div className="absolute top-16 right-4 flex flex-col space-y-1.5 z-10">
                      {room.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(prev => ({ ...prev, [room.id]: i }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImgIdx === i ? 'bg-[#C6A15B] scale-125' : 'bg-white/60 hover:bg-white'
                          }`}
                          aria-label={`Photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Bottom Image Overlay with Title & Specs */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center gap-3 text-xs font-medium text-[#E6C280] mb-1.5">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>{room.capacity}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>{room.bedType}</span>
                      </span>
                      <span>•</span>
                      <span className="text-white/80">{room.size}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                      {room.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Royal Amenities */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-script text-2xl text-[#C6A15B] mb-2">
                      “{room.tagline}”
                    </p>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                      {room.description}
                    </p>

                    {/* Curated Royal Amenities Pills */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#173D32] block mb-2">
                        Palatial Suite Inclusions:
                      </span>
                      <div className="grid grid-cols-2 gap-2.5">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-[#333333]">
                            <div className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/40 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#C6A15B]" />
                            </div>
                            <span className="truncate">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Reservation Actions */}
                  <div className="pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-[#888888] uppercase tracking-wider block font-medium">
                        Exclusive Suite Tariff
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-[#173D32] tabular-nums">
                          {room.currency}{room.pricePerNight.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#888888]">/ night + taxes</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => onViewRoomDetails(room)}
                        className="flex-1 sm:flex-none px-4 py-3 text-xs font-semibold rounded-xl border border-[#C6A15B] text-[#173D32] hover:bg-[#FAF7F2] transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Specs & Gallery</span>
                      </button>

                      <button
                        onClick={() => onBookRoom(room)}
                        className="flex-1 sm:flex-none px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-xl bg-[#173D32] hover:bg-[#0E2921] text-white transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Reserve Suite</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Royal Estate Bedding & Sleep Experience Bar */}
        <div className="mt-16 bg-[#FCFAF6] rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/30 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
              The Grand Veda Sleep Sanctuary
            </span>
            <h4 className="text-xl font-serif text-[#173D32] font-semibold">
              Designed For Unhurried, Deep Rest
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl border border-[#EFE8DD]">
              <Bed className="w-5 h-5 text-[#C6A15B] mx-auto mb-1.5" />
              <span className="text-xs font-semibold text-[#173D32] block">400-Thread Count</span>
              <span className="text-[11px] text-[#777777]">Egyptian Cotton Linens</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EFE8DD]">
              <Bath className="w-5 h-5 text-[#C6A15B] mx-auto mb-1.5" />
              <span className="text-xs font-semibold text-[#173D32] block">Ayurvedic Botanicals</span>
              <span className="text-[11px] text-[#777777]">Forest Essentials Toiletries</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EFE8DD]">
              <Coffee className="w-5 h-5 text-[#C6A15B] mx-auto mb-1.5" />
              <span className="text-xs font-semibold text-[#173D32] block">Artisanal Tea Bar</span>
              <span className="text-[11px] text-[#777777]">Single-Estate Nilgiri Teas</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EFE8DD]">
              <ShieldCheck className="w-5 h-5 text-[#C6A15B] mx-auto mb-1.5" />
              <span className="text-xs font-semibold text-[#173D32] block">24/7 Estate Valet</span>
              <span className="text-[11px] text-[#777777]">Luggage & Bridal Care</span>
            </div>
          </div>
        </div>

        {/* Wedding Group Room Blocks Banner */}
        <div className="mt-10 bg-[#173D32] text-white rounded-2xl p-6 sm:p-10 border border-[#C6A15B]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E6C280] font-semibold block mb-1">
              Celebration Guest Hosting
            </span>
            <h4 className="text-2xl font-serif font-bold text-white mb-2">
              Reserving Room Blocks For Wedding & Celebration Parties?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
              We offer exclusive wing buyouts (10 to 48 keys) with personalized welcome amenities, seamless bridal floor zoning, luggage coordination, and complimentary breakfast hospitality.
            </p>
          </div>
          <a
            href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda,%20I%20would%20like%20to%20enquire%20about%20a%20wedding%20room%20block`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#C6A15B] text-white hover:bg-[#D4AF37] transition-all whitespace-nowrap shrink-0 shadow-lg flex items-center gap-2 uppercase tracking-wider"
          >
            <span>Inquire for Room Blocks</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
