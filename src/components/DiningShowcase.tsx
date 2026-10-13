import React, { useState } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { 
  Utensils, 
  Sparkles, 
  ChefHat, 
  Check, 
  ArrowRight, 
  Wine, 
  Flame, 
  ShieldCheck, 
  Heart, 
  Leaf, 
  Coffee,
  Crown,
  BookOpen
} from 'lucide-react';

interface DiningShowcaseProps {
  onOpenEnquiry: (details?: string) => void;
}

interface BanquetExperience {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  cuisineType: string;
  image: string;
  chefSpecial: string;
  highlightItems: { name: string; desc: string; isMustTry?: boolean }[];
  beveragePairing: string;
}

export const DiningShowcase: React.FC<DiningShowcaseProps> = ({ onOpenEnquiry }) => {
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const banquetExperiences: BanquetExperience[] = [
    {
      id: "royal-satvik",
      name: "The Imperial Satvik & Shahi Thali",
      subtitle: "Sacred Vegetarian Heritage",
      tagline: "Slow-simmered in copper degs with Kashmiri saffron and heritage farm churned ghee.",
      cuisineType: "100% Pure Vegetarian & Jain Certified",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
      chefSpecial: "24-Hour Dum Bukhara Dal & Zafrani Kesari Paneer",
      highlightItems: [
        { name: "24-Hour Dal Bukhara", desc: "Slow-cooked black lentils simmered overnight over slow charcoal embers with fresh churned white butter.", isMustTry: true },
        { name: "Zafrani Paneer Korma", desc: "Silken cottage cheese infused with organic Kashmiri saffron and hand-pounded royal spices.", isMustTry: true },
        { name: "Avadh Subz Dum Biryani", desc: "Long-grain aged basmati rice layered with fragrant seasonal vegetables and floral kewra water in sealed clay handis.", isMustTry: false },
        { name: "Kesar Phirni in Clay Earthen Pots", desc: "Chilled ground rice pudding perfumed with cardamom and edible 24k silver leaf." }
      ],
      beveragePairing: "Chilled Rooh Afza Vetiver Sherbet & Masala Buttermilk"
    },
    {
      id: "live-bazaars",
      name: "Interactive Live Chaat & Street Pavilions",
      subtitle: "Thematic Street Spectacle",
      tagline: "Sizzling iron tawas, charcoal embers, and live gastronomic theatrical flair.",
      cuisineType: "Interactive Live Counters",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      chefSpecial: "Live Benarasi Tamatar Chaat & Flaming Charcoal Kebabs",
      highlightItems: [
        { name: "Benaras Tamatar Chaat Tawa", desc: "Spiced heirloom tomato relish served piping hot in earthen kulhads with crisp namak para.", isMustTry: true },
        { name: "Charcoal Sigri Malai Broccoli", desc: "Tender broccoli florets marinated in cardamom cream, roasted over open hickory coals.", isMustTry: false },
        { name: "Wood-Fired Neapolitan Pizzas", desc: "48-hour fermented sourdough with San Marzano tomatoes, buffalo bocconcini, and fresh estate basil.", isMustTry: true },
        { name: "Amritsari Chole Kulche Cart", desc: "Spicy dark chickpeas with onion chutney and blistered tandoori butter kulchas." }
      ],
      beveragePairing: "Smoked Jamun Spritzer & Live Tender Coconut Water Counter"
    },
    {
      id: "nizam-awadh",
      name: "The Royal Awadhi & Mughlai Banquet",
      subtitle: "Palatial Aristocratic Feasts",
      tagline: "Heirloom recipes passed down through royal khansamas and court banquet masters.",
      cuisineType: "Regal Mughlai & Tandoor",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      chefSpecial: "Melt-in-Mouth Galouti Kebab on Warqi Paratha",
      highlightItems: [
        { name: "Silken Galouti Kebabs", desc: "Infused with 160 secret aromatic herbs, smoked with cloves, melting effortlessly on your palate.", isMustTry: true },
        { name: "Murg Dum Pukht Lazeez", desc: "Tender chicken simmered in rich cashew and caramelized onion gravy under gentle dough-sealed steam.", isMustTry: true },
        { name: "Warqi Sheermal & Bakarkhani", desc: "Saffron-brushed flaky flatbreads baked in traditional charcoal tandoors.", isMustTry: false },
        { name: "Shahi Tukda with Rabri Mousse", desc: "Crisp ghee-fried toast steeped in fragrant condensed milk topped with Iranian pistachios." }
      ],
      beveragePairing: "Pomegranate Cinnamon Cordial & Saffron Kahwa"
    },
    {
      id: "dessert-garden",
      name: "The Imperial Sweet & Halwai Pavilion",
      subtitle: "Sweet Endings Under The Stars",
      tagline: "Live jalebi stations, nitrogen dessert spectacles, and artisanal bakery carts.",
      cuisineType: "Live Celebration Confectionery",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      chefSpecial: "Live Crispy Saffron Jalebi with Chilled Laccha Rabri",
      highlightItems: [
        { name: "Live Golden Jalebi & Rabri", desc: "Piped fresh into bubbling desi ghee and served warm alongside thick cardamom malai rabri.", isMustTry: true },
        { name: "Gulab Jamun Flambé", desc: "Warm mawa dumplings flambéed with orange liqueur tableside under the evening sky.", isMustTry: true },
        { name: "Artisanal Matka Kulfi Cart", desc: "Natural Malai, Paan, and Alfonso Mango kulfis hand-churned in traditional ice pots.", isMustTry: false },
        { name: "French Macaron & Truffle Tower", desc: "Handcrafted patisserie bites with Belgian chocolate ganache and berry infusions." }
      ],
      beveragePairing: "Hot Kashmiri Pink Chai & Warm Masala Badam Milk"
    }
  ];

  const current = banquetExperiences[activeExperience];

  return (
    <section id="dining" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#C6A15B]/25">
      {/* Decorative leaf watermarks */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-15 pointer-events-none">
        <Leaf className="w-full h-full text-[#173D32]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Calligraphy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#173D32] font-semibold">
              The Royal Culinary Experience
            </span>
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-[#173D32] tracking-tight mb-2">
            The Saffron Banquet & Dining
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#C6A15B] font-normal my-2">
            A Feast of Royal Flavours & Unhurried Hospitality
          </p>

          <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl mx-auto mt-3">
            At The Grand Veda, food is not merely served — it is celebrated. From generational heirloom Indian recipes to live interactive culinary bazaars, our master chefs curate bespoke feasts for weddings, receptions, and fine gatherings.
          </p>
        </div>

        {/* 3 Core Culinary Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-[#C6A15B]/30 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/40 flex items-center justify-center mb-4 text-[#173D32]">
              <ShieldCheck className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#173D32] mb-1.5">
              100% Segregated Sacred Kitchens
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Completely separate kitchens, cookware, and dedicated culinary teams for pure vegetarian, Satvik, and Jain ceremonial wedding banquets.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#C6A15B]/30 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/40 flex items-center justify-center mb-4 text-[#173D32]">
              <Flame className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#173D32] mb-1.5">
              Thematic Live Cooking Theatres
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Interactive chaat bazaars, charcoal sigri grills, wood-fired sourdough pizzas, and tableside flambé dessert stations for guest delight.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#C6A15B]/30 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/40 flex items-center justify-center mb-4 text-[#173D32]">
              <ChefHat className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#173D32] mb-1.5">
              Private Executive Chef Tasting
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Sit down with our Executive Chef before your celebration to taste, refine spice balances, and incorporate beloved family heirloom dishes.
            </p>
          </div>
        </div>

        {/* Master Culinary Experience Showcase Tabs */}
        <div className="bg-white rounded-3xl border border-[#C6A15B]/35 shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          {/* Experience Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 pb-6 border-b border-[#F0EAE1]">
            {banquetExperiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => {
                  setActiveExperience(idx);
                  setSelectedDish(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeExperience === idx
                    ? 'bg-[#173D32] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#444444] hover:bg-[#F2ECE1] border border-[#C6A15B]/30'
                }`}
              >
                {exp.name}
              </button>
            ))}
          </div>

          {/* Active Banquet Details Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image with Signature Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-lg">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#173D32]/90 backdrop-blur-md text-[#E6C280] text-[11px] font-semibold uppercase tracking-wider rounded-full border border-white/10">
                    {current.cuisineType}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-1.5 text-[#E6C280] text-xs font-semibold mb-1">
                    <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Chef’s Must-Taste Signature:</span>
                  </div>
                  <p className="text-sm font-serif font-bold leading-tight">
                    {current.chefSpecial}
                  </p>
                </div>
              </div>

              {/* Beverage Pairing Box */}
              <div className="mt-4 p-4 rounded-xl bg-[#FCFAF6] border border-[#C6A15B]/30 flex items-center space-x-3">
                <Wine className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#888888] uppercase tracking-wider block font-semibold text-[10px]">
                    Signature Beverage Pairing
                  </span>
                  <span className="font-serif font-semibold text-[#173D32]">
                    {current.beveragePairing}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Menu Items & Tasting Notes */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] block mb-1">
                  {current.subtitle}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif text-[#173D32] font-semibold mb-2">
                  {current.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6 font-light italic">
                  "{current.tagline}"
                </p>

                {/* Highlight Dishes Grid */}
                <div className="space-y-3.5 mb-8">
                  {current.highlightItems.map((dish, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedDish(dish.name === selectedDish ? null : dish.name)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        selectedDish === dish.name
                          ? 'bg-[#FCFAF6] border-[#C6A15B] shadow-sm'
                          : 'bg-white border-[#EFE8DD] hover:border-[#C6A15B]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <Utensils className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <h4 className="font-serif font-bold text-sm text-[#173D32]">
                            {dish.name}
                          </h4>
                        </div>
                        {dish.isMustTry && (
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#C6A15B]/15 text-[#173D32] border border-[#C6A15B]/30">
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#555555] font-light leading-relaxed pl-5">
                        {dish.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#888888] font-light text-center sm:text-left">
                  Tasting sessions arranged with Executive Chef upon event booking confirmation.
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry(`Custom Banquet Tasting: ${current.name}`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#173D32] hover:bg-[#0E2921] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <ChefHat className="w-4 h-4 text-[#C6A15B]" />
                    <span>Book Menu Tasting</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Slogan Ribbon */}
          <div className="mt-12 pt-6 border-t border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>Cuisine styles: Shahi Awadhi • Vedic Satvik • Marwari & Gujarati • Coastal • Contemporary Pan-Asian</span>
            </div>
            <a
              href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda,%20please%20share%20the%20royal%20banquet%20menu%20options`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173D32] hover:text-[#C6A15B] font-semibold underline underline-offset-4 flex items-center space-x-1"
            >
              <span>Download Royal Menu PDF</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
