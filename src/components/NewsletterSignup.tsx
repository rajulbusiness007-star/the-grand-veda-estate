import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'weddings' | 'stays' | 'all'>('weddings');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Check if already subscribed in local state
    const existing = localStorage.getItem('grand_veda_subscribers');
    const subscriberList: string[] = existing ? JSON.parse(existing) : [];

    if (subscriberList.includes(email.trim().toLowerCase())) {
      setStatus('error');
      setErrorMessage('You are already subscribed to The Grand Veda Privileges!');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      subscriberList.push(email.trim().toLowerCase());
      localStorage.setItem('grand_veda_subscribers', JSON.stringify(subscriberList));
      setStatus('success');
    }, 600);
  };

  return (
    <div className="bg-[#0E2921] rounded-2xl border border-[#C6A15B]/35 p-6 sm:p-8 lg:p-10 mb-12 shadow-xl relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' ? (
        <div className="text-center py-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-serif font-bold text-white mb-1">
            Welcome to The Grand Veda Circle
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-4 leading-relaxed">
            We’ve sent our digital <strong>2026 Wedding Lookbook & Tariff Privileges</strong> to <span className="text-[#E6C280] font-mono">{email}</span>.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setEmail('');
            }}
            className="text-xs text-[#C6A15B] hover:text-[#E6C280] underline underline-offset-4 font-semibold"
          >
            Subscribe another address
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#E6C280] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Privileged Access & Wedding Lookbook</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Receive Exclusive Celebration Offers & Seasonal Tariffs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed max-w-lg">
              Be the first to learn about open auspicious wedding dates, seasonal suite stay packages, and private chef tasting invitations.
            </p>
          </div>

          {/* Right Form (6 cols) */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
              {/* Interest Selector Pills */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setInterest('weddings')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    interest === 'weddings'
                      ? 'bg-[#C6A15B] text-[#173D32] border-[#C6A15B] font-semibold'
                      : 'bg-white/5 text-neutral-300 border-white/15 hover:bg-white/10'
                  }`}
                >
                  Weddings & Celebrations
                </button>
                <button
                  type="button"
                  onClick={() => setInterest('stays')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    interest === 'stays'
                      ? 'bg-[#C6A15B] text-[#173D32] border-[#C6A15B] font-semibold'
                      : 'bg-white/5 text-neutral-300 border-white/15 hover:bg-white/10'
                  }`}
                >
                  Suites & Stays
                </button>
                <button
                  type="button"
                  onClick={() => setInterest('all')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    interest === 'all'
                      ? 'bg-[#C6A15B] text-[#173D32] border-[#C6A15B] font-semibold'
                      : 'bg-white/5 text-neutral-300 border-white/15 hover:bg-white/10'
                  }`}
                >
                  All Privileges
                </button>
              </div>

              {/* Input + Button row */}
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address (e.g. bride@example.com)"
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg text-xs sm:text-sm bg-white/10 text-white placeholder-neutral-400 border border-white/20 focus:outline-none focus:border-[#C6A15B] focus:bg-white/15 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#C6A15B] hover:bg-[#D4AF37] active:bg-[#B88E43] text-[#173D32] transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-70 font-sans"
                >
                  {status === 'loading' ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Join The Circle</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Error feedback */}
              {status === 'error' && (
                <div className="flex items-center gap-1.5 text-xs text-rose-300 animate-fade-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Confidentiality Notice */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>We respect your privacy. No spam, ever. Unsubscribe with one click anytime.</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
