import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/hotelData';
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Users, Calendar, X, Check, Heart, Palette } from 'lucide-react';

interface HeroSlideshowProps {
  onPlanCelebration: () => void;
  onBookStay: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onPlanCelebration,
  onBookStay,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDecorModalOpen, setIsDecorModalOpen] = useState(false);
  const [selectedCanopy, setSelectedCanopy] = useState('blush-rose');
  const [selectedSeating, setSelectedSeating] = useState('gold-chiavari');
  const [selectedLighting, setSelectedLighting] = useState('fairy-chandelier');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto transition every 6 seconds unless hovered/paused or modal open
  useEffect(() => {
    if (isPaused || isDecorModalOpen) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1050px] overflow-hidden select-none bg-[#0E2921]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero celebration slideshow"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image with zoom effect on active */}
            <div className={`w-full h-full transform transition-transform duration-[7000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high-quality SVG graphic background if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Scrim Overlay for WCAG AA readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2921] via-[#0E2921]/50 to-black/45" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0E2921]/30 to-[#0E2921]/80" />
          </div>
        );
      })}

      {/* Floating Bokeh Fairy Lights & Twinkling Orbs Overlay */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {/* Soft glowing champagne & blush bokeh orbs */}
        <div className="absolute top-[14%] left-[12%] w-36 h-36 rounded-full bg-[#E6C280]/25 blur-2xl bokeh-orb-1" />
        <div className="absolute top-[24%] right-[14%] w-48 h-48 rounded-full bg-[#FFE4C4]/20 blur-3xl bokeh-orb-2" />
        <div className="absolute bottom-[28%] left-[22%] w-40 h-40 rounded-full bg-[#F7D6D9]/25 blur-2xl bokeh-orb-3" />
        <div className="absolute top-[42%] right-[32%] w-28 h-28 rounded-full bg-[#C6A15B]/30 blur-xl bokeh-orb-1" />

        {/* Twinkling fairy light specks */}
        <div className="absolute top-[18%] left-[26%] w-2.5 h-2.5 rounded-full bg-white fairy-twinkle-fast shadow-[0_0_12px_#FFF]" />
        <div className="absolute top-[28%] right-[22%] w-3 h-3 rounded-full bg-[#FFE4B5] fairy-twinkle-slow shadow-[0_0_16px_#FFE4B5]" />
        <div className="absolute top-[36%] left-[40%] w-2 h-2 rounded-full bg-white fairy-twinkle-slow shadow-[0_0_10px_#FFF]" />
        <div className="absolute top-[16%] right-[38%] w-2.5 h-2.5 rounded-full bg-[#FFD700] fairy-twinkle-fast shadow-[0_0_14px_#FFD700]" />
        <div className="absolute top-[52%] right-[18%] w-2.5 h-2.5 rounded-full bg-white fairy-twinkle-fast shadow-[0_0_12px_#FFF]" />
      </div>

      {/* Decorative Botanical Hairlines (Subtle Gold Accents) */}
      <div className="absolute top-24 left-8 hidden lg:block z-20 pointer-events-none opacity-40">
        <div className="w-16 h-[1px] bg-[#C6A15B] mb-1" />
        <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-medium">Est. Nashik Valley</span>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center pt-16 pb-20">
        {/* Frosted Glass Emblem Badge */}
        {HERO_SLIDES[currentSlide].id === 'slide-knot-plot' ? (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-4 shadow-xl animate-fade-in">
            <div className="w-7 h-7 rounded-md bg-white border border-[#E6C280] shadow-sm flex items-center justify-center relative overflow-hidden">
              <span className="font-serif font-bold text-xs tracking-tighter bg-gradient-to-br from-[#9333EA] to-[#EA580C] bg-clip-text text-transparent">
                KP
              </span>
            </div>
            <span className="text-xs tracking-widest uppercase text-white font-medium">
              Knot & Plot · Signature Event Atelier
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-4 shadow-xl animate-fade-in text-xs tracking-widest uppercase font-medium text-white">
            <div className="w-7 h-7 rounded-md bg-[#0E2921] border border-[#C6A15B] shadow-sm flex items-center justify-center text-[11px]">
              👑
            </div>
            <span>{HERO_SLIDES[currentSlide].badge}</span>
            <span className="text-white/40">·</span>
            <span className="text-[#E6C280]">{HERO_SLIDES[currentSlide].capacity}</span>
          </div>
        )}

        {/* Primary Main Headline — Romantic Script Font Across All Slides */}
        <h1 className="font-script text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal max-w-4xl leading-tight mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {HERO_SLIDES[currentSlide].title}
        </h1>

        {/* Secondary Subtitle — Elegant Italic Across All Slides */}
        <p className="font-light tracking-wide italic text-sm sm:text-base md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-6 drop-shadow-md">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Prominent Matching Pill CTAs Across All Slides */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none justify-center">
          {/* Primary Action Button (White Pill) */}
          <button
            onClick={HERO_SLIDES[currentSlide].id === 'slide-4' ? onBookStay : onPlanCelebration}
            className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold text-[#173D32] bg-white hover:bg-[#FAF7F2] hover:shadow-[0_8px_28px_rgba(255,255,255,0.4)] transition-all shadow-xl transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            {HERO_SLIDES[currentSlide].ctaPrimary}
          </button>

          {/* Secondary Action Button (Translucent Glass Pill) */}
          <button
            onClick={() => {
              if (HERO_SLIDES[currentSlide].id === 'slide-knot-plot') {
                setIsDecorModalOpen(true);
              } else if (HERO_SLIDES[currentSlide].id === 'slide-4') {
                onBookStay();
              } else {
                onPlanCelebration();
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 hover:border-white transition-all shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2"
          >
            {HERO_SLIDES[currentSlide].id === 'slide-knot-plot' ? (
              <>
                <Palette className="w-4 h-4 text-[#E6C280]" />
                <span>Customize Tablescape & Decor</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#E6C280]" />
                <span>{HERO_SLIDES[currentSlide].ctaSecondary}</span>
              </>
            )}
          </button>
        </div>

        {/* Slide Theme Tag */}
        <div className="mt-4 text-xs text-neutral-300/80 font-normal tracking-wide hidden sm:block">
          Showcasing: <span className="text-[#C6A15B] font-medium">{HERO_SLIDES[currentSlide].theme}</span>
        </div>
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/30 hover:bg-black/60 text-white items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/30 hover:bg-black/60 text-white items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots & Counter */}
      <div className="absolute bottom-14 sm:bottom-16 left-0 right-0 z-20 flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-2.5">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-8 h-1.5 bg-[#C6A15B]'
                  : 'w-2 h-1.5 bg-white/45 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        <div className="text-[10px] font-mono tabular-nums text-neutral-300/90">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </div>
      </div>

      {/* Full-width strip below hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#0E2921]/90 backdrop-blur-md hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-xs text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>25,000 sq.ft Marriage Lawn</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Up to 1,500 Guest Capacity</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>48 Palatial Rooms & Suites</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Heritage Valley, Nashik</span>
          </div>
        </div>
      </div>

      {/* Decorative Hanging Wax Seal with Olive Silk Ribbon */}
      <div className="absolute bottom-12 right-8 sm:right-16 z-30 hidden md:flex flex-col items-center pointer-events-auto">
        <div className="w-8 h-10 ribbon-olive rounded-b-md relative shadow-md">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#3F4B39]"></div>
        </div>
        <button
          onClick={onPlanCelebration}
          title="Plan Celebration at Grand Veda"
          className="-mt-3 w-10 h-10 rounded-full wax-seal flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 shadow-xl"
        >
          <Sparkles className="w-3 h-3 text-white drop-shadow" />
          <span className="text-white font-serif text-[9px] font-bold tracking-tight">GV</span>
        </button>
      </div>

      {/* Interactive Knot & Plot Decor & Tablescape Customizer Modal */}
      {isDecorModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="decor-modal-title"
        >
          <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#C6A15B]/40 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#0E2921] px-6 py-5 text-white flex items-center justify-between border-b border-[#C6A15B]/30 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E6C280] shadow flex items-center justify-center">
                  <span className="font-serif font-bold text-sm bg-gradient-to-br from-[#9333EA] to-[#EA580C] bg-clip-text text-transparent">
                    KP
                  </span>
                </div>
                <div>
                  <h3 id="decor-modal-title" className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                    Knot & Plot Tablescape Styler
                  </h3>
                  <p className="text-xs text-[#E6C280] tracking-wide font-light">
                    Customize your dream floral canopy, seating & glowing bokeh ambiance
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDecorModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
              {/* Option 1: Canopy & Drapes */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#173D32] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>1. Floral Gazebo & Canopy Drapes</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'blush-rose',
                      title: 'Blush Rose & Chiffon',
                      desc: 'Draped sheer white drapes with cascading blush & ivory roses (From Image)',
                      tag: 'Featured Signature',
                    },
                    {
                      id: 'royal-gold',
                      title: 'Royal Shahi Marigold',
                      desc: 'Marigold cascades, fragrant mogra strings & brass bell tassels',
                      tag: 'Heritage Wedding',
                    },
                    {
                      id: 'wisteria-crystal',
                      title: 'Enchanted Wisteria',
                      desc: 'Hanging cascading white wisteria blossoms with crystal glass',
                      tag: 'Twilight Romance',
                    },
                  ].map((canopy) => (
                    <button
                      key={canopy.id}
                      type="button"
                      onClick={() => setSelectedCanopy(canopy.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative ${
                        selectedCanopy === canopy.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10 shadow-md ring-2 ring-[#C6A15B]/50'
                          : 'border-neutral-200 bg-white hover:border-[#C6A15B]/50 hover:bg-neutral-50'
                      }`}
                    >
                      {selectedCanopy === canopy.id && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#173D32] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-1">
                        {canopy.tag}
                      </div>
                      <div className="font-semibold text-sm text-[#173D32] mb-1">{canopy.title}</div>
                      <div className="text-xs text-neutral-600 leading-snug">{canopy.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Seating & Tables */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#173D32] mb-3 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>2. Seating & Tablescaping</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'gold-chiavari',
                      title: 'Gold Chiavari Chairs',
                      desc: 'Gilded bamboo chairs with ivory cushions & crystal glassware (From Image)',
                      tag: 'Classic Glamour',
                    },
                    {
                      id: 'french-cane',
                      title: 'French Louis Cane Back',
                      desc: 'Antiqued wood frame chairs with sage velvet and gold-rimmed chargers',
                      tag: 'Parisian Vintage',
                    },
                    {
                      id: 'rustic-oak',
                      title: 'Rustic Vineyard Crossback',
                      desc: 'Weathered oak crossback chairs with olive runners & terracotta votives',
                      tag: 'Tuscan Estate',
                    },
                  ].map((seating) => (
                    <button
                      key={seating.id}
                      type="button"
                      onClick={() => setSelectedSeating(seating.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative ${
                        selectedSeating === seating.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10 shadow-md ring-2 ring-[#C6A15B]/50'
                          : 'border-neutral-200 bg-white hover:border-[#C6A15B]/50 hover:bg-neutral-50'
                      }`}
                    >
                      {selectedSeating === seating.id && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#173D32] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-1">
                        {seating.tag}
                      </div>
                      <div className="font-semibold text-sm text-[#173D32] mb-1">{seating.title}</div>
                      <div className="text-xs text-neutral-600 leading-snug">{seating.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Illumination & Bokeh Glow */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#173D32] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>3. Illumination & Fairy Glow</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'fairy-chandelier',
                      title: 'Fairy Bokeh & Chandeliers',
                      desc: 'Canopy of glowing fairy lights with central warm amber chandelier (From Image)',
                      tag: 'Ethereal Glow',
                    },
                    {
                      id: 'candle-lantern',
                      title: 'Candlelit Hurricanes',
                      desc: 'Glass hurricane cylinders with flickering ivory tapers and soft amber glow',
                      tag: 'Intimate Flame',
                    },
                    {
                      id: 'starlit-canopy',
                      title: 'Starlit Edison Bulbs',
                      desc: 'Hanging vintage Edison filament bulbs over long banqueting table',
                      tag: 'Rustic Golden',
                    },
                  ].map((light) => (
                    <button
                      key={light.id}
                      type="button"
                      onClick={() => setSelectedLighting(light.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative ${
                        selectedLighting === light.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10 shadow-md ring-2 ring-[#C6A15B]/50'
                          : 'border-neutral-200 bg-white hover:border-[#C6A15B]/50 hover:bg-neutral-50'
                      }`}
                    >
                      {selectedLighting === light.id && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#173D32] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-1">
                        {light.tag}
                      </div>
                      <div className="font-semibold text-sm text-[#173D32] mb-1">{light.title}</div>
                      <div className="text-xs text-neutral-600 leading-snug">{light.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Summary Card */}
              <div className="p-4 rounded-xl bg-white border border-[#C6A15B]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#0E2921] text-[#E6C280] flex items-center justify-center flex-shrink-0 shadow">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#173D32] uppercase tracking-wider">
                      Selected Bespoke Theme
                    </div>
                    <div className="text-sm font-semibold text-[#0E2921]">
                      {selectedCanopy === 'blush-rose'
                        ? 'Blush Rose Canopy'
                        : selectedCanopy === 'royal-gold'
                        ? 'Royal Marigold Canopy'
                        : 'Enchanted Wisteria'}{' '}
                      +{' '}
                      {selectedSeating === 'gold-chiavari'
                        ? 'Gold Chiavari'
                        : selectedSeating === 'french-cane'
                        ? 'French Louis Cane'
                        : 'Rustic Oak'}{' '}
                      +{' '}
                      {selectedLighting === 'fairy-chandelier'
                        ? 'Fairy Bokeh Chandeliers'
                        : selectedLighting === 'candle-lantern'
                        ? 'Hurricane Candles'
                        : 'Starlit Edison Glow'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                    Curated By Knot & Plot
                  </span>
                  <span className="text-xs font-semibold text-[#173D32]">Included in Celebration Packages</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-neutral-100 px-6 py-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsDecorModalOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Close Preview
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsDecorModalOpen(false);
                  onPlanCelebration();
                }}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#173D32] hover:bg-[#0E2921] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#E6C280]" />
                <span>Apply & Consult With Event Stylist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
