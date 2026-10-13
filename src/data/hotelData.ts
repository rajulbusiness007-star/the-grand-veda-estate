export interface RoomItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  bedType: string;
  size: string;
  view: string;
  pricePerNight: number;
  currency: string;
  isPriceVerified: boolean;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface VenueItem {
  id: string;
  category: 'weddings' | 'birthdays' | 'anniversaries' | 'receptions' | 'banquet';
  name: string;
  tagline: string;
  description: string;
  capacityRange: string;
  area: string;
  type: 'Outdoor Lawn' | 'Indoor AC Banquet' | 'Terrace Gazebo' | 'Poolside Pavilion';
  bestFor: string[];
  facilities: string[];
  image: string;
  gallery: string[];
  packageStartingAt?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  eventType: string;
  date: string;
  rating: number;
  quote: string;
  verifiedGuest: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Booking' | 'Venues & Decor' | 'Catering' | 'Policies';
}

export interface CateringMenuCategory {
  categoryName: string;
  items: { name: string; description: string; isChefSpecial?: boolean }[];
}

export const HOTEL_CONFIG = {
  name: "The Grand Veda Estate & Celebration Resort",
  shortName: "The Grand Veda",
  tagline: "Where Luxury Meets Every Celebration",
  subTagline: "Your Perfect Stay. Your Unforgettable Celebration.",
  phone: "+91 98200 45678",
  displayPhone: "+91 98200 45678",
  whatsappNumber: "919820045678",
  email: "celebrations@grandvedaresort.com",
  receptionHours: "Open 24/7 for Reservations & Front Desk",
  officeHours: "Event Planning Consultations: 9:00 AM – 8:00 PM Daily",
  address: "Grand Veda Hillside Estate, Heritage Valley Road, Nashik Valley, Maharashtra 422003",
  googleMapsUrl: "https://maps.google.com/?q=Nashik+Valley+Resort",
  googleReviewsUrl: "https://www.google.com/search?q=The+Grand+Veda+Estate+Reviews",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  currency: "₹",
  placeholderNotice: "All contact details, prices, and venue capacities are editable placeholder defaults ready for hotel ownership confirmation."
};

export const HERO_SLIDES = [
  {
    id: "slide-knot-plot",
    title: "Knot & Plot Event Planners",
    subtitle: "Where Your Dream Events Unfold",
    badge: "Bespoke Event Styling",
    image: "/assets/knot-and-plot-hero.jpg",
    theme: "Draped Floral Canopy & Candlelit Tablescapes",
    capacity: "Curated Dream Celebrations",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Customize Decor",
    isKnotAndPlot: true,
  },
  {
    id: "slide-1",
    title: "Celebrate, Gather & Stay",
    subtitle: "A Beautiful Setting for Unforgettable Moments. Where royal heritage meets heartfelt hospitality.",
    badge: "The Grand Veda Estate",
    image: "/assets/estate-hero.jpg",
    theme: "Royal Heritage Palace & Lawns",
    capacity: "Up to 1,500 Guests",
    ctaPrimary: "Plan Your Celebration",
    ctaSecondary: "Reserve Palatial Suite"
  },
  {
    id: "slide-2",
    title: "Where Royal Luxury Meets Celebration",
    subtitle: "Magnificent open-air marriage lawns, illuminated mandap stages & bespoke royal wedding decor.",
    badge: "Weddings & Grand Receptions",
    image: "/assets/wedding.jpg",
    theme: "Royal Shahi Marriage Lawn",
    capacity: "Up to 1,500 Guests",
    ctaPrimary: "Plan Your Celebration",
    ctaSecondary: "Explore Wedding Lawns"
  },
  {
    id: "slide-3",
    title: "The Grand Crystal Ballroom & Banquets",
    subtitle: "8,500 sq.ft of climate-controlled luxury, crystal chandeliers, and lavish multi-cuisine feasts.",
    badge: "Royal Crystal Banquet Hall",
    image: "/assets/banquet.jpg",
    theme: "The Grand Crystal Hall",
    capacity: "150 to 600 Guests",
    ctaPrimary: "Book Banquet Hall",
    ctaSecondary: "Download Floorplans"
  },
  {
    id: "slide-4",
    title: "Sanctuary of Comfort & Palatial Suites",
    subtitle: "Handcrafted four-poster beds, arched windows, hillside verandas & personal butler care.",
    badge: "Royal Suites & Heritage Rooms",
    image: "/assets/suite.jpg",
    theme: "Presidential & Bridal Suites",
    capacity: "48 Luxury Suites",
    ctaPrimary: "Book Your Stay",
    ctaSecondary: "Check Availability"
  },
  {
    id: "slide-5",
    title: "Romantic Evenings Under Starry Canopies",
    subtitle: "Private candlelit anniversary terraces, personalized 5-course culinary journeys & acoustic melodies.",
    badge: "Anniversaries & Private Dinners",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85",
    theme: "Sunset Terrace Gazebo",
    capacity: "Intimate 2 to 60 Guests",
    ctaPrimary: "Reserve An Intimate Dinner",
    ctaSecondary: "View Dining Options"
  },
  {
    id: "slide-6",
    title: "Joyous Milestones & Family Celebrations",
    subtitle: "Custom-curated themed celebrations, vibrant garden pavilions, DJ soundscapes & dessert wonders.",
    badge: "Birthday & Family Celebrations",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85",
    theme: "The Palms Poolside & Lawn",
    capacity: "40 to 250 Guests",
    ctaPrimary: "Plan a Birthday Party",
    ctaSecondary: "Get Event Quote"
  }
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "deluxe-garden-room",
    name: "Deluxe Heritage Garden Room",
    tagline: "Serene garden views with artisanal comforts",
    description: "Nestled amidst fragrant jasmine courtyards, these spacious rooms feature handcrafted teakwood furnishings, high-speed Wi-Fi, premium Egyptian cotton linens, and a quiet private terrace overlooking the lawn.",
    capacity: "Up to 2 Adults + 1 Child",
    bedType: "1 Plush King Bed or Twin Beds",
    size: "380 sq.ft / 35 m²",
    view: "Manicured Gardens & Fountains",
    pricePerNight: 9500,
    currency: "₹",
    isPriceVerified: true,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Complimentary Wi-Fi", "Garden Balcony", "Rainfall Shower", "Artisanal Tea Station", "55-inch Smart TV", "In-Room Safe"],
    features: ["Air Conditioning with climate control", "24-hour in-room dining", "Daily housekeeping & evening turn-down", "Plush bathrobes and luxury toiletries"]
  },
  {
    id: "royal-palace-suite",
    name: "Royal Palace Veranda Suite",
    tagline: "Expansive luxury with separate parlor & lawn vistas",
    description: "Designed for discerning guests and wedding families, our Royal Suite includes a separate living lounge, an ornate dressing boudoir, a marble en-suite with soaking tub, and a private veranda facing the wedding grounds.",
    capacity: "Up to 3 Adults or 2 Adults + 2 Children",
    bedType: "1 Hand-carved Emperor King Bed",
    size: "650 sq.ft / 60 m²",
    view: "Grand Marriage Lawn & Mountain Ridge",
    pricePerNight: 16500,
    currency: "₹",
    isPriceVerified: true,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Veranda", "Deep Soaking Jacuzzi Tub", "Separate Living Lounge", "Espresso Machine", "Dedicated Butler Service", "Express Check-in"],
    features: ["Walk-in closet & dressing vanity", "Dual marble vanities", "Welcome champagne & fruit platter", "Complimentary buffet breakfast at restaurant"]
  },
  {
    id: "bridal-sanctuary-suite",
    name: "The Grand Bridal & Groom Suite",
    tagline: "Purpose-built for bridal preparation and celebratory moments",
    description: "A breathtaking sanctuary crafted specifically for brides, grooms, and bridal entourages. Features 3-way makeup illumination mirrors, professional salon styling chairs, expansive gown hanging wardrobes, and direct private ground-floor access to the wedding mandap.",
    capacity: "Up to 4 Guests (Bridal Party)",
    bedType: "1 Master King Bed + Velvet Daybed",
    size: "820 sq.ft / 76 m²",
    view: "Private Courtyard & Mandap Pathway",
    pricePerNight: 22000,
    currency: "₹",
    isPriceVerified: true,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Salon Styling Vanity Station", "3-Way Full-Length Mirrors", "Steamer & Heavy Gown Storage", "Champagne Chiller", "Private Mandap Entryway", "Luxury Aromatherapy Bath"],
    features: ["Dedicated bridal attendant throughout event", "In-suite bridal refreshments and canapés", "Soundproofed lounge for photography & rituals", "Late check-out guaranteed"]
  },
  {
    id: "maharaja-pool-villa",
    name: "The Presidential 2-Bedroom Pool Villa",
    tagline: "The pinnacle of royal privacy with private plunge pool",
    description: "An exclusive detached villa nestled in lush coconut groves. Boasts two master bedrooms, an expansive dining pavilion, a private heated plunge pool, personal chef assistance, and lush private lawns.",
    capacity: "Up to 6 Guests (Families & VIPs)",
    bedType: "2 King En-suite Bedrooms",
    size: "1,450 sq.ft / 135 m²",
    view: "Private Plunge Pool & Forest Canopy",
    pricePerNight: 35000,
    currency: "₹",
    isPriceVerified: true,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Temperature Pool", "Sunken Garden Deck", "Personal Butler & Valet", "Dining Pavilion for 8", "Kitchenette with Sommelier Selection", "Complimentary Airport Transfers"],
    features: ["Exclusive VIP parking & separate entrance", "Customized daily dining menus by Executive Chef", "Priority event venue booking privileges"]
  }
];

export const CELEBRATION_VENUES: VenueItem[] = [
  {
    id: "royal-shahi-garden",
    category: "weddings",
    name: "The Shahi Marriage Garden & Lawn",
    tagline: "A majestic 25,000 sq.ft open-air amphitheater for grand dream weddings",
    description: "Surrounded by manicured royal palm trees and hillside horizons, this vast lush natural turf lawn accommodates opulent mandaps, grand baarat processions, illuminated tree canopies, and lavish multi-buffet pavilions.",
    capacityRange: "300 to 1,500 Guests",
    area: "25,000 sq.ft (2,320 m²)",
    type: "Outdoor Lawn",
    bestFor: ["Grand Weddings", "Mandap & Sangeet", "Grand Receptions", "Varmala Ceremonies"],
    facilities: [
      "Elevated 40-foot illuminated stage with floral truss support",
      "Dedicated Baarat welcome gateway with red carpet",
      "Power backup with 2x 125kVA silent generators",
      "Ample live counter kitchen space with separate vegetarian zone",
      "Valet parking lot directly linked for 250+ cars"
    ],
    image: "/assets/wedding.jpg",
    gallery: [
      "/assets/wedding.jpg",
      "/assets/estate-hero.jpg",
      "/assets/banquet.jpg"
    ],
    packageStartingAt: "₹2,50,000 / day (Lawn rental + basic lighting setup)"
  },
  {
    id: "grand-crystal-banquet",
    category: "banquet",
    name: "The Grand Crystal Banquet Hall",
    tagline: "Pillarless air-conditioned royal hall with crystal chandeliers & acoustic refinement",
    description: "An opulent indoor haven with 18-foot ceiling clearances, Austrian crystal chandeliers, Italian marble pre-function foyer, and state-of-the-art concert acoustic sound system. Ideal in all weather seasons.",
    capacityRange: "150 to 600 Guests",
    area: "8,500 sq.ft (790 m²)",
    type: "Indoor AC Banquet",
    bestFor: ["Indoor Receptions", "Sangeet & Ring Ceremonies", "Cocktail Banquets", "Corporate Galas"],
    facilities: [
      "100% Pillarless view with high-definition laser projectors",
      "Acoustically insulated banquet walls with ambient mood lighting",
      "Grand 2,000 sq.ft pre-function cocktail foyer with bar lounge",
      "Climate controlled central air-conditioning with HEPA air filters",
      "Green rooms for performers and bridal touch-ups"
    ],
    image: "/assets/banquet.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    packageStartingAt: "₹1,80,000 / day (Indoor AC Hall rental)"
  },
  {
    id: "sunset-terrace-gazebo",
    category: "anniversaries",
    name: "The Sunset Terrace Gazebo & Courtyard",
    tagline: "Intimate stone arches, warm candlelight & panoramic valley sunsets",
    description: "Perched along the southern ridge overlooking the valley, this romantic setting features stone balustrades, hanging lanterns, and intimate fairy light drapery. The quintessential space for milestone anniversaries, romantic vow renewals, and fine dining.",
    capacityRange: "20 to 120 Guests",
    area: "3,800 sq.ft (350 m²)",
    type: "Terrace Gazebo",
    bestFor: ["Milestone Anniversaries", "Romantic Dinners", "Intimate Engagements", "Vow Renewals"],
    facilities: [
      "Unobstructed panoramic mountain sunset vista",
      "Custom candlelit dining tables with silver candelabras",
      "Acoustic live music stage (violinist, flutist, acoustic band)",
      "Exclusive sommelier and bespoke plated multi-course dining",
      "Private bar and firepit lounge"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    packageStartingAt: "₹65,000 / event (Exclusive terrace rental & styling)"
  },
  {
    id: "the-palms-poolside-pavilion",
    category: "birthdays",
    name: "The Palms Birthday Pavilion & Poolside Deck",
    tagline: "Chic open-air celebration deck with festive cabanas & live grill stations",
    description: "Surrounded by swaying palms and glowing turquoise water, the poolside pavilion transforms into an electric birthday celebration space for kids, teens, and 50th jubilee milestones alike, complete with thematic styling.",
    capacityRange: "40 to 200 Guests",
    area: "5,500 sq.ft (510 m²)",
    type: "Poolside Pavilion",
    bestFor: ["Milestone Birthdays", "Haldi & Mehendi Parties", "Cocktail Sundowners", "Bachelorette Celebrations"],
    facilities: [
      "Illuminated swimming pool deck with decorative floating florals",
      "Thematic balloon arches, neon signage & photo-booth station",
      "DJ console & dancefloor setup with surround sound",
      "Live pizza oven, tandoor & mocktail bar deck",
      "Cabana lounge seating with waterproof cushioned seating"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    packageStartingAt: "₹85,000 / event (Deck rental + thematic setup)"
  },
  {
    id: "royal-reception-amphitheatre",
    category: "receptions",
    name: "The Heritage Courtyard & Reception Plaza",
    tagline: "Colonial stone architecture framing an elegant, atmospheric grand reception",
    description: "An architectural marvel featuring heritage arches, stone fountains, and an elevated VIP reception platform. Perfect for evening musical nights, sangeet performances, and formal wedding receptions.",
    capacityRange: "150 to 500 Guests",
    area: "9,000 sq.ft (835 m²)",
    type: "Outdoor Lawn",
    bestFor: ["Wedding Receptions", "Sangeet Musical Nights", "Engagement Ceremonies", "Anniversary Galas"],
    facilities: [
      "Colonnaded backdrop with dynamic architectural wash lighting",
      "Tiered seating options and VIP lounge sofa setups",
      "Central fountain feature with fairy-lit water cascades",
      "Dedicated buffet alleyway designed for smooth guest circulation",
      "Direct indoor connection to guest suites for elderly family members"
    ],
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80"
    ],
    packageStartingAt: "₹1,50,000 / day (Courtyard setup & lighting)"
  }
];

export const AMENITIES_LIST = [
  {
    title: "25,000 sq.ft Marriage Lawn",
    description: "Lush green natural turf lawn accommodating up to 1,500 guests with illuminated tree canopies and mandap stage.",
    icon: "Flower2",
    verified: true
  },
  {
    title: "Pillarless AC Banquet Hall",
    description: "8,500 sq.ft climate-controlled royal hall featuring crystal chandeliers, pre-function lobby, and concert acoustics.",
    icon: "Building",
    verified: true
  },
  {
    title: "48 Luxury Rooms & Suites",
    description: "Heritage suites and family villas with plush bedding, private balconies, and dedicated wedding family wings.",
    icon: "BedDouble",
    verified: true
  },
  {
    title: "Royal Multi-Cuisine Catering",
    description: "Certified master chefs offering authentic vegetarian, Jain, Awadhi, and multi-cuisine spreads with live cooking stations.",
    icon: "UtensilsCrossed",
    verified: true
  },
  {
    title: "Valet Parking for 250+ Vehicles",
    description: "Expansive paved parking with 24/7 uniformed valet attendants, security cameras, and EV charging points.",
    icon: "Car",
    verified: true
  },
  {
    title: "Dedicated Bridal & Groom Suites",
    description: "Specialized dressing boudoirs with 3-way makeup mirrors, styling chairs, gown steam closets, and private stage access.",
    icon: "Sparkles",
    verified: true
  },
  {
    title: "High-Speed Wi-Fi & 24/7 Power",
    description: "Dual 125kVA soundproof generator backup guarantees uninterrupted celebrations, lighting, and sound systems.",
    icon: "Zap",
    verified: true
  },
  {
    title: "Accessibility & Golf Cart Shuttle",
    description: "Wheelchair-friendly ramps throughout all venues, elevators in banquet halls, and battery golf carts for elderly guests.",
    icon: "Accessibility",
    verified: true
  },
  {
    title: "In-House Decor & AV Production",
    description: "Experienced creative directors for customized floral themes, stage lighting, DJ truss, and fireworks coordination.",
    icon: "Music",
    verified: true
  }
];

export const SAMPLE_CATERING_MENUS: CateringMenuCategory[] = [
  {
    categoryName: "Royal Welcome & Starters",
    items: [
      { name: "Saffron Kesar Thandai & Rose Petal Sherbet", description: "Traditional royal welcome coolers infused with roasted dry fruits and organic rose syrup", isChefSpecial: true },
      { name: "Paneer Angara Tikka with Mint Chutney", description: "Slow-smoked cottage cheese cubes marinated in Kashmiri deghi mirch and mustard oil" },
      { name: "Dahi Ke Sholay & Crispy Lotus Stem", description: "Spiced hung curd pockets crusted in breadcrumbs paired with honey-chili lotus chips", isChefSpecial: true },
      { name: "Wood-Fired Truffle Mushroom Crostini", description: "Artisanal baguette topped with sauteed wild button mushrooms and parmesan emulsion" },
      { name: "Hara Bhara Kebab with Amla Dip", description: "Delicate spinach, sweet pea, and crushed pistachio patties griddled on cast iron" }
    ]
  },
  {
    categoryName: "Grand Main Courses",
    items: [
      { name: "Shahi Dal Bukhara (Slow Simmered 24 Hours)", description: "Black lentils stewed overnight on charcoal hearth with churned white butter and cream", isChefSpecial: true },
      { name: "Paneer Lababdar in Rich Tomato Cashew Gravy", description: "Charred paneer cubes in a velvety tomato gravy infused with crushed coriander seeds" },
      { name: "Dum Ki Subz Biryani with Burani Raita", description: "Fragrant aged Basmati rice layered with garden vegetables, saffron milk, and fried onions in sealed earthen handi", isChefSpecial: true },
      { name: "Kashmiri Nadru Kofta", description: "Lotus stem dumplings poached in an aromatic fennel and dry ginger yogurt gravy" },
      { name: "Assorted Royal Tandoori Breads", description: "Garlic Butter Naan, Laccha Paratha, Missi Roti, and Khasta Roti freshly baked from clay ovens" }
    ]
  },
  {
    categoryName: "Live Thematic Counters",
    items: [
      { name: "Benaras Chaat & Golgappa Courtyard", description: "Live counter with 6 varieties of flavored water, Tamatar Chaat, Palak Patta Chaat & Papdi Chaat", isChefSpecial: true },
      { name: "Wood-Fired Neapolitan Pizza Deck", description: "Hand-stretched sourdough pizzas topped with farm-fresh basil, fresh mozzarella, and olives" },
      { name: "Wok & Dim Sum Emporium", description: "Steamed crystal dumplings, Schezwan wok-tossed noodles, and crispy spring rolls" },
      { name: "South Indian Tawa Delicacies", description: "Mini ghee podi idlis, live paper dosas, and freshly churned coconut and tomato chutneys" }
    ]
  },
  {
    categoryName: "Desserts & Sweet Endings",
    items: [
      { name: "Hot Jalebi with Slow-Reduced Rabdi", description: "Crisp saffron jalebis prepared live on tawa dipped in golden syrup alongside thick pistachio rabdi", isChefSpecial: true },
      { name: "Gulab Jamun Flambé & Vanilla Bean Gelato", description: "Warm khoya dumplings flambéed with aged cognac notes, served with artisanal vanilla ice cream" },
      { name: "Moong Dal Halwa in Pure Desi Ghee", description: "Traditional Rajasthani winter confection made with roasted yellow lentils and slivered almonds" },
      { name: "Belgian Chocolate Fountain & Fresh Fruits", description: "Warm flowing dark chocolate accompanied by strawberries, marshmallows, and almond biscotti", isChefSpecial: true }
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "review-1",
    author: "Aditi & Rohan Singhania",
    location: "Mumbai",
    eventType: "3-Day Wedding Celebration (650 Guests)",
    date: "December 2025",
    rating: 5,
    quote: "Our dream wedding at The Grand Veda was nothing short of a royal fairy tale. The marriage lawn accommodated our 650 guests effortlessly, and the floral mandap stage under the twilight fairy lights took everyone's breath away. The staff treated our families with utmost warmth and precision. The Dal Bukhara and live chaat counter are still talked about by all our relatives!",
    verifiedGuest: true
  },
  {
    id: "review-2",
    author: "Rajesh & Meenakshi Agarwal",
    location: "Pune",
    eventType: "25th Silver Jubilee Anniversary (120 Guests)",
    date: "January 2026",
    rating: 5,
    quote: "We hosted our 25th anniversary on the Sunset Terrace. The candlelit dinner, acoustic violinists, and valley view created an unforgettable emotional evening. The suites were palatial, spotless, and so comfortable for our parents. Every detail was executed without a single hitch.",
    verifiedGuest: true
  },
  {
    id: "review-3",
    author: "Dr. Sameer & Priyanka Deshmukh",
    location: "Nashik",
    eventType: "Grand 50th Birthday Party & Weekend Stay",
    date: "February 2026",
    rating: 5,
    quote: "From the poolside birthday styling to the DJ sound quality and live barbecue stations, The Grand Veda exceeded every expectation. The ease of having luxury rooms for our out-of-town guests right next to the celebration deck made the entire weekend relaxing and celebratory.",
    verifiedGuest: true
  },
  {
    id: "review-4",
    author: "Kavita Mittal & Family",
    location: "Surat",
    eventType: "Engagement & Sangeet Gala (350 Guests)",
    date: "November 2025",
    rating: 5,
    quote: "The Crystal Banquet Hall is completely pillarless, giving every guest a pristine view of our stage performances. The pre-function cocktail area gave our evening an international luxury gala atmosphere. Truly the most professional hospitality team in the region.",
    verifiedGuest: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How can I book a room or reserve a room block for wedding guests?",
    answer: "You can book individual rooms directly using our 'Book Your Stay' reservation system with instant price calculation. For wedding and event room blocks (10 to 48 rooms), contact our dedicated reservations team via WhatsApp or the enquiry form to receive exclusive group discounted tariffs and complimentary hospitality coordinator assistance.",
    category: "Booking"
  },
  {
    question: "How can I reserve the marriage garden and what is the advance booking window?",
    answer: "Given peak wedding auspicious dates, we recommend reserving the Shahi Marriage Garden 3 to 9 months in advance. You can submit your date check enquiry here, after which our Venue Director will confirm availability, invite you for a guided site tour, and provide the official date hold contract upon an advance token deposit.",
    category: "Venues & Decor"
  },
  {
    question: "What is the maximum event capacity of your marriage garden and banquet hall?",
    answer: "Our open-air Shahi Marriage Garden can host up to 1,500 guests in floating banquet setups (or 800 seated theatre style). The indoor air-conditioned Crystal Banquet Hall comfortably accommodates 150 to 600 guests. Smaller venues like the Sunset Terrace and Poolside Deck cater to intimate gatherings of 20 to 200 guests.",
    category: "Venues & Decor"
  },
  {
    question: "Can I visit the property and sample catering before confirming our booking?",
    answer: "Yes, absolutely! We encourage all prospective brides, grooms, and event hosts to schedule a complimentary Estate Walkthrough. Guided tours are available daily from 9:00 AM to 7:00 PM. Once a date hold is initiated, our Executive Chef organizes a curated food tasting session for up to 4 family members.",
    category: "Policies"
  },
  {
    question: "Are in-house catering and wedding decorations mandatory, or can we bring our own?",
    answer: "We provide world-class in-house catering (with dedicated separate pure-vegetarian preparation kitchens) and a curated panel of premium decorators. If you wish to bring your own specialized outside decorator or traditional community caterer, we permit empanelled partners subject to venue security guidelines and a nominal kitchen royalty fee.",
    category: "Catering"
  },
  {
    question: "Is ample parking available and do you offer valet parking services?",
    answer: "Yes. The resort features a dedicated paved parking facility accommodating 250+ four-wheelers and over 150 two-wheelers. Complimentary uniformed valet parking is included with all grand wedding and banquet event reservations.",
    category: "Policies"
  },
  {
    question: "What are your standard check-in and check-out times?",
    answer: "Standard hotel room check-in is at 2:00 PM and check-out is at 11:00 AM. For wedding parties occupying room blocks, flexible early check-in or late check-out can be pre-arranged with the front desk based on event ceremony schedules.",
    category: "Policies"
  },
  {
    question: "What are the payment schedules and cancellation policies for events?",
    answer: "Reservations are confirmed with a 25% advance token deposit. A 50% second tranche is due 45 days prior to the event, with the balance 25% payable 7 days before check-in. In case of rescheduling due to unavoidable circumstances, advance amounts can be adjusted towards an alternate mutually agreed date within 12 months.",
    category: "Booking"
  },
  {
    question: "Can we customize our wedding, birthday, or anniversary package?",
    answer: "Every celebration is uniquely handcrafted. Whether you want custom thematic mandap floral colors, live firework shows, acoustic live bands, specific regional chaat counters, or bespoke welcome hampers in guest rooms, our Event Specialists customize every package to match your vision and budget.",
    category: "Venues & Decor"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g-1",
    category: "Weddings",
    title: "Twilight Floral Mandap by the Lawn",
    subtitle: "Over 5,000 fresh marigolds and tuberose blooms illuminated under starry evening skies.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-2",
    category: "Architecture",
    title: "Palatial Colonnades & Heritage Facade",
    subtitle: "Illuminated classical arches, water fountains, and manicured tropical flora at dusk.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-3",
    category: "Dinners & Anniversaries",
    title: "Intimate Candlelit Garden Terrace",
    subtitle: "Romantic tables adorned with white roses, fine crystal stemware, and glowing lantern canopy.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-4",
    category: "Rooms & Suites",
    title: "The Royal Palace Suite Bedroom",
    subtitle: "Hand-carved four-poster king bed, Egyptian cotton sheets, and serene courtyard views.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-5",
    category: "Banquets",
    title: "Grand Crystal Ballroom Gala",
    subtitle: "Pillarless 8,500 sq.ft banquet hall with Austrian crystal chandeliers and VIP seating.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-6",
    category: "Birthdays",
    title: "Poolside Sundowner Party Pavilion",
    subtitle: "Festive balloon styling, cocktail lounge cabanas, and glowing turquoise pool waters.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-7",
    category: "Weddings",
    title: "Royal Baarat Gateway & Red Carpet",
    subtitle: "Grand ceremonial procession entry with traditional shehnai nagada stage and floral arches.",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-8",
    category: "Dining",
    title: "Artisanal Royal Banquet Spread",
    subtitle: "Freshly prepared delicacies, handi biryani, and live tawa counters crafted by our Master Chefs.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g-9",
    category: "Rooms & Suites",
    title: "Presidential Villa Private Plunge Pool",
    subtitle: "Secluded heated plunge pool enveloped by lush tropical palms and private dining pavilion.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
  }
];
