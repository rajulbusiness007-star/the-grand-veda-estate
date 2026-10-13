import React, { useState } from 'react';
import { RoomItem, HOTEL_CONFIG } from '../data/hotelData';
import { Users, Bed, Check, X, Calendar, ShieldCheck } from 'lucide-react';

interface RoomDetailModalProps {
  room: RoomItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (room: RoomItem) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onBookNow,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!isOpen || !room) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 relative my-8 text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#C6A15B]/20">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C6A15B] block">
              {room.size} · {room.view}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173D32]">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photo Gallery with Thumbnails */}
        <div className="my-5">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black mb-3 relative">
            <img
              src={room.gallery[activePhotoIndex] || room.image}
              alt={room.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {room.gallery.length > 1 && (
            <div className="flex items-center gap-2">
              {room.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    activePhotoIndex === i ? 'border-[#C6A15B] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Specs Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-neutral-200 text-xs mb-6">
          <div>
            <span className="text-neutral-400 block font-medium">Guest Capacity</span>
            <span className="font-semibold text-[#173D32]">{room.capacity}</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-medium">Bedding</span>
            <span className="font-semibold text-[#173D32]">{room.bedType}</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-medium">Floor Area</span>
            <span className="font-semibold text-[#173D32]">{room.size}</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-medium">Room View</span>
            <span className="font-semibold text-[#173D32]">{room.view}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6">
          {room.description}
        </p>

        {/* Amenities & Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              In-Room Amenities
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-600">
              {room.amenities.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#173D32] uppercase tracking-wider mb-2">
              Privileges & Services
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-600">
              {room.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Booking Action */}
        <div className="pt-4 border-t border-[#C6A15B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
              Tariff / Night
            </span>
            <span className="text-2xl font-serif font-bold text-[#173D32]">
              {room.currency}{room.pricePerNight.toLocaleString('en-IN')}{' '}
              <span className="text-xs text-neutral-500 font-sans font-normal">+ 18% GST</span>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded text-xs font-semibold text-neutral-600 hover:bg-neutral-200"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded text-xs sm:text-sm font-semibold bg-[#173D32] text-white hover:bg-[#0E2921] transition-all flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4 text-[#C6A15B]" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
