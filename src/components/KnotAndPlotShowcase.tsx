import React, { useState } from 'react';
import { Sparkles, Heart, Check, Calendar, MessageCircle, Star, Palette, ChevronRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

interface KnotAndPlotShowcaseProps {
  onPlanCelebration: (notes?: string) => void;
}

export const KnotAndPlotShowcase: React.FC<KnotAndPlotShowcaseProps> = ({ onPlanCelebration }) => {
  const [activeTab, setActiveTab] = useState<'canopy' | 'tablescape' | 'illumination'>('canopy');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const stylingHighlights = [
    {
      id: 1,
      title: 'Draped Garden Canopy',
      x: '28%',
      y: '14%',
      desc: 'Silk chiffon drapes with cascading blush roses and lush eucalyptus garlands.',
    },
    {
      id: 2,
      title: 'Warm Crystal Chandelier',
      x: '50%',
      y: '26%',
      desc: 'Suspended brass-framed crystal chandelier glowing with warm 2700K fairy light bokeh.',
    },
    {
      id: 3,
      title: 'Candlelit Banquet Tablescape',
      x: '50%',
      y: '74%',
      desc: 'Gilded Chiavari chairs, fine cut glassware, polished silver cutlery & rose centerpieces.',
    },
  ];

  return (
    <section id="knot-and-plot" className="relative py-20 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle Botanical Watermark Background */}
      <div className="absolute inset-0 botanical-watermark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Kicker & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#173D32]/10 border border-[#C6A15B]/30 mb-4">
            <div className="w-6 h-6 rounded bg-white border border-[#E6C280] shadow-sm flex items-center justify-center">
              <span className="font-serif font-bold text-[10px] bg-gradient-to-br from-[#9333EA] to-[#EA580C] bg-clip-text text-transparent">
                KP
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#173D32] font-semibold">
              Signature Event Styling Atelier
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-script text-[#173D32] tracking-normal mb-3">
            Knot & Plot Event Planners
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-[#C6A15B] italic font-medium mb-4">
            Where Your Dream Events Unfold
          </p>

          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            In exclusive collaboration with The Grand Veda Estate, Knot & Plot designs ethereal wedding mandaps, 
            fairytale lawn canopies, and enchanting candlelit tablescapes tailored to your royal celebration.
          </p>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Photograph with Hotspots (6 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/assets/knot-and-plot-hero.jpg"
                alt="Knot & Plot Event Planners Draped Canopy & Tablescape"
                className="w-full h-[440px] sm:h-[520px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Hotspots */}
              {stylingHighlights.map((spot) => (
                <div
                  key={spot.id}
                  style={{ left: spot.x, top: spot.y }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    className="relative w-8 h-8 rounded-full bg-white/90 text-[#173D32] border-2 border-[#C6A15B] shadow-xl flex items-center justify-center transition-all hover:scale-125 focus:outline-none"
                    aria-label={spot.title}
                  >
                    <Sparkles className="w-4 h-4 text-[#C6A15B] animate-spin-slow" />
                    <span className="absolute -inset-1 rounded-full bg-white/40 animate-ping pointer-events-none" />
                  </button>

                  {/* Hotspot Popover */}
                  {activeHotspot === spot.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-64 p-3.5 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-[#C6A15B]/40 text-left z-30 animate-fade-in">
                      <div className="text-xs font-bold text-[#173D32] mb-1 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
                        <span>{spot.title}</span>
                      </div>
                      <p className="text-[11px] text-neutral-600 leading-snug">{spot.desc}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-white flex items-center justify-between">
                <span className="text-xs font-medium tracking-wide">
                  ✨ Interactive Decor Preview: Tap markers to inspect details
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6C280] hidden sm:inline">
                  Est. 2026 Edition
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Styling Pillars & Customization Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Tab Selectors */}
            <div className="flex rounded-xl bg-white p-1.5 border border-[#C6A15B]/30 shadow-sm">
              <button
                onClick={() => setActiveTab('canopy')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'canopy'
                    ? 'bg-[#173D32] text-white shadow'
                    : 'text-neutral-600 hover:text-[#173D32]'
                }`}
              >
                Floral Canopies
              </button>
              <button
                onClick={() => setActiveTab('tablescape')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'tablescape'
                    ? 'bg-[#173D32] text-white shadow'
                    : 'text-neutral-600 hover:text-[#173D32]'
                }`}
              >
                Tablescaping
              </button>
              <button
                onClick={() => setActiveTab('illumination')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'illumination'
                    ? 'bg-[#173D32] text-white shadow'
                    : 'text-neutral-600 hover:text-[#173D32]'
                }`}
              >
                Bokeh & Fairy Lights
              </button>
            </div>

            {/* Tab Content Cards */}
            <div className="p-6 rounded-2xl bg-white border border-[#C6A15B]/30 shadow-lg">
              {activeTab === 'canopy' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                    <Sparkles className="w-4 h-4" />
                    <span>Signature Draped Canopies</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                    Blush Chiffon & Cascading Garden Florals
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    Transforming the Shahi Lawn into an intimate royal garden pavilion. We construct high-tensile 
                    arched canopies draped in cloud-white chiffon, crowned with scented Dutch blush roses, hydrangeas, 
                    and cascading eucalyptus garlands.
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Custom color palettes matched to bride & groom attire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Weatherproof outdoor setup engineered for Nashik Valley breeze</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Fresh morning floral replenishment for multi-day weddings</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'tablescape' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                    <Sparkles className="w-4 h-4" />
                    <span>Artisanal Dining Tablescapes</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                    Gold Chiavari Chairs & Crystal Candlelight
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    Every guest place setting is an experience in itself. From polished brass cutlery to gold-rimmed 
                    charger plates, calligraphed botanical menu cards, and hand-dipped taper candles that flicker 
                    softly across the lawn.
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Gilded Chiavari & French Louis cane back seating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Personalized linen monogramming for the wedding couple</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Low floral runners enabling effortless conversation across tables</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'illumination' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                    <Sparkles className="w-4 h-4" />
                    <span>Twilight Lighting Architecture</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                    Cascading Fairy Bokeh & Amber Chandeliers
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    As twilight settles over the hills, over 10,000 warm amber micro-LED fairy lights awaken, 
                    creating the iconic romantic bokeh captured in our signature photographs. Suspended crystal 
                    chandeliers cast an ethereal, golden glow over the celebration.
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Dimmable ambient control synced to your event itinerary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Photographer-calibrated color temperatures (2700K warm gold)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5B6B54]" />
                      <span>Dedicated backup generator power line for zero flicker</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onPlanCelebration("Inquiry for Knot & Plot Signature Event Styling")}
                  className="flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#173D32] hover:bg-[#0E2921] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-[#E6C280]" />
                  <span>Reserve Knot & Plot Styling</span>
                </button>

                <a
                  href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20Knot%20%26%20Plot%20event%20planning%20at%20The%20Grand%20Veda%20Estate.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-[#173D32] bg-white border border-[#C6A15B] hover:bg-[#FAF7F2] transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#5B6B54]" />
                  <span>WhatsApp Stylist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
