import React, { useState } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { 
  Sparkles, 
  Calculator, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  RefreshCw, 
  Users, 
  Crown, 
  Flame, 
  Music, 
  ShieldCheck, 
  Wine, 
  Leaf,
  Clock
} from 'lucide-react';

interface QuoteCalculatorProps {
  onTransferToEnquiry: (details: {
    eventType: string;
    venue: string;
    guests: number;
    cateringPlan: string;
    estimatedCost: number;
  }) => void;
  onClose?: () => void;
}

export const InteractiveQuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onTransferToEnquiry,
  onClose,
}) => {
  const [eventType, setEventType] = useState('Grand Royal Wedding & Sangeet');
  const [venue, setVenue] = useState('The Shahi Marriage Lawn (25,000 sq.ft)');
  const [guests, setGuests] = useState(250);
  const [cateringPlan, setCateringPlan] = useState('Royal Saffron Multi-Cuisine Feast (₹1,650/guest)');
  
  // Custom Bespoke Inclusions
  const [includeFloralMandap, setIncludeFloralMandap] = useState(true);
  const [includeLightCanopy, setIncludeLightCanopy] = useState(true);
  const [includeBridalSuite, setIncludeBridalSuite] = useState(true);
  const [includeLiveMusic, setIncludeLiveMusic] = useState(false);
  const [includeRoyalValet, setIncludeRoyalValet] = useState(true);

  // Pricing calculations
  const venueBaseCosts: Record<string, number> = {
    'The Shahi Marriage Lawn (25,000 sq.ft)': 250000,
    'The Grand Crystal AC Banquet (8,500 sq.ft)': 180000,
    'The Sunset Terrace Gazebo (3,800 sq.ft)': 75000,
    'The Palms Poolside Deck (5,500 sq.ft)': 95000,
  };

  const cateringPlateRates: Record<string, { price: number; desc: string }> = {
    'Satvik Imperial Silver Thali (₹1,250/guest)': {
      price: 1250,
      desc: '100% Pure Vegetarian & Jain Certified slow-simmered regional delicacy thali'
    },
    'Royal Saffron Multi-Cuisine Feast (₹1,650/guest)': {
      price: 1650,
      desc: 'Grand banquet featuring Awadhi, Pan-Indian, Live Chaat pavilions & continental stations'
    },
    'Maharaja Emperor Tasting Banquet (₹2,150/guest)': {
      price: 2150,
      desc: 'Lavish multi-course gala with signature kebabs, live tawa dessert theatre & imported infusions'
    },
  };

  const venueCost = venueBaseCosts[venue] || 250000;
  const plateRate = cateringPlateRates[cateringPlan]?.price || 1650;
  const foodCost = guests * plateRate;
  
  const floralCost = includeFloralMandap ? (eventType.includes('Wedding') ? 95000 : 45000) : 0;
  const lightCost = includeLightCanopy ? 45000 : 0;
  const suiteCost = includeBridalSuite ? 22000 : 0;
  const musicCost = includeLiveMusic ? 28000 : 0;
  const valetCost = includeRoyalValet ? 18000 : 0;

  const totalEstimatedCost = venueCost + foodCost + floralCost + lightCost + suiteCost + musicCost + valetCost;

  const handleWhatsAppSend = () => {
    const message = `Hello The Grand Veda, I generated a custom celebration plan on your website:%0A%0A*Occasion:* ${encodeURIComponent(eventType)}%0A*Venue:* ${encodeURIComponent(venue)}%0A*Expected Guests:* ${guests}%0A*Catering Tier:* ${encodeURIComponent(cateringPlan)}%0A*Estimated Total:* ₹${totalEstimatedCost.toLocaleString('en-IN')}%0A%0APlease check auspicious date availability and invite us for a personal consultation.`;
    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleProceedToForm = () => {
    onTransferToEnquiry({
      eventType,
      venue,
      guests,
      cateringPlan,
      estimatedCost: totalEstimatedCost,
    });
  };

  return (
    <div className="parchment-card rounded-3xl border-2 border-[#C6A15B]/40 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
      
      {/* Decorative Wax Seal Stamp on Ledger Corner */}
      <div className="absolute top-6 right-6 hidden sm:flex items-center space-x-2">
        <div className="w-11 h-11 rounded-full wax-seal flex items-center justify-center shadow-lg">
          <span className="text-white font-serif text-[11px] font-bold">GV</span>
        </div>
      </div>

      {/* Header Block with Antique Royal Flourish */}
      <div className="pb-6 border-b border-[#C6A15B]/25">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#173D32] uppercase tracking-[0.25em] mb-1">
          <Crown className="w-4 h-4 text-[#C6A15B]" />
          <span>The Grand Veda Celebration Ledger</span>
        </div>
        
        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#173D32] tracking-tight">
          Interactive Celebration Budget Estimator
        </h3>
        
        <p className="font-script text-2xl sm:text-3xl text-[#C6A15B] my-1 font-normal">
          Transparent, Tailored & Beautifully Planned
        </p>

        <p className="text-xs sm:text-sm text-[#666666] font-light max-w-2xl">
          Customize your guest attendance, palatial lawns, royal catering tiers, and ceremony styling for real-time itemized clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
        
        {/* Left Inputs (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Event Type Selector */}
          <div>
            <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              1. Celebration Occasion
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-[#C6A15B]/30 bg-white p-3 text-[#222222] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none shadow-sm font-medium"
            >
              <option value="Grand Royal Wedding & Sangeet">Grand Royal Baarat Wedding & Sangeet</option>
              <option value="Sunset Ring Ceremony & Engagement">Sunset Ring Ceremony & Engagement Soiree</option>
              <option value="Multi-Generational Family Reunion">Multi-Generational Family Reunion & Lawn Feast</option>
              <option value="Milestone Jubilee Anniversary">Silver / Golden Jubilee Wedding Anniversary</option>
              <option value="Palatial Birthday Gala">Milestone Birthday Gala & Poolside Soiree</option>
            </select>
          </div>

          {/* 2. Venue Selection */}
          <div>
            <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              2. Celebration Grounds & Venue
            </label>
            <select
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-[#C6A15B]/30 bg-white p-3 text-[#222222] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none shadow-sm font-medium"
            >
              <option value="The Shahi Marriage Lawn (25,000 sq.ft)">The Shahi Marriage Lawn (25,000 sq.ft • Up to 1,500 Guests)</option>
              <option value="The Grand Crystal AC Banquet (8,500 sq.ft)">The Grand Crystal AC Banquet (8,500 sq.ft • Up to 600 Guests)</option>
              <option value="The Palms Poolside Deck (5,500 sq.ft)">The Palms Poolside Deck (5,500 sq.ft • Up to 200 Guests)</option>
              <option value="The Sunset Terrace Gazebo (3,800 sq.ft)">The Sunset Terrace Gazebo (3,800 sq.ft • Up to 120 Guests)</option>
            </select>
          </div>

          {/* 3. Guest Count Slider & Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#173D32] uppercase tracking-wider">
                3. Expected Guest Count: <span className="text-[#C6A15B] text-lg font-serif font-bold ml-1">{guests} Guests</span>
              </label>
              <span className="text-[11px] text-[#888888]">Scale: 30 to 1,200</span>
            </div>

            <input
              type="range"
              min="30"
              max="1200"
              step="10"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#C6A15B] h-2 bg-[#EAE2D5] rounded-lg cursor-pointer"
            />

            {/* Quick Preset Buttons */}
            <div className="flex items-center gap-2 mt-2">
              {[50, 150, 350, 600, 1000].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setGuests(num)}
                  className={`px-2.5 py-1 text-[10px] rounded-lg font-semibold transition-all ${
                    guests === num
                      ? 'bg-[#173D32] text-white shadow-xs'
                      : 'bg-white text-[#555555] border border-[#E0D5C3] hover:border-[#C6A15B]'
                  }`}
                >
                  {num} {num <= 60 ? 'Intimate' : num >= 600 ? 'Palatial' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Royal Catering Tier */}
          <div>
            <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              4. Royal Banquet Dining Tier
            </label>
            <div className="space-y-2.5">
              {Object.entries(cateringPlateRates).map(([planName, data]) => (
                <label
                  key={planName}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    cateringPlan === planName
                      ? 'border-[#C6A15B] bg-[#FCFAF6] text-[#173D32] font-semibold shadow-sm'
                      : 'border-[#EAE2D5] bg-white hover:bg-[#FAF7F2] text-[#444444]'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-2.5">
                    <input
                      type="radio"
                      name="cateringPlan"
                      checked={cateringPlan === planName}
                      onChange={() => setCateringPlan(planName)}
                      className="accent-[#C6A15B] mt-0.5 sm:mt-0"
                    />
                    <div>
                      <span className="block font-medium">{planName}</span>
                      <span className="text-[10px] text-[#777777] font-normal block">{data.desc}</span>
                    </div>
                  </div>
                  <span className="tabular-nums font-serif text-sm font-bold text-[#173D32] mt-1 sm:mt-0 shrink-0 sm:pl-3">
                    ₹{(guests * data.price).toLocaleString('en-IN')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. Production & Ceremony Inclusions */}
          <div>
            <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              5. Production & Bespoke Ceremony Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#EAE2D5] bg-white cursor-pointer hover:border-[#C6A15B]">
                <input
                  type="checkbox"
                  checked={includeFloralMandap}
                  onChange={(e) => setIncludeFloralMandap(e.target.checked)}
                  className="accent-[#C6A15B]"
                />
                <span className="text-[11px] font-medium text-[#222222]">Vedic Floral Mandap Architecture</span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#EAE2D5] bg-white cursor-pointer hover:border-[#C6A15B]">
                <input
                  type="checkbox"
                  checked={includeLightCanopy}
                  onChange={(e) => setIncludeLightCanopy(e.target.checked)}
                  className="accent-[#C6A15B]"
                />
                <span className="text-[11px] font-medium text-[#222222]">Starlight Fairy Canopy & Chandeliers</span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#EAE2D5] bg-white cursor-pointer hover:border-[#C6A15B]">
                <input
                  type="checkbox"
                  checked={includeBridalSuite}
                  onChange={(e) => setIncludeBridalSuite(e.target.checked)}
                  className="accent-[#C6A15B]"
                />
                <span className="text-[11px] font-medium text-[#222222]">Bridal Preparation Suite (Full Day)</span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#EAE2D5] bg-white cursor-pointer hover:border-[#C6A15B]">
                <input
                  type="checkbox"
                  checked={includeLiveMusic}
                  onChange={(e) => setIncludeLiveMusic(e.target.checked)}
                  className="accent-[#C6A15B]"
                />
                <span className="text-[11px] font-medium text-[#222222]">Live Flute & Acoustic Sitar Ensemble</span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#EAE2D5] bg-white cursor-pointer hover:border-[#C6A15B] sm:col-span-2">
                <input
                  type="checkbox"
                  checked={includeRoyalValet}
                  onChange={(e) => setIncludeRoyalValet(e.target.checked)}
                  className="accent-[#C6A15B]"
                />
                <span className="text-[11px] font-medium text-[#222222]">Royal Valet Parking & Chauffeur Fleet Management (300+ Cars)</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Ledger Summary Card (5 Columns) */}
        <div className="lg:col-span-5 bg-[#173D32] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl border-2 border-[#C6A15B]/40 relative">
          
          <div>
            {/* Ledger Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Leaf className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="text-xs uppercase tracking-widest text-[#E6C280] font-bold">
                  Bespoke Plan Ledger
                </span>
              </div>
              <span className="text-[11px] text-white/80 font-mono">
                {guests} Cherished Guests
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-3.5 my-6 text-xs">
              <div className="flex justify-between text-neutral-200">
                <span>Venue Lease & Base Lighting</span>
                <span className="font-mono tabular-nums text-white font-semibold">₹{venueCost.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between text-neutral-200">
                <span>Royal Catering ({guests} × ₹{plateRate})</span>
                <span className="font-mono tabular-nums text-white font-semibold">₹{foodCost.toLocaleString('en-IN')}</span>
              </div>

              {includeFloralMandap && (
                <div className="flex justify-between text-neutral-200">
                  <span>Ceremonial Floral Architecture</span>
                  <span className="font-mono tabular-nums text-[#E6C280] font-semibold">₹{floralCost.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeLightCanopy && (
                <div className="flex justify-between text-neutral-200">
                  <span>Starlight Fairy Canopy Truss</span>
                  <span className="font-mono tabular-nums text-[#E6C280] font-semibold">₹{lightCost.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeBridalSuite && (
                <div className="flex justify-between text-neutral-200">
                  <span>Bridal Sanctuary Villa Day-Use</span>
                  <span className="font-mono tabular-nums text-[#E6C280] font-semibold">₹{suiteCost.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeLiveMusic && (
                <div className="flex justify-between text-neutral-200">
                  <span>Live Sitar & Melodic Ensemble</span>
                  <span className="font-mono tabular-nums text-[#E6C280] font-semibold">₹{musicCost.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeRoyalValet && (
                <div className="flex justify-between text-neutral-200">
                  <span>Uniformed Valet & Escort Crew</span>
                  <span className="font-mono tabular-nums text-[#E6C280] font-semibold">₹{valetCost.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            {/* Total Block */}
            <div className="pt-5 border-t border-white/20">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#E6C280] font-bold block">
                    Indicative Celebration Total
                  </span>
                  <span className="text-[10px] text-neutral-300">All inclusions outlined above</span>
                </div>

                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E6C280] tabular-nums">
                    ₹{totalEstimatedCost.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-neutral-300 block">+ applicable GST taxes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
            <button
              onClick={handleProceedToForm}
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C6A15B] text-[#173D32] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Transfer Plan to Enquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppSend}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-emerald-800 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-2 border border-emerald-600/40"
            >
              <MessageCircle className="w-4 h-4 text-[#E6C280]" />
              <span>Share Quote on WhatsApp</span>
            </button>

            <p className="text-[10px] text-neutral-300 text-center leading-relaxed italic">
              Estimated pricing for planning reference. Final dates and customized chef menus locked during in-person estate consultation.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
