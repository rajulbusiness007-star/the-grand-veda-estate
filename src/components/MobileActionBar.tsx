import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  onOpenBooking: () => void;
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOpenBooking,
  onOpenEnquiry,
}) => {
  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#173D32] border-t border-[#C6A15B]/30 px-3 py-2 shadow-2xl flex items-center justify-between gap-2"
    >
      {/* Click to Call */}
      <a
        href={`tel:${HOTEL_CONFIG.phone}`}
        className="flex-1 py-2 px-2.5 rounded bg-white/10 text-white hover:bg-white/15 transition-colors flex flex-col items-center justify-center text-[10px] font-semibold border border-white/10"
        title="Call Hotel"
      >
        <Phone className="w-3.5 h-3.5 text-[#C6A15B] mb-0.5" />
        <span className="whitespace-nowrap">Call Front Desk</span>
      </a>

      {/* Direct WhatsApp */}
      <a
        href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20The%20Grand%20Veda,%20I%20would%20like%20to%20enquire%20about%20booking`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2.5 rounded bg-emerald-700/80 text-white hover:bg-emerald-700 transition-colors flex flex-col items-center justify-center text-[10px] font-semibold border border-emerald-500/30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-300 mb-0.5" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* Plan / Book Now */}
      <button
        onClick={onOpenEnquiry}
        className="flex-[1.4] py-2 px-3 rounded bg-[#C6A15B] text-[#173D32] hover:bg-[#D4AF37] transition-colors flex flex-col items-center justify-center text-[11px] font-bold shadow"
      >
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#173D32]" />
          <span className="whitespace-nowrap">Enquire / Book</span>
        </div>
      </button>
    </aside>
  );
};
