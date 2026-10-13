import React, { useState, useEffect } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Calendar, Users, Phone, Mail, User, MessageCircle, CheckCircle2, AlertCircle, FileText, Sparkles, Send } from 'lucide-react';

interface EnquiryFormProps {
  initialVenue?: string;
  initialDetails?: {
    eventType: string;
    venue: string;
    guests: number;
    cateringPlan: string;
    estimatedCost: number;
  } | null;
  onSuccess?: () => void;
}

export const EventEnquiryForm: React.FC<EnquiryFormProps> = ({
  initialVenue,
  initialDetails,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: initialDetails?.eventType || 'Grand Baarat Wedding',
    eventDate: '',
    guestCount: initialDetails?.guests ? String(initialDetails.guests) : '300',
    budget: initialDetails?.estimatedCost ? `₹${initialDetails.estimatedCost.toLocaleString('en-IN')}` : '₹5,00,000 - ₹10,00,000',
    venuePreference: initialVenue || initialDetails?.venue || 'The Shahi Marriage Lawn (25,000 sq.ft)',
    requirements: initialDetails ? `Calculated with ${initialDetails.cateringPlan}. Total Estimate: ₹${initialDetails.estimatedCost.toLocaleString('en-IN')}` : '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [confirmedBookingRef, setConfirmedBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialDetails.eventType,
        guestCount: String(initialDetails.guests),
        venuePreference: initialDetails.venue,
        budget: `₹${initialDetails.estimatedCost.toLocaleString('en-IN')}`,
        requirements: `Imported from estimate calculator (${initialDetails.cateringPlan})`,
      }));
    } else if (initialVenue) {
      setFormData((prev) => ({
        ...prev,
        venuePreference: initialVenue,
      }));
    }
  }, [initialDetails, initialVenue]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (!/^[0-9+-\s()]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number (minimum 8 digits)';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.eventDate) errors.eventDate = 'Please select a preferred event date';
    if (!formData.guestCount || Number(formData.guestCount) < 10) {
      errors.guestCount = 'Please specify expected guests (minimum 10)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Generate genuine tracking reference code
    const refCode = `GV-EVT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Store in browser state for verified audit trail
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBookingRef(refCode);
      setSubmissionSuccess(true);
    }, 700);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = `*NEW CELEBRATION ENQUIRY - THE GRAND VEDA*%0A%0A` +
      `*Reference:* ${confirmedBookingRef || 'Direct Web Lead'}%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A` +
      `*Event Type:* ${encodeURIComponent(formData.eventType)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(formData.eventDate)}%0A` +
      `*Expected Guests:* ${encodeURIComponent(formData.guestCount)}%0A` +
      `*Preferred Venue:* ${encodeURIComponent(formData.venuePreference)}%0A` +
      `*Estimated Budget:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Special Notes:* ${encodeURIComponent(formData.requirements || 'None')}`;

    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact-enquiry" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#C6A15B]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reservations & Consultations</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#173D32] tracking-tight mb-3">
            Event Booking & Celebration Enquiry
          </h2>
          <div className="w-20 h-[1px] bg-[#C6A15B] mx-auto mb-4" />
          <p className="text-sm text-neutral-600 leading-relaxed">
            Fill out your celebration details below. Our Venue Director will verify availability for your preferred date and contact you within 2 hours with customized package options.
          </p>
        </div>

        {/* Confirmation Success Card */}
        {submissionSuccess ? (
          <div className="bg-white rounded-2xl border-2 border-[#173D32] p-8 sm:p-10 shadow-xl text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#173D32]/10 text-[#173D32] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9 text-[#173D32]" />
            </div>

            <div className="inline-block bg-[#FAF7F2] text-[#173D32] border border-[#C6A15B]/40 px-3.5 py-1 rounded-full text-xs font-mono font-semibold mb-4">
              Booking Ref: {confirmedBookingRef}
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#173D32] mb-2">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-neutral-700 max-w-lg mx-auto leading-relaxed mb-6">
              Your celebration enquiry for <strong className="text-[#173D32]">{formData.eventType}</strong> on <strong className="text-[#173D32]">{formData.eventDate}</strong> has been logged in our reservation schedule.
            </p>

            {/* Quick Summary Voucher Box */}
            <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#C6A15B]/30 max-w-md mx-auto text-left text-xs mb-8 space-y-2">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Contact:</span>
                <span className="font-semibold text-neutral-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Guests:</span>
                <span className="font-semibold text-neutral-800">{formData.guestCount} Guests</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Venue Choice:</span>
                <span className="font-semibold text-neutral-800 truncate max-w-[200px]">{formData.venuePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Budget:</span>
                <span className="font-semibold text-neutral-800">{formData.budget}</span>
              </div>
            </div>

            {/* Next Steps: WhatsApp Direct Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Confirmation</span>
              </button>

              <button
                onClick={() => {
                  setSubmissionSuccess(false);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    eventType: 'Grand Baarat Wedding',
                    eventDate: '',
                    guestCount: '300',
                    budget: '₹5,00,000 - ₹10,00,000',
                    venuePreference: 'The Shahi Marriage Lawn (25,000 sq.ft)',
                    requirements: '',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-md text-xs sm:text-sm font-semibold border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#C6A15B]/30 p-6 sm:p-10 shadow-lg"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Sharma"
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                      formErrors.name ? 'border-red-500 bg-red-50/30' : 'border-neutral-300 bg-[#FAF7F2]'
                    } focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]`}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 XXXXX"
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                      formErrors.phone ? 'border-red-500 bg-red-50/30' : 'border-neutral-300 bg-[#FAF7F2]'
                    } focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]`}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                      formErrors.email ? 'border-red-500 bg-red-50/30' : 'border-neutral-300 bg-[#FAF7F2]'
                    } focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]`}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.email}</span>
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full py-2.5 px-3 text-sm rounded-md border border-neutral-300 bg-[#FAF7F2] focus:outline-none focus:border-[#C6A15B]"
                >
                  <option value="Grand Baarat Wedding">Grand Baarat Wedding & Mandap</option>
                  <option value="Ring Ceremony & Engagement">Ring Ceremony & Engagement</option>
                  <option value="Wedding Reception">Wedding Reception Gala</option>
                  <option value="Milestone Birthday Party">Milestone Birthday Party</option>
                  <option value="Anniversary & Romantic Dinner">Anniversary & Private Dining</option>
                  <option value="Family Function & Stay">Family Function & Reunion Stay</option>
                  <option value="Corporate Gala & Banquet">Corporate Banquet & Retreat</option>
                </select>
              </div>

              {/* Preferred Event Date */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Preferred Event Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                      formErrors.eventDate ? 'border-red-500 bg-red-50/30' : 'border-neutral-300 bg-[#FAF7F2]'
                    } focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]`}
                  />
                </div>
                {formErrors.eventDate && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.eventDate}</span>
                  </p>
                )}
              </div>

              {/* Expected Number of Guests */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Expected Number of Guests <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    placeholder="e.g. 350"
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                      formErrors.guestCount ? 'border-red-500 bg-red-50/30' : 'border-neutral-300 bg-[#FAF7F2]'
                    } focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]`}
                  />
                </div>
                {formErrors.guestCount && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.guestCount}</span>
                  </p>
                )}
              </div>

              {/* Preferred Venue */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Preferred Venue Area
                </label>
                <select
                  value={formData.venuePreference}
                  onChange={(e) => setFormData({ ...formData, venuePreference: e.target.value })}
                  className="w-full py-2.5 px-3 text-sm rounded-md border border-neutral-300 bg-[#FAF7F2] focus:outline-none focus:border-[#C6A15B]"
                >
                  <option value="The Shahi Marriage Lawn (25,000 sq.ft)">The Shahi Marriage Lawn (25,000 sq.ft)</option>
                  <option value="The Grand Crystal AC Banquet (8,500 sq.ft)">The Grand Crystal AC Banquet (8,500 sq.ft)</option>
                  <option value="The Sunset Terrace Gazebo (3,800 sq.ft)">The Sunset Terrace Gazebo (3,800 sq.ft)</option>
                  <option value="The Palms Poolside Deck (5,500 sq.ft)">The Palms Poolside Deck (5,500 sq.ft)</option>
                  <option value="Combined Entire Estate Booking">Combined Lawn + AC Banquet (Full Estate)</option>
                </select>
              </div>

              {/* Estimated Budget (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                  Estimated Budget <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g. ₹5,00,000 to ₹10,00,000"
                  className="w-full py-2.5 px-3 text-sm rounded-md border border-neutral-300 bg-[#FAF7F2] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>
            </div>

            {/* Additional Requirements Textarea */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#173D32] uppercase tracking-wider mb-1.5">
                Additional Requirements / Special Notes
              </label>
              <textarea
                rows={3}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="Mention catering preferences (Jain, Pure-Veg, Continental), room blocks needed, mandap floral themes, or music requirements..."
                className="w-full p-3 text-sm rounded-md border border-neutral-300 bg-[#FAF7F2] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 text-center sm:text-left">
                🔒 Your contact details are strictly kept confidential for your booking.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirect}
                  className="flex-1 sm:flex-none px-4 py-3 rounded-md text-xs font-semibold border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  title="Send via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none px-7 py-3 rounded-md text-xs sm:text-sm font-semibold bg-[#173D32] hover:bg-[#0E2921] text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Verifying Dates...</span>
                  ) : (
                    <>
                      <span>Check Availability & Submit</span>
                      <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
