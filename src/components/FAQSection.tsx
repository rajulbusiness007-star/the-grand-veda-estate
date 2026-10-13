import React, { useState } from 'react';
import { FAQS_DATA } from '../data/hotelData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-[#C6A15B]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
            <span>Essential Information</span>
            <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#173D32] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-base text-[#222222]/80 font-light leading-relaxed">
            Everything you need to know about planning your wedding, reserving rooms, catering guidelines, and estate policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-[#C6A15B] bg-[#FAF7F2] shadow-sm'
                    : 'border-neutral-200/90 bg-white hover:border-[#C6A15B]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-[#173D32] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#173D32] text-white' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-[#C6A15B]/15">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
