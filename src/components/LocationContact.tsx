import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, Car, MessageCircle, ExternalLink, Instagram, Facebook, Youtube, Compass } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Compass className="w-4 h-4 text-[#C6A15B]" />
            <span>Visit The Estate</span>
            <Compass className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            Location, Directions & Contact
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Conveniently nestled amidst Nashik’s lush scenic valley hills, reachable via smooth highway access with seamless valet parking and dedicated venue entrances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#C6A15B]/30 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 flex items-center justify-center shrink-0 text-[#173D32]">
                  <MapPin className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    Estate Address
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {HOTEL_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 flex items-center justify-center shrink-0 text-[#173D32]">
                  <Phone className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    Direct Front Desk & Reservations
                  </h3>
                  <a
                    href={`tel:${HOTEL_CONFIG.phone}`}
                    className="text-sm font-semibold text-[#173D32] hover:text-[#C6A15B] transition-colors tabular-nums block"
                  >
                    {HOTEL_CONFIG.displayPhone}
                  </a>
                  <span className="text-[11px] text-neutral-400">Click to call directly</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    WhatsApp Venue Concierge
                  </h3>
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda,%20I%20would%20like%20to%20enquire%20about%20booking`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Instant Chat Support (+91 98200 45678)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-neutral-400 block">Average response time: &lt; 15 mins</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 flex items-center justify-center shrink-0 text-[#173D32]">
                  <Mail className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    Official Reservations Email
                  </h3>
                  <a
                    href={`mailto:${HOTEL_CONFIG.email}`}
                    className="text-xs sm:text-sm text-neutral-700 hover:text-[#173D32] transition-colors font-medium break-all"
                  >
                    {HOTEL_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Reception Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 flex items-center justify-center shrink-0 text-[#173D32]">
                  <Clock className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    Hours & Timings
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Front Desk: {HOTEL_CONFIG.receptionHours}
                  </p>
                  <p className="text-xs text-neutral-600">
                    {HOTEL_CONFIG.officeHours}
                  </p>
                </div>
              </div>

              {/* Directions & Valet info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 flex items-center justify-center shrink-0 text-[#173D32]">
                  <Car className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#173D32] mb-1">
                    Valet & Parking Information
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    250+ dedicated four-wheeler parking slots on paved grounds with uniformed valet attendants and security surveillance.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Connect With Us
              </span>
              <div className="flex items-center gap-3 text-[#173D32]">
                <a
                  href={HOTEL_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF7F2] hover:text-[#C6A15B] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={HOTEL_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF7F2] hover:text-[#C6A15B] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={HOTEL_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF7F2] hover:text-[#C6A15B] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map & Directions (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-md flex flex-col justify-between">
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#173D32]">
                  Interactive Property Map
                </h3>
                <p className="text-xs text-neutral-500">
                  Located in the serene Nashik Valley, Maharashtra
                </p>
              </div>
              <a
                href={HOTEL_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded text-xs font-semibold bg-[#173D32] text-white hover:bg-[#0E2921] transition-colors flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C6A15B]" />
              </a>
            </div>

            {/* Embedded Google Maps container */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-neutral-100">
              <iframe
                title="Google Maps Location for The Grand Veda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38714035655!2d73.72288059089947!3d19.99110534241031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddee05141bbab7%3A0xb35154b9f298816!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Travel Times & Landmarks */}
            <div className="p-6 bg-[#FAF7F2] border-t border-neutral-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-semibold text-[#173D32] block">From Nashik Airport</span>
                <span className="text-neutral-500">Approx. 28 km (35 mins)</span>
              </div>
              <div>
                <span className="font-semibold text-[#173D32] block">From Nashik Road Station</span>
                <span className="text-neutral-500">Approx. 16 km (25 mins)</span>
              </div>
              <div>
                <span className="font-semibold text-[#173D32] block">From Mumbai Expressway</span>
                <span className="text-neutral-500">Smooth 4-lane highway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
