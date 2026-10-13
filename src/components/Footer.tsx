import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { NewsletterSignup } from './NewsletterSignup';
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Heart, Settings, Globe } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenEnquiry: () => void;
  onOpenPlaceholderGuide: () => void;
  onOpenSeoManager?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenEnquiry,
  onOpenPlaceholderGuide,
  onOpenSeoManager,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173D32] text-white border-t border-[#C6A15B]/30 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup for Exclusive Offers & Updates */}
        <NewsletterSignup />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#C6A15B] flex items-center justify-center bg-[#0E2921] text-[#C6A15B]">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                {HOTEL_CONFIG.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              An aristocratic 5-star celebration resort featuring 25,000 sq.ft of lush marriage lawns, a pillarless crystal AC banquet hall, and 48 palatial suites in Nashik Valley.
            </p>

            <div className="pt-2 text-xs text-[#E6C280] font-serif italic">
              “Your Perfect Stay. Your Unforgettable Celebration.”
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenPlaceholderGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-[11px] text-[#C6A15B] border border-[#C6A15B]/30 transition-colors"
                title="View & Edit Hotel Configuration Placeholders"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Hotel Placeholders</span>
              </button>

              {onOpenSeoManager && (
                <button
                  onClick={onOpenSeoManager}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-[11px] text-[#E6C280] border border-[#E6C280]/40 transition-colors"
                  title="Manage SEO Titles, OpenGraph Cards & Schema.org"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>SEO & Metadata Manager</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-tight">
              Explore The Estate
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#home" className="hover:text-[#C6A15B] transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C6A15B] transition-colors">
                  Luxury Rooms & Bridal Suites
                </a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#C6A15B] transition-colors">
                  Marriage Gardens & Mandaps
                </a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#C6A15B] transition-colors">
                  Crystal AC Banquet Ballroom
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C6A15B] transition-colors">
                  The Saffron Courtyard & Catering
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A15B] transition-colors">
                  Photo & Video Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C6A15B] transition-colors">
                  Verified Guest Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C6A15B] transition-colors">
                  Booking & Venue Policies FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Event Celebrations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-tight">
              Celebrations
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#C6A15B] transition-colors text-left">
                  Grand Weddings & Baarat
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#C6A15B] transition-colors text-left">
                  Mandap & Sangeet Nights
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#C6A15B] transition-colors text-left">
                  Milestone Birthday Parties
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#C6A15B] transition-colors text-left">
                  Silver & Golden Anniversaries
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#C6A15B] transition-colors text-left">
                  Corporate Galas & Banquets
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#C6A15B] transition-colors text-left">
                  Weekend Leisure Stays
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-tight">
              Contact & Reservations
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{HOTEL_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <a href={`tel:${HOTEL_CONFIG.phone}`} className="hover:text-[#C6A15B] tabular-nums">
                  {HOTEL_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: +91 98200 45678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <a href={`mailto:${HOTEL_CONFIG.email}`} className="hover:text-[#C6A15B] truncate">
                  {HOTEL_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#C6A15B] text-[#173D32] hover:bg-[#D4AF37] transition-colors"
              >
                Book Your Stay
              </button>
              <button
                onClick={onOpenEnquiry}
                className="px-4 py-2 text-xs font-semibold rounded border border-[#C6A15B] text-[#C6A15B] hover:bg-white/10 transition-colors"
              >
                Plan Celebration
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {currentYear} {HOTEL_CONFIG.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-200 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-neutral-200 cursor-pointer">Cancellation Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
