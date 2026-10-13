import React, { useState } from 'react';
import { REVIEWS_DATA, HOTEL_CONFIG } from '../data/hotelData';
import { Star, Sparkles, CheckCircle, ExternalLink, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredReviews =
    selectedFilter === 'all'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.eventType.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honored Guests & Families</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            Words of Celebration & Trust
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Real guest memories shared by wedding hosts, anniversary couples, and celebrating families who made The Grand Veda their home for unforgettable milestones.
          </p>

          {/* Rating Snapshot Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 bg-white px-6 py-3.5 rounded-full border border-[#C6A15B]/30 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg text-[#173D32]">4.9</span>
              <div className="flex text-[#C6A15B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-neutral-300">|</span>
            <span className="text-xs text-neutral-600 font-medium">Over 240+ Verified Celebrations & Stays</span>
            <span className="text-neutral-300">|</span>
            <a
              href={HOTEL_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#173D32] hover:text-[#C6A15B] flex items-center gap-1 transition-colors"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3 h-3 text-[#C6A15B]" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-8 border border-[#C6A15B]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#173D32]">
                      {review.author}
                    </h3>
                    <div className="text-xs text-neutral-500 flex items-center gap-2 mt-0.5">
                      <span>{review.location}</span>
                      <span>·</span>
                      <span className="text-[#C6A15B] font-medium">{review.eventType}</span>
                    </div>
                  </div>

                  <div className="flex text-[#C6A15B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#C6A15B]/20 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed italic pl-4">
                    “{review.quote}”
                  </p>
                </div>
              </div>

              {/* Verified Tag */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Guest Stay ({review.date})</span>
                </div>
                <span className="text-[11px]">Google Reviews</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to genuine review submission */}
        <div className="text-center text-xs text-neutral-500">
          Have you celebrated with us?{' '}
          <a
            href={HOTEL_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#173D32] hover:text-[#C6A15B] font-semibold underline underline-offset-4"
          >
            Leave a review on Google Business Profile
          </a>
        </div>
      </div>
    </section>
  );
};
