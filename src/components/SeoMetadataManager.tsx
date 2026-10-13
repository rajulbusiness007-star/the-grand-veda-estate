import React, { useState, useEffect } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Globe, Share2, Sparkles, X, Check, Copy, RefreshCw, AlertCircle, Eye, Search, Twitter, Layers } from 'lucide-react';

export interface SeoMetadataState {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: 'summary_large_image' | 'summary';
  hotelRating: string;
  priceRange: string;
}

const DEFAULT_SEO_CONFIG: SeoMetadataState = {
  title: `${HOTEL_CONFIG.name} | Luxury Marriage Garden & 5-Star Resort`,
  description: `Celebrate weddings, anniversaries, and grand stays at ${HOTEL_CONFIG.shortName}. Featuring a 25,000 sq.ft marriage garden, AC banquet hall, and 48 luxury suites in Nashik.`,
  keywords: `luxury hotel, marriage garden nashik, wedding venue resort, celebration resort, royal banquet hall, birthday party garden, anniversary dinner terrace, heritage stay`,
  canonicalUrl: typeof window !== 'undefined' ? window.location.origin : 'https://grandvedaresort.com',
  ogImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  hotelRating: '5',
  priceRange: '₹₹₹',
};

interface SeoMetadataManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoMetadataManager: React.FC<SeoMetadataManagerProps> = ({ isOpen, onClose }) => {
  const [seoData, setSeoData] = useState<SeoMetadataState>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('grand_veda_seo_metadata');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return DEFAULT_SEO_CONFIG;
  });

  const [activeTab, setActiveTab] = useState<'editor' | 'google_preview' | 'social_preview' | 'jsonld'>('editor');
  const [copiedCode, setCopiedCode] = useState(false);
  const [appliedNotification, setAppliedNotification] = useState(false);

  // Apply metadata to DOM whenever seoData is updated
  const applyMetadataToDOM = (data: SeoMetadataState) => {
    if (typeof document === 'undefined') return;

    // 1. Document Title
    document.title = data.title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.content = contentVal;
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', data.description);
    setMetaTag('name', 'keywords', data.keywords);

    // 3. OpenGraph
    setMetaTag('property', 'og:title', data.title);
    setMetaTag('property', 'og:description', data.description);
    setMetaTag('property', 'og:image', data.ogImage);
    setMetaTag('property', 'og:url', data.canonicalUrl);
    setMetaTag('property', 'og:type', data.ogType);
    setMetaTag('property', 'og:site_name', HOTEL_CONFIG.name);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', data.twitterCard);
    setMetaTag('name', 'twitter:title', data.title);
    setMetaTag('name', 'twitter:description', data.description);
    setMetaTag('name', 'twitter:image', data.ogImage);

    // 5. Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-hotel-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-hotel-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaJson = {
      '@context': 'https://schema.org',
      '@type': ['Hotel', 'EventVenue'],
      name: HOTEL_CONFIG.name,
      description: data.description,
      image: data.ogImage,
      telephone: HOTEL_CONFIG.phone,
      email: HOTEL_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOTEL_CONFIG.address,
        addressLocality: 'Nashik',
        addressRegion: 'Maharashtra',
        postalCode: '422003',
        addressCountry: 'IN',
      },
      priceRange: data.priceRange,
      starRating: {
        '@type': 'Rating',
        ratingValue: data.hotelRating,
      },
    };

    scriptTag.textContent = JSON.stringify(schemaJson, null, 2);
  };

  useEffect(() => {
    applyMetadataToDOM(seoData);
  }, []);

  const handleSaveAndApply = () => {
    applyMetadataToDOM(seoData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('grand_veda_seo_metadata', JSON.stringify(seoData));
    }
    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 2500);
  };

  const handleReset = () => {
    setSeoData(DEFAULT_SEO_CONFIG);
    applyMetadataToDOM(DEFAULT_SEO_CONFIG);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('grand_veda_seo_metadata');
    }
    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 2000);
  };

  const generateHtmlHeadSnippet = () => {
    return `<!-- Search Engine & Social Media Metadata -->
<title>${seoData.title}</title>
<meta name="description" content="${seoData.description}" />
<meta name="keywords" content="${seoData.keywords}" />
<link rel="canonical" href="${seoData.canonicalUrl}" />

<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="${seoData.ogType}" />
<meta property="og:url" content="${seoData.canonicalUrl}" />
<meta property="og:title" content="${seoData.title}" />
<meta property="og:description" content="${seoData.description}" />
<meta property="og:image" content="${seoData.ogImage}" />
<meta property="og:site_name" content="${HOTEL_CONFIG.name}" />

<!-- Twitter / X -->
<meta name="twitter:card" content="${seoData.twitterCard}" />
<meta name="twitter:url" content="${seoData.canonicalUrl}" />
<meta name="twitter:title" content="${seoData.title}" />
<meta name="twitter:description" content="${seoData.description}" />
<meta name="twitter:image" content="${seoData.ogImage}" />

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Hotel", "EventVenue"],
  "name": "${HOTEL_CONFIG.name}",
  "description": "${seoData.description}",
  "image": "${seoData.ogImage}",
  "telephone": "${HOTEL_CONFIG.phone}",
  "email": "${HOTEL_CONFIG.email}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${HOTEL_CONFIG.address}",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "postalCode": "422003",
    "addressCountry": "IN"
  },
  "priceRange": "${seoData.priceRange}",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "${seoData.hotelRating}"
  }
}
</script>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateHtmlHeadSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isOpen) return null;

  const titleLength = seoData.title.length;
  const descLength = seoData.description.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 relative my-8 text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#C6A15B]/20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6A15B] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Search Engine Optimization & Social Sharing</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#173D32]">
              SEO & Social Metadata Manager
            </h3>
            <p className="text-xs text-neutral-600 mt-0.5">
              Customize title tags, descriptions, OpenGraph social cards, and Schema.org rich snippets with live previews.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors"
            aria-label="Close SEO Manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-neutral-200/80 pt-4 pb-2 text-xs font-semibold overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'editor'
                ? 'bg-[#173D32] text-white'
                : 'text-neutral-600 hover:bg-neutral-200/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Metadata Editor</span>
          </button>

          <button
            onClick={() => setActiveTab('google_preview')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'google_preview'
                ? 'bg-[#173D32] text-white'
                : 'text-neutral-600 hover:bg-neutral-200/60'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google Search Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('social_preview')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'social_preview'
                ? 'bg-[#173D32] text-white'
                : 'text-neutral-600 hover:bg-neutral-200/60'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Share Card Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('jsonld')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'jsonld'
                ? 'bg-[#173D32] text-white'
                : 'text-neutral-600 hover:bg-neutral-200/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Schema.org JSON-LD</span>
          </button>
        </div>

        {/* Tab 1: Editor */}
        {activeTab === 'editor' && (
          <div className="py-5 space-y-5 text-xs max-h-[60vh] overflow-y-auto pr-1">
            {/* Title */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-bold text-[#173D32] uppercase tracking-wider">
                  Page Title (&lt;title&gt; & og:title)
                </label>
                <span
                  className={`font-mono text-[11px] ${
                    titleLength >= 30 && titleLength <= 60
                      ? 'text-emerald-700 font-semibold'
                      : titleLength > 60
                      ? 'text-amber-700'
                      : 'text-neutral-500'
                  }`}
                >
                  {titleLength} / 60 chars {titleLength >= 30 && titleLength <= 60 ? '(Optimal)' : ''}
                </span>
              </div>
              <input
                type="text"
                value={seoData.title}
                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                className="w-full py-2 px-3 text-sm rounded-md border border-neutral-300 bg-white focus:border-[#C6A15B] focus:outline-none"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                Recommended 30–60 characters. Shows prominently in Google results and browser tab names.
              </p>
            </div>

            {/* Meta Description */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-bold text-[#173D32] uppercase tracking-wider">
                  Meta Description (&lt;meta name="description"&gt;)
                </label>
                <span
                  className={`font-mono text-[11px] ${
                    descLength >= 120 && descLength <= 160
                      ? 'text-emerald-700 font-semibold'
                      : descLength > 160
                      ? 'text-amber-700'
                      : 'text-neutral-500'
                  }`}
                >
                  {descLength} / 160 chars {descLength >= 120 && descLength <= 160 ? '(Optimal)' : ''}
                </span>
              </div>
              <textarea
                rows={3}
                value={seoData.description}
                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                className="w-full py-2 px-3 text-sm rounded-md border border-neutral-300 bg-white focus:border-[#C6A15B] focus:outline-none"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                Recommended 120–160 characters. Concisely explain the marriage garden, suites, and hotel venue features.
              </p>
            </div>

            {/* Canonical URL & Image URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1.5">
                  Canonical / Website URL
                </label>
                <input
                  type="url"
                  value={seoData.canonicalUrl}
                  onChange={(e) => setSeoData({ ...seoData, canonicalUrl: e.target.value })}
                  className="w-full py-2 px-3 text-xs rounded-md border border-neutral-300 bg-white focus:border-[#C6A15B] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1.5">
                  Open Graph Social Share Image URL
                </label>
                <input
                  type="url"
                  value={seoData.ogImage}
                  onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })}
                  className="w-full py-2 px-3 text-xs rounded-md border border-neutral-300 bg-white focus:border-[#C6A15B] focus:outline-none"
                />
              </div>
            </div>

            {/* Keywords */}
            <div>
              <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1.5">
                Target SEO Search Keywords
              </label>
              <input
                type="text"
                value={seoData.keywords}
                onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                placeholder="Separate with commas..."
                className="w-full py-2 px-3 text-xs rounded-md border border-neutral-300 bg-white focus:border-[#C6A15B] focus:outline-none"
              />
            </div>

            {/* Social Card Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1">
                  Twitter Card Format
                </label>
                <select
                  value={seoData.twitterCard}
                  onChange={(e) =>
                    setSeoData({
                      ...seoData,
                      twitterCard: e.target.value as 'summary_large_image' | 'summary',
                    })
                  }
                  className="w-full py-2 px-2.5 rounded border border-neutral-300 bg-white"
                >
                  <option value="summary_large_image">Large Image Card (Recommended)</option>
                  <option value="summary">Small Thumbnail Summary</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1">
                  Schema Star Rating
                </label>
                <select
                  value={seoData.hotelRating}
                  onChange={(e) => setSeoData({ ...seoData, hotelRating: e.target.value })}
                  className="w-full py-2 px-2.5 rounded border border-neutral-300 bg-white"
                >
                  <option value="5">5-Star Luxury Resort</option>
                  <option value="4.9">4.9 Star Verified</option>
                  <option value="4.8">4.8 Star</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#173D32] uppercase tracking-wider block mb-1">
                  Price Tier
                </label>
                <select
                  value={seoData.priceRange}
                  onChange={(e) => setSeoData({ ...seoData, priceRange: e.target.value })}
                  className="w-full py-2 px-2.5 rounded border border-neutral-300 bg-white"
                >
                  <option value="₹₹₹">₹₹₹ (Premium Luxury)</option>
                  <option value="₹₹₹₹">₹₹₹₹ (Ultra Palace Elite)</option>
                  <option value="₹₹">₹₹ (Moderate)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Google Search Snippet Preview */}
        {activeTab === 'google_preview' && (
          <div className="py-6">
            <div className="text-xs text-neutral-500 mb-3 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Simulated Google Search Desktop Result Card</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm max-w-2xl font-sans">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-[#173D32] flex items-center justify-center text-[9px] text-[#C6A15B] font-serif font-bold">
                  V
                </div>
                <div className="text-xs text-neutral-700 leading-none">
                  <span className="font-medium">{HOTEL_CONFIG.name}</span>
                  <span className="text-neutral-400 mx-1">›</span>
                  <span className="text-neutral-500">{seoData.canonicalUrl.replace(/^https?:\/\//, '')}</span>
                </div>
              </div>

              <h4 className="text-lg text-[#1a0dab] hover:underline cursor-pointer font-medium leading-snug">
                {seoData.title}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1 mb-1.5">
                <span className="text-amber-500">★★★★★</span>
                <span className="text-neutral-500">Rating: {seoData.hotelRating} · 240+ reviews · {seoData.priceRange}</span>
              </div>

              <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                {seoData.description}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Social Share Card Preview */}
        {activeTab === 'social_preview' && (
          <div className="py-6">
            <div className="text-xs text-neutral-500 mb-3 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Simulated OpenGraph Rich Card (WhatsApp, Facebook, LinkedIn, iMessage)</span>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm max-w-xl font-sans">
              <div className="aspect-[16/9] w-full bg-neutral-900 overflow-hidden relative">
                <img
                  src={seoData.ogImage}
                  alt="OpenGraph Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block mb-0.5">
                  {seoData.canonicalUrl.replace(/^https?:\/\//, '')}
                </span>
                <h4 className="font-bold text-sm text-neutral-900 leading-snug line-clamp-1 mb-1">
                  {seoData.title}
                </h4>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {seoData.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Schema.org JSON-LD Code */}
        {activeTab === 'jsonld' && (
          <div className="py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-600 font-semibold">
                Generated Schema.org Hotel & EventVenue JSON-LD
              </span>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 rounded bg-white border border-[#C6A15B]/40 text-[#173D32] hover:bg-neutral-100 text-xs font-semibold flex items-center gap-1.5"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-[#C6A15B]" />}
                <span>{copiedCode ? 'Copied HTML Head Snippet!' : 'Copy Code Snippet'}</span>
              </button>
            </div>

            <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-xl text-[11px] font-mono overflow-x-auto max-h-[50vh] border border-neutral-800">
              {generateHtmlHeadSnippet()}
            </pre>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#C6A15B]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 px-2 py-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to Defaults</span>
            </button>
            {appliedNotification && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ✓ Metadata applied to DOM & Saved!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded text-xs font-semibold text-neutral-600 hover:bg-neutral-200 transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleSaveAndApply}
              className="flex-1 sm:flex-none px-6 py-2 rounded text-xs font-semibold bg-[#173D32] hover:bg-[#0E2921] text-white transition-all shadow flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Apply & Save Metadata</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
