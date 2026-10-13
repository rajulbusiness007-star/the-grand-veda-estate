import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSlideshow } from './components/HeroSlideshow';
import { AboutSection } from './components/AboutSection';
import { VirtualPropertyTour } from './components/VirtualPropertyTour';
import { CelebrationVenues } from './components/CelebrationVenues';
import { RoomShowcase } from './components/RoomShowcase';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { EventEnquiryForm } from './components/EventEnquiryForm';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { DiningShowcase } from './components/DiningShowcase';
import { PhotoGallery } from './components/PhotoGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { RoomReservationModal } from './components/RoomReservationModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { PlaceholderManagerModal } from './components/PlaceholderManagerModal';
import { SeoMetadataManager } from './components/SeoMetadataManager';
import { EventsAtGrandVeda } from './components/EventsAtGrandVeda';
import { TheFinerDetails } from './components/TheFinerDetails';
import { KnotAndPlotShowcase } from './components/KnotAndPlotShowcase';
import { RoomItem } from './data/hotelData';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<RoomItem | null>(null);

  const [roomDetailModalOpen, setRoomDetailModalOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<RoomItem | null>(null);

  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [placeholderGuideOpen, setPlaceholderGuideOpen] = useState(false);
  const [seoManagerOpen, setSeoManagerOpen] = useState(false);

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  // Transferred details from Quote Calculator to Enquiry Form
  const [enquiryVenue, setEnquiryVenue] = useState<string | undefined>(undefined);
  const [enquiryDetails, setEnquiryDetails] = useState<{
    eventType: string;
    venue: string;
    guests: number;
    cateringPlan: string;
    estimatedCost: number;
  } | null>(null);

  const handleOpenBooking = (room?: RoomItem) => {
    if (room) {
      setSelectedRoomForBooking(room);
    }
    setBookingModalOpen(true);
  };

  const handleOpenRoomDetail = (room: RoomItem) => {
    setSelectedRoomForDetail(room);
    setRoomDetailModalOpen(true);
  };

  const handleOpenEnquiry = (preferredVenue?: string) => {
    if (preferredVenue) {
      setEnquiryVenue(preferredVenue);
    }
    const enquiryEl = document.getElementById('contact-enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferQuoteToEnquiry = (details: {
    eventType: string;
    venue: string;
    guests: number;
    cateringPlan: string;
    estimatedCost: number;
  }) => {
    setEnquiryDetails(details);
    setCalculatorModalOpen(false);
    const enquiryEl = document.getElementById('contact-enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string, subtitle?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      subtitle,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#222222] selection:bg-[#C6A15B]/30 selection:text-[#173D32] flex flex-col font-sans">
      {/* Scroll Progress Bar at the Top of Viewport */}
      <ScrollProgressBar />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Page Flow */}
      <main id="home" className="flex-1">
        {/* 1. Hero Section & Slideshow */}
        <HeroSlideshow
          onBookStay={() => handleOpenBooking()}
          onPlanCelebration={() => handleOpenEnquiry()}
        />

        {/* 1.1 Knot & Plot Bespoke Event Planners & Decor Showcase */}
        <KnotAndPlotShowcase onPlanCelebration={(notes) => handleOpenEnquiry(notes)} />

        {/* 2. Events At Grand Veda (Birla Stays Heritage Template) */}
        <EventsAtGrandVeda onPlanCelebration={(eventType) => handleOpenEnquiry(eventType)} />

        {/* 3. About Hotel & Celebration Garden */}
        <AboutSection onPlanCelebration={() => handleOpenEnquiry()} />

        {/* 4. 360° Virtual Property Tour & Video Flythrough */}
        <VirtualPropertyTour onOpenEnquiry={(notes) => handleOpenEnquiry(notes)} />

        {/* 5. Celebration Gardens & Marriage Venues */}
        <CelebrationVenues
          onSelectImageForLightbox={handleOpenLightbox}
          onOpenCalculator={() => setCalculatorModalOpen(true)}
          onOpenEnquiry={(venue) => handleOpenEnquiry(venue)}
        />

        {/* 6. The Finer Details (Wedding & Celebration Stationery Template) */}
        <TheFinerDetails
          onBookRoom={() => handleOpenBooking()}
          onOpenEnquiry={(notes) => handleOpenEnquiry(notes)}
        />

        {/* 7. Hotel Rooms & Suites Showcase */}
        <RoomShowcase
          onBookRoom={(room) => handleOpenBooking(room)}
          onViewRoomDetails={(room) => handleOpenRoomDetail(room)}
        />

        {/* 5. Amenities & Facilities */}
        <AmenitiesGrid />

        {/* 6. Food & Royal Dining Showcase */}
        <DiningShowcase onOpenEnquiry={(notes) => handleOpenEnquiry(notes)} />

        {/* 7. Property & Celebration Photo Gallery */}
        <PhotoGallery onOpenLightbox={handleOpenLightbox} />

        {/* 8. Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* 9. Event Booking & Celebration Enquiry Form */}
        <EventEnquiryForm
          initialVenue={enquiryVenue}
          initialDetails={enquiryDetails}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Location, Directions & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenPlaceholderGuide={() => setPlaceholderGuideOpen(true)}
        onOpenSeoManager={() => setSeoManagerOpen(true)}
      />

      {/* Mobile Sticky Bottom Action Bar (<15% viewport height) */}
      <MobileActionBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Interactive Reservation Modal */}
      <RoomReservationModal
        isOpen={bookingModalOpen}
        initialRoom={selectedRoomForBooking}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        isOpen={roomDetailModalOpen}
        room={selectedRoomForDetail}
        onClose={() => setRoomDetailModalOpen(false)}
        onBookNow={(room) => {
          setRoomDetailModalOpen(false);
          handleOpenBooking(room);
        }}
      />

      {/* Fullscreen Gallery Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Interactive Quote Calculator Modal */}
      {calculatorModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setCalculatorModalOpen(false)}
        >
          <div className="w-full max-w-4xl my-8" onClick={(e) => e.stopPropagation()}>
            <InteractiveQuoteCalculator
              onTransferToEnquiry={handleTransferQuoteToEnquiry}
              onClose={() => setCalculatorModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Placeholders Audit & Setup Guide Modal */}
      <PlaceholderManagerModal
        isOpen={placeholderGuideOpen}
        onClose={() => setPlaceholderGuideOpen(false)}
      />

      {/* SEO Metadata & Social Sharing Manager Modal */}
      <SeoMetadataManager
        isOpen={seoManagerOpen}
        onClose={() => setSeoManagerOpen(false)}
      />
    </div>
  );
}
