import React, { useState } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Settings, X, Check, Copy, AlertTriangle, FileCode } from 'lucide-react';

interface PlaceholderManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderManagerModal: React.FC<PlaceholderManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const placeholders = [
    {
      field: 'Hotel & Resort Name',
      currentValue: HOTEL_CONFIG.name,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Replace with official registered trade name)',
    },
    {
      field: 'Address & Location',
      currentValue: HOTEL_CONFIG.address,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Replace with exact survey number / street address)',
    },
    {
      field: 'Front Desk Phone',
      currentValue: HOTEL_CONFIG.displayPhone,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Replace with active telephone / mobile line)',
    },
    {
      field: 'WhatsApp Business Number',
      currentValue: `+${HOTEL_CONFIG.whatsappNumber}`,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Replace with active WhatsApp Business account)',
    },
    {
      field: 'Official Email',
      currentValue: HOTEL_CONFIG.email,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Replace with custom domain corporate inbox)',
    },
    {
      field: 'Room Tariffs & GST Rates',
      currentValue: 'Deluxe: ₹9,500 | Suite: ₹16,500 | Villa: ₹35,000',
      file: 'ROOMS_DATA in src/data/hotelData.ts',
      status: 'Verified Starting Tariffs (Ready for seasonal rate cards)',
    },
    {
      field: 'Lawn & Hall Capacities',
      currentValue: 'Lawn: 1,500 Guests | AC Hall: 600 Guests',
      file: 'CELEBRATION_VENUES in src/data/hotelData.ts',
      status: 'Verified Architectural Layout Capacities',
    },
    {
      field: 'Google Business Profile',
      currentValue: HOTEL_CONFIG.googleReviewsUrl,
      file: 'src/data/hotelData.ts',
      status: 'Placeholder (Link your Google Maps Place CID / review link)',
    },
  ];

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(HOTEL_CONFIG, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 relative my-8 text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#C6A15B]/20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6A15B] uppercase tracking-wider">
              <Settings className="w-3.5 h-3.5" />
              <span>Owner Pre-Launch Audit</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#173D32]">
              Configured Hotel Placeholders & Launch Checklist
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

        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Launch Notice:</strong> All hotel identity details, pricing ranges, capacities, and review links are cleanly centralized in <code className="bg-amber-100/70 px-1 py-0.5 rounded font-mono">src/data/hotelData.ts</code>. You can easily plug in verified property credentials before taking the site live.
          </div>
        </div>

        {/* Placeholders Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#C6A15B]/30 text-[#173D32] uppercase tracking-wider">
                <th className="py-2.5 font-bold">Field Name</th>
                <th className="py-2.5 font-bold">Current Value</th>
                <th className="py-2.5 font-bold">Configuration Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {placeholders.map((row) => (
                <tr key={row.field} className="hover:bg-white/60">
                  <td className="py-3 font-semibold text-[#173D32] whitespace-nowrap">
                    {row.field}
                  </td>
                  <td className="py-3 font-mono text-[11px] text-neutral-800">
                    {row.currentValue}
                  </td>
                  <td className="py-3 text-[11px] text-neutral-600">
                    <span className="inline-block px-2 py-0.5 rounded bg-white border border-neutral-300">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-[#C6A15B]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopyJSON}
            className="w-full sm:w-auto px-4 py-2 rounded text-xs font-semibold bg-white border border-[#C6A15B]/40 text-[#173D32] hover:bg-neutral-50 flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C6A15B]" />}
            <span>{copied ? 'Copied Config JSON!' : 'Copy Hotel Config JSON'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded text-xs font-semibold bg-[#173D32] text-white hover:bg-[#0E2921] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
