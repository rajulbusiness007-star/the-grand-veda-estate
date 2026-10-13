import React, { useState, useEffect } from 'react';
import { ROOMS_DATA, RoomItem, HOTEL_CONFIG } from '../data/hotelData';
import { Calendar, Users, Bed, CheckCircle2, MessageCircle, AlertCircle, Sparkles, X, ChevronRight } from 'lucide-react';

interface RoomReservationModalProps {
  initialRoom?: RoomItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomReservationModal: React.FC<RoomReservationModalProps> = ({
  initialRoom,
  isOpen,
  onClose,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoom ? initialRoom.id : ROOMS_DATA[0].id
  );

  // Set default dates: tomorrow to day after tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 3);

  const [checkIn, setCheckIn] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(dayAfter.toISOString().split('T')[0]);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [guestName, setGuestName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedVoucher, setConfirmedVoucher] = useState<{
    ref: string;
    total: number;
    nights: number;
  } | null>(null);

  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomId(initialRoom.id);
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const nights = Math.max(1, Math.round(timeDiff / (1000 * 3600 * 24)));

  const basePrice = selectedRoom.pricePerNight * nights * roomCount;
  const taxes = Math.round(basePrice * 0.18); // 18% GST standard luxury hotel
  const totalPrice = basePrice + taxes;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!guestName.trim()) errs.guestName = 'Full name is required';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s()]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Valid phone number is required';
    }
    if (checkOutDate <= checkInDate) {
      errs.dates = 'Check-out date must be after check-in date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = `GV-RES-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedVoucher({
      ref: refCode,
      total: totalPrice,
      nights,
    });
  };

  const handleSendWhatsApp = () => {
    if (!confirmedVoucher) return;
    const text = `*ROOM RESERVATION REQUEST - THE GRAND VEDA*%0A%0A` +
      `*Reference:* ${confirmedVoucher.ref}%0A` +
      `*Guest Name:* ${encodeURIComponent(guestName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Room Type:* ${encodeURIComponent(selectedRoom.name)}%0A` +
      `*Check-In:* ${checkIn}%0A` +
      `*Check-Out:* ${checkOut} (${confirmedVoucher.nights} Nights)%0A` +
      `*Rooms:* ${roomCount} Room(s)%0A` +
      `*Guests:* ${adults} Adults, ${children} Children%0A` +
      `*Estimated Tariff:* ₹${confirmedVoucher.total.toLocaleString('en-IN')} (incl. taxes)%0A` +
      `*Special Requests:* ${encodeURIComponent(specialRequests || 'Standard setup')}`;

    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 relative my-8 text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#C6A15B]/20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C6A15B] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Booking Tariff Guarantee</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#173D32]">
              Reserve Your Stay
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

        {confirmedVoucher ? (
          /* Confirmed Reservation Slip */
          <div className="py-6 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="inline-block bg-[#173D32] text-white px-3 py-1 rounded text-xs font-mono font-semibold mb-3">
              Booking Ref: {confirmedVoucher.ref}
            </span>

            <h4 className="text-xl font-serif font-bold text-[#173D32] mb-1">
              Reservation Hold Placed!
            </h4>
            <p className="text-xs text-neutral-600 max-w-md mx-auto mb-6">
              Thank you, <strong>{guestName}</strong>. Your room reservation for <strong>{selectedRoom.name}</strong> from <strong>{checkIn}</strong> to <strong>{checkOut}</strong> has been tentatively blocked.
            </p>

            <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 max-w-md mx-auto text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500">Room Category:</span>
                <span className="font-semibold text-neutral-800">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500">Duration:</span>
                <span className="font-semibold text-neutral-800">{confirmedVoucher.nights} Night(s)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500">Occupancy:</span>
                <span className="font-semibold text-neutral-800">{roomCount} Room(s) · {adults} Adults</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-500">Total Payable:</span>
                <span className="font-bold text-[#173D32] font-mono text-sm">₹{confirmedVoucher.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp With Front Desk</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-semibold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="mt-5 space-y-5">
            {/* Room Selector */}
            <div>
              <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                Room Category
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full py-2.5 px-3 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:border-[#C6A15B]"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — ₹{room.pricePerNight.toLocaleString('en-IN')}/night ({room.size})
                  </option>
                ))}
              </select>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Check-In Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full py-2 px-3 text-sm rounded border border-neutral-300 bg-white focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  required
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full py-2 px-3 text-sm rounded border border-neutral-300 bg-white focus:outline-none focus:border-[#C6A15B]"
                />
              </div>
            </div>
            {errors.dates && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.dates}</span>
              </p>
            )}

            {/* Room & Guest Counts */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#173D32] uppercase tracking-wider mb-1">
                  Rooms
                </label>
                <select
                  value={roomCount}
                  onChange={(e) => setRoomCount(Number(e.target.value))}
                  className="w-full py-2 px-2.5 text-xs rounded border border-neutral-300 bg-white"
                >
                  {[1, 2, 3, 4, 5, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} Room{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#173D32] uppercase tracking-wider mb-1">
                  Adults
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full py-2 px-2.5 text-xs rounded border border-neutral-300 bg-white"
                >
                  {[1, 2, 3, 4, 6, 8, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} Adult{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#173D32] uppercase tracking-wider mb-1">
                  Children
                </label>
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full py-2 px-2.5 text-xs rounded border border-neutral-300 bg-white"
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} Child{num > 1 ? 'ren' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1">
                  Lead Guest Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Radhika Kapoor"
                  className={`w-full py-2 px-3 text-sm rounded border ${
                    errors.guestName ? 'border-red-500' : 'border-neutral-300'
                  } bg-white`}
                />
                {errors.guestName && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.guestName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98200 XXXXX"
                  className={`w-full py-2 px-3 text-sm rounded border ${
                    errors.phone ? 'border-red-500' : 'border-neutral-300'
                  } bg-white`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Price Preview Card */}
            <div className="bg-white rounded-xl p-4 border border-[#C6A15B]/30 text-xs flex items-center justify-between">
              <div>
                <span className="text-neutral-500 block">
                  {nights} Night(s) × {roomCount} Room(s)
                </span>
                <span className="text-neutral-400 text-[10px]">Includes breakfast buffet & Wi-Fi</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-serif font-bold text-[#173D32] block">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-neutral-400">Total with 18% GST</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded text-xs font-semibold text-neutral-600 hover:bg-neutral-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded text-xs sm:text-sm font-semibold text-white bg-[#173D32] hover:bg-[#0E2921] transition-all shadow"
              >
                Confirm Reservation Hold
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
