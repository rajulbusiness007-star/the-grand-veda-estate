import React, { useState, useRef, useEffect } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Compass, Play, Pause, RotateCw, Maximize2, Sparkles, MapPin, Check, Video, Eye, Calendar, Volume2, VolumeX, ChevronRight, Info } from 'lucide-react';

interface TourLocation {
  id: string;
  name: string;
  category: string;
  tagline: string;
  specs: string;
  image360: string;
  videoUrl: string;
  description: string;
  hotspots: {
    title: string;
    description: string;
    left: number; // percentage horizontally (0-100)
    top: number; // percentage vertically (0-100)
  }[];
}

const TOUR_LOCATIONS: TourLocation[] = [
  {
    id: "marriage-garden-360",
    name: "The Shahi Marriage Lawn (25,000 sq.ft)",
    category: "Outdoor Wedding Grounds",
    tagline: "Natural grass amphitheater with illuminated royal mandap stage",
    specs: "Up to 1,500 Guests · 40ft Stage · 250+ Car Valet Parking Link",
    image360: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-table-decor-with-candles-42581-large.mp4",
    description: "Experience the sheer scale of our grand celebration turf. Designed for majestic baarat processions, tree canopies draped in glowing fairy lights, and expansive multi-buffet dining pavilions.",
    hotspots: [
      {
        title: "Floral Mandap Stage",
        description: "Elevated 40ft stage equipped with heavy-load trusses for bespoke crystal & floral chandeliers.",
        left: 48,
        top: 42,
      },
      {
        title: "Live Catering & Chaat Courtyard",
        description: "Dedicated 6,000 sq.ft pure-vegetarian live counter arcade with independent guest flow.",
        left: 22,
        top: 55,
      },
      {
        title: "Baarat Welcome Grand Arch",
        description: "Colonial stone welcome gateway for traditional nagada & shehnai bridal arrivals.",
        left: 82,
        top: 48,
      },
    ],
  },
  {
    id: "palace-facade-360",
    name: "Estate Facade & Manicured Gardens",
    category: "Heritage Architecture",
    tagline: "Colonial arches, water reflection fountains & palatial driveway",
    specs: "48 Luxury Suites · Helipad Access · 24/7 Security",
    image360: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-exterior-of-a-luxurious-resort-hotel-41311-large.mp4",
    description: "A breathtaking architectural marvel inspired by aristocratic royal residences, welcoming wedding entourages with grandeur and lush tropical valley vistas.",
    hotspots: [
      {
        title: "Main Portico & Fountain",
        description: "Illuminated water cascade and VIP drop-off roundabout for limousine arrivals.",
        left: 50,
        top: 60,
      },
      {
        title: "Private Suite Balconies",
        description: "Handcrafted stone balustrades offering panoramic views over the celebration lawns.",
        left: 30,
        top: 35,
      },
      {
        title: "West Colonnade Promenade",
        description: "Acoustically sheltered garden promenade for peaceful evening strolls.",
        left: 75,
        top: 52,
      },
    ],
  },
  {
    id: "crystal-banquet-360",
    name: "The Grand Crystal AC Banquet Hall",
    tagline: "Pillarless climate-controlled royal hall with Austrian chandeliers",
    category: "Indoor Royal Ballroom",
    specs: "8,500 sq.ft · 18ft Ceilings · Up to 600 Guests · Acoustic Walls",
    image360: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=2400&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-banquet-hall-prepared-for-a-wedding-with-chandeliers-42579-large.mp4",
    description: "An opulent pillarless ballroom offering unobstructed sightlines from every table, integrated laser projection systems, and central HEPA climate filtration.",
    hotspots: [
      {
        title: "Crystal Chandelier Core",
        description: "12 custom Austrian crystal chandeliers with DMX-controlled ambient mood illumination.",
        left: 50,
        top: 25,
      },
      {
        title: "Main Performance Stage",
        description: "Spacious stage with direct backstage access and performer green rooms.",
        left: 52,
        top: 50,
      },
      {
        title: "Pre-Function Cocktail Lounge",
        description: "2,000 sq.ft Italian marble reception foyer with bar counter for guest welcoming.",
        left: 15,
        top: 58,
      },
    ],
  },
  {
    id: "sunset-terrace-360",
    name: "Sunset Terrace & Poolside Deck",
    tagline: "Open-air candlelit gazebo & cabana celebration lounges",
    category: "Anniversaries & Cocktail Galas",
    specs: "3,800 sq.ft Terrace + 5,500 sq.ft Pool Deck · Up to 200 Guests",
    image360: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dinner-table-setting-at-sunset-with-candles-42582-large.mp4",
    description: "Perched above the hillside, this open-air terrace is the resort’s most romantic enclave for milestone anniversaries, sunset rings, and cocktail sundowners.",
    hotspots: [
      {
        title: "Candlelit Gazebo Pavilion",
        description: "Intimate stone arches adorned with fresh white roses and warm lantern light.",
        left: 45,
        top: 48,
      },
      {
        title: "Valley Horizon Lookout",
        description: "Unobstructed sunset vantage point overlooking Nashik wine valleys.",
        left: 78,
        top: 38,
      },
      {
        title: "Acoustic Stage Corner",
        description: "Dedicated sound deck for live violinists, harpists, and acoustic trios.",
        left: 20,
        top: 52,
      },
    ],
  },
  {
    id: "presidential-suite-360",
    name: "The Presidential 2-Bedroom Pool Villa",
    tagline: "Royal sanctuary with private temperature-controlled plunge pool",
    category: "VIP Accommodations",
    specs: "1,450 sq.ft Villa · Private Plunge Pool · Personal Butler Deck",
    image360: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-suite-interior-with-a-king-size-bed-41315-large.mp4",
    description: "An exclusive retreat offering the highest degree of privacy for the bride, groom, or VIP families with detached dining verandas and lush gardens.",
    hotspots: [
      {
        title: "Carved Emperor Bed",
        description: "Handcrafted four-poster teakwood bed with 600-thread count Egyptian cotton.",
        left: 48,
        top: 52,
      },
      {
        title: "Private Poolside Garden",
        description: "Heated plunge pool sheltered by royal palms with outdoor sun loungers.",
        left: 18,
        top: 45,
      },
      {
        title: "Bridal Styling Boudoir",
        description: "Professional illuminated vanity station with full-length 3-way grooming mirrors.",
        left: 80,
        top: 55,
      },
    ],
  },
];

interface VirtualTourProps {
  onOpenEnquiry: (notes?: string) => void;
}

export const VirtualPropertyTour: React.FC<VirtualTourProps> = ({ onOpenEnquiry }) => {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'360' | 'video'>('360');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [panOffset, setPanOffset] = useState(0); // 0 to 100% horizontal scroll
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; description: string } | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentLocation = TOUR_LOCATIONS[selectedLocationIndex];

  // Auto rotation in 360 mode
  useEffect(() => {
    if (!isAutoRotating || viewMode !== '360' || isDragging) return;

    const interval = setInterval(() => {
      setPanOffset((prev) => (prev + 0.15) % 100);
    }, 40);

    return () => clearInterval(interval);
  }, [isAutoRotating, viewMode, isDragging]);

  // Drag interaction to pan 360 panorama
  const handleMouseDown = (e: React.MouseEvent) => {
    if (viewMode !== '360') return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || viewMode !== '360') return;
    const deltaX = e.clientX - dragStartX;
    setDragStartX(e.clientX);
    setPanOffset((prev) => {
      let next = prev - deltaX * 0.12;
      if (next < 0) next += 100;
      return next % 100;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== '360') return;
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setIsAutoRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || viewMode !== '360') return;
    const deltaX = e.touches[0].clientX - dragStartX;
    setDragStartX(e.touches[0].clientX);
    setPanOffset((prev) => {
      let next = prev - deltaX * 0.15;
      if (next < 0) next += 100;
      return next % 100;
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section id="virtual-tour" className="py-20 lg:py-28 bg-[#173D32] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0E2921]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E6C280] font-semibold mb-3">
            <Compass className="w-4 h-4 text-[#C6A15B]" />
            <span>Immersive Property Experience</span>
            <Compass className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            360° Virtual Walkthrough & Flythrough
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Step directly onto our marriage lawns, banquet ballrooms, and luxury villas from the comfort of your home. Explore architectural sightlines, stage acoustics, and grounds layout before your visit.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
          {TOUR_LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelectedLocationIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                selectedLocationIndex === idx
                  ? 'bg-[#C6A15B] text-[#173D32] shadow-md font-bold'
                  : 'bg-white/10 hover:bg-white/15 text-neutral-200 border border-white/10'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{loc.name.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Viewer Frame */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-2xl bg-black select-none aspect-[16/9] sm:aspect-[21/9] min-h-[420px] max-h-[700px] flex items-center justify-center"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {viewMode === '360' ? (
            /* 360 Panorama Mode */
            <div className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing">
              {/* Panning Panorama Background */}
              <div
                className="w-[300%] h-full flex transform transition-transform duration-75 ease-out"
                style={{
                  transform: `translateX(-${(panOffset % 100) / 2}%) scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src={currentLocation.image360}
                  alt={currentLocation.name}
                  className="w-1/2 h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={currentLocation.image360}
                  alt={`${currentLocation.name} panorama repeat`}
                  className="w-1/2 h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Subtle Vignette & Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

              {/* Interactive Hotspots */}
              <div className="absolute inset-0 pointer-events-none">
                {currentLocation.hotspots.map((spot, i) => {
                  // Adjust hotspot position relative to pan
                  const adjustedLeft = (spot.left - (panOffset % 100) * 0.4 + 100) % 100;
                  const isVisible = adjustedLeft > 5 && adjustedLeft < 95;

                  if (!isVisible) return null;

                  return (
                    <div
                      key={i}
                      className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                      style={{
                        left: `${adjustedLeft}%`,
                        top: `${spot.top}%`,
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(spot);
                        }}
                        className="group relative flex items-center justify-center p-2 rounded-full bg-[#C6A15B]/90 text-[#173D32] hover:bg-white shadow-lg hover:scale-110 transition-transform"
                        title={spot.title}
                        aria-label={`Hotspot info for ${spot.title}`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#173D32] animate-ping absolute opacity-40 pointer-events-none" />
                        <Sparkles className="w-4 h-4 text-[#173D32]" />

                        {/* Hover Tooltip Title */}
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0E2921]/95 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md border border-[#C6A15B]/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {spot.title}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Active Hotspot Info Overlay Drawer */}
              {activeHotspot && (
                <div
                  className="absolute bottom-16 left-6 right-6 sm:left-8 sm:max-w-md bg-[#0E2921]/95 text-white p-5 rounded-xl border border-[#C6A15B]/50 shadow-2xl backdrop-blur-md z-30 animate-fade-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                      <h4 className="font-serif font-bold text-base text-[#E6C280]">
                        {activeHotspot.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-neutral-400 hover:text-white p-1 text-sm font-bold"
                      aria-label="Close hotspot information"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Video Flythrough Mode */
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={currentLocation.videoUrl}
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-cover"
                onError={() => {
                  // If external sample video is unavailable in sandbox, fallback to 360 mode seamlessly
                  setViewMode('360');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              {/* Center Play/Pause button */}
              <button
                onClick={toggleVideoPlayback}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group"
                aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
              >
                {!isVideoPlaying && (
                  <div className="w-16 h-16 rounded-full bg-[#C6A15B] text-[#173D32] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                )}
              </button>
            </div>
          )}

          {/* Top Control Bar Over Viewer */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
            {/* Location Pill */}
            <div className="bg-[#0E2921]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A15B]/40 flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                {currentLocation.name}
              </span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="text-[#C6A15B] hidden sm:inline">{currentLocation.category}</span>
            </div>

            {/* Mode Switcher: 360 Pan vs HD Video */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-lg border border-white/15">
              <button
                onClick={() => setViewMode('360')}
                className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === '360'
                    ? 'bg-[#C6A15B] text-[#173D32]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>360° Panorama</span>
              </button>

              <button
                onClick={() => setViewMode('video')}
                className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'video'
                    ? 'bg-[#C6A15B] text-[#173D32]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Aerial Flythrough</span>
              </button>
            </div>
          </div>

          {/* Bottom Control Bar Over Viewer */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto text-xs">
            {/* Left Specs snippet */}
            <div className="hidden md:flex items-center gap-2 text-neutral-300 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
              <Info className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{currentLocation.specs}</span>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-2 ml-auto">
              {viewMode === '360' ? (
                <>
                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className={`px-3 py-1.5 rounded-md backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isAutoRotating
                        ? 'bg-[#C6A15B] text-[#173D32] border-[#C6A15B]'
                        : 'bg-black/60 text-white border-white/20 hover:bg-black/80'
                    }`}
                    title="Toggle continuous auto-rotation"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">
                      {isAutoRotating ? 'Auto Pan Active' : 'Start Auto Pan'}
                    </span>
                  </button>

                  <button
                    onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
                    className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md"
                    title="Zoom in"
                    aria-label="Zoom in panorama"
                  >
                    +
                  </button>

                  <button
                    onClick={() => setZoomLevel((z) => Math.max(0.9, z - 0.1))}
                    className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md"
                    title="Zoom out"
                    aria-label="Zoom out panorama"
                  >
                    -
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md flex items-center gap-1 px-3"
                  title="Toggle video audio"
                >
                  {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C6A15B]" />}
                  <span>{isVideoMuted ? 'Muted' : 'Sound On'}</span>
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-md bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md"
                title="Fullscreen view"
                aria-label="Toggle fullscreen view"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Location Info Card Below Tour Viewer */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E6C280] block mb-1">
              {currentLocation.category} · {currentLocation.specs}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              {currentLocation.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {currentLocation.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenEnquiry(`Virtual Tour Enquiry for ${currentLocation.name}`)}
              className="w-full sm:w-auto px-6 py-3 rounded-md text-xs sm:text-sm font-semibold bg-[#C6A15B] text-[#173D32] hover:bg-[#D4AF37] transition-all shadow-md whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#173D32]" />
              <span>Schedule In-Person Site Visit</span>
            </button>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda,%20I%20would%20like%20a%20guided%20property%20tour%20for%20${encodeURIComponent(
                currentLocation.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-md text-xs sm:text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-colors whitespace-nowrap text-center"
            >
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
