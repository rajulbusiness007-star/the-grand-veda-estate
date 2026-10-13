import React, { useState } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Phone, Menu, X, Calendar, Sparkles, Leaf } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Knot & Plot', href: '#knot-and-plot' },
    { label: 'Heritage', href: '#events-heritage' },
    { label: 'Details', href: '#finer-details' },
    { label: 'Venues', href: '#celebrations' },
    { label: 'Suites', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Royal Heritage Top Announcement Ribbon */}
      <div className="bg-[#0E2921] border-b border-[#C6A15B]/30 text-[#FAF7F2] py-1.5 px-4 text-center text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium flex items-center justify-center space-x-3 z-50 relative">
        <Leaf className="w-3 h-3 text-[#C6A15B] shrink-0" />
        <span className="truncate">A Timeless Estate • A Thousand Beautiful Possibilities</span>
        <Leaf className="w-3 h-3 text-[#C6A15B] shrink-0" />
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-[#173D32] text-white shadow-md border-b border-[#C6A15B]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 primary CTA) */}
          <div className="flex items-center justify-between gap-6 h-20">
            {/* Zone 1: Brand wordmark in display serif with gold insignia */}
            {/* Zone 1: Brand wordmark in display serif with royal arched crest */}
            <a
              href="#home"
              className="group flex items-center gap-3 whitespace-nowrap shrink-0 transition-opacity hover:opacity-95"
            >
              <div className="w-9 h-11 border border-[#C6A15B] rounded-t-xl rounded-b-sm flex flex-col items-center justify-center bg-[#0E2921] text-[#C6A15B] shadow-md group-hover:border-[#E6C280] transition-colors">
                <span className="text-[10px] leading-none mb-0.5">👑</span>
                <span className="font-serif text-lg font-bold leading-none text-[#C6A15B]">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#E6C280] transition-colors leading-none">
                  {HOTEL_CONFIG.shortName}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C6A15B] font-medium mt-1">
                  Estate & Celebration Resort
                </span>
              </div>
            </a>

            {/* Zone 2: Clean single-line nav links with gold hover underline */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 text-neutral-200 hover:text-[#C6A15B] transition-colors relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6A15B] hover:after:w-full after:transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action ('Book Now') + Click-to-call */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${HOTEL_CONFIG.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded border border-[#C6A15B]/40 text-neutral-200 hover:text-white hover:border-[#C6A15B] hover:bg-[#0E2921] transition-all"
                title="Call Front Desk & Reservations"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="whitespace-nowrap tabular-nums">{HOTEL_CONFIG.displayPhone}</span>
              </a>

              {/* Standout 'Book Now' Button */}
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#173D32] bg-[#C6A15B] hover:bg-[#D4AF37] active:bg-[#B88E43] rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2 font-sans tracking-wide"
              >
                <Calendar className="w-3.5 h-3.5 text-[#173D32]" />
                <span>Book Now</span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C6A15B]" /> : <Menu className="w-6 h-6 text-[#C6A15B]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#173D32] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#C6A15B]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C6A15B]/25">
                <div>
                  <div className="text-xl font-serif font-bold text-white tracking-tight">
                    {HOTEL_CONFIG.shortName}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-medium">
                    Hotel & Celebration Garden
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded text-neutral-300 hover:text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#C6A15B]" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C6A15B] text-xs">→</span>
                  </a>
                ))}
              </nav>

              {/* Drawer Action CTAs */}
              <div className="mt-8 pt-6 border-t border-[#C6A15B]/25 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 text-sm font-semibold rounded bg-[#C6A15B] text-[#173D32] hover:bg-[#D4AF37] transition-all text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#173D32]" />
                  <span>Book Now</span>
                </button>

                {onOpenEnquiry && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiry();
                    }}
                    className="w-full py-2.5 px-4 text-sm font-semibold rounded border border-[#C6A15B] text-[#C6A15B] hover:bg-white/5 transition-all text-center"
                  >
                    Plan Your Celebration
                  </button>
                )}
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="pt-6 border-t border-[#C6A15B]/25 text-xs text-neutral-300 flex flex-col gap-2.5">
              <a
                href={`tel:${HOTEL_CONFIG.phone}`}
                className="flex items-center gap-2 text-neutral-200 hover:text-[#C6A15B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="tabular-nums">{HOTEL_CONFIG.displayPhone}</span>
              </a>
              <div className="text-[11px] text-neutral-400">
                {HOTEL_CONFIG.receptionHours}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
