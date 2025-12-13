'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px',
    };

    const createObserver = (ref: React.RefObject<HTMLDivElement>, stepIndex: number) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(stepIndex);
          }
        },
        observerOptions
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    observers.push(createObserver(step1Ref, 0));
    observers.push(createObserver(step2Ref, 1));
    observers.push(createObserver(step3Ref, 2));

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4 text-center">
          How our solution works
        </h2>
        <p className="text-text-muted text-center mb-20 text-lg max-w-2xl mx-auto">
          Set it up once, then watch it work. No manual calls, no awkward conversations.
        </p>

        {/* Sticky Scroll Container */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Steps (Scrolling) */}
          <div className="lg:space-y-32 space-y-12 lg:pt-32">
            {/* Step 1 */}
            <div ref={step1Ref} className="lg:min-h-[60vh]">
              <div className={`transition-all duration-500 ${activeStep === 0 ? 'opacity-100' : 'lg:opacity-40 opacity-100'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Connect Xero (60 seconds)</h3>
                </div>
                <div className="pl-16">
                  <p className="text-text-muted text-lg mb-4">
                    Click 'Connect Xero' → Authorize → Done.
                  </p>
                  <p className="text-text text-base">
                    AI automatically finds every overdue invoice. No manual data entry, no CSV uploads, no hassle.
                  </p>
                </div>

                {/* Mobile Screenshot */}
                <div className="lg:hidden mt-8 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden max-h-[500px]">
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-3xl font-semibold text-white mb-2">Invoices</h3>
                      <p className="text-text-muted">Overdue invoices synced from Xero</p>
                    </div>

                    {/* Xero Integration Card */}
                    <div className="bg-[var(--bg-light)] border border-primary/30 rounded-xl p-5 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 7H7v6h6V7z" />
                              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-white">Xero Connected</h4>
                            <p className="text-text-muted text-xs">Last synced: 2 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-green-500 text-sm font-medium">Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Cards */}
                    <div className="space-y-3">
                      <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-base font-semibold text-white">INV-4729</h4>
                            <p className="text-text-muted text-xs">Due Nov 28, 2025</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">$3,240.00</div>
                            <span className="text-secondary text-xs">(12 days overdue)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            SC
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Skyline Contractors</p>
                            <p className="text-text-muted text-xs">+64 9 3847291</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-base font-semibold text-white">INV-4683</h4>
                            <p className="text-text-muted text-xs">Due Dec 3, 2025</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">$1,575.50</div>
                            <span className="text-secondary text-xs">(7 days overdue)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            OE
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Ocean Enterprises Ltd</p>
                            <p className="text-text-muted text-xs">+64 21 5584729</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-base font-semibold text-white">INV-4590</h4>
                            <p className="text-text-muted text-xs">Due Dec 5, 2025</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">$4,820.00</div>
                            <span className="text-secondary text-xs">(5 days overdue)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            VB
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Vanguard Builders</p>
                            <p className="text-text-muted text-xs">+64 27 9203847</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div ref={step2Ref} className="lg:min-h-[60vh]">
              <div className={`transition-all duration-500 ${activeStep === 1 ? 'opacity-100' : 'lg:opacity-40 opacity-100'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Makes Professional Calls</h3>
                </div>
                <div className="pl-16">
                  <div className="bg-[var(--bg-light)] border border-primary/30 rounded-xl p-5 mb-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <span className="text-primary font-semibold flex-shrink-0">AI Agent:</span>
                        <span className="text-text">"Hi, this is calling from [Your Business] about invoice #1234 for $2,500 that's 15 days overdue..."</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-secondary font-semibold flex-shrink-0">Client:</span>
                        <span className="text-text">"Oh yes, I'll process that payment today."</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text text-base">
                    AI handles objections, negotiates payment dates, sounds completely natural. Never pushy, always professional.
                  </p>
                </div>

                {/* Mobile Screenshot */}
                <div className="lg:hidden mt-8 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden max-h-[500px]">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">Call with Tech Solutions Ltd</h3>
                        <p className="text-text-muted text-sm">+64 21 8847392 • Dec 10, 2025, 2:15 PM</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">Promised</span>
                    </div>

                    <div className="bg-[var(--bg-light)] border border-primary/30 rounded-xl p-5 mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        AI Generated Summary
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Max contacted Tech Solutions regarding invoice #INV-2847 ($1,850) for consulting services. Client acknowledged the overdue amount and committed to processing payment within 3 business days. Payment expected by December 13th.
                      </p>
                    </div>

                    <div className="bg-[var(--bg-light)] border border-green-500/30 rounded-xl p-5 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold text-white">INV-2847</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">$1,850.00</div>
                          <div className="text-xs text-text-muted">of $1,850.00</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Due Dec 1, 2025</span>
                          <span className="text-secondary text-xs">(9 days overdue)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-text-muted text-xs">Payment promised by Dec 13, 2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        Transcript
                        <span className="text-xs text-text-muted ml-auto">18 messages</span>
                      </h4>
                      <div className="space-y-3 text-xs">
                        <div className="flex gap-2">
                          <span className="text-primary font-semibold w-16 flex-shrink-0">AI Agent:</span>
                          <span className="text-text-muted">Hi, this is Max calling from Brilliant Construction regarding invoice INV-2847 for $1,850...</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-secondary font-semibold w-16 flex-shrink-0">Client:</span>
                          <span className="text-text-muted">Oh yes, I've been meaning to get to that. Can I have until Friday?</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div ref={step3Ref} className="lg:min-h-[60vh]">
              <div className={`transition-all duration-500 ${activeStep === 2 ? 'opacity-100' : 'lg:opacity-40 opacity-100'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Watch Payments Roll In</h3>
                </div>
                <div className="pl-16">
                  <p className="text-text-muted text-lg mb-4">
                    Get instant notifications when clients promise to pay.
                  </p>
                  <p className="text-text text-base mb-4">
                    Full call transcripts + recordings for every conversation. Track promises, payment dates, and outcomes all in one dashboard.
                  </p>
                  <ul className="space-y-2 text-text-muted">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Call history with timestamps
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Payment promises tracked
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Full transcripts & audio recordings
                    </li>
                  </ul>
                </div>

                {/* Mobile Screenshot */}
                <div className="lg:hidden mt-8 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden max-h-[500px]">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-semibold text-white mb-2">Call History</h3>
                        <p className="text-text-muted">Track your AI-powered collection calls and their outcomes</p>
                      </div>
                      <div className="flex gap-6">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-500">28</div>
                          <div className="text-xs text-text-muted">Completed</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">35</div>
                          <div className="text-xs text-text-muted">Total Calls</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-[var(--bg-light)] border-l-4 border-green-500 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">
                            TS
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Tech Solutions Ltd</h4>
                            <p className="text-text-muted text-xs">+64 21 8847392</p>
                            <p className="text-text-muted text-xs mt-1">5d ago • 1m 42s</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">✓ Promised</span>
                      </div>

                      <div className="bg-[var(--bg-light)] border-l-4 border-yellow-500 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-sm">
                            AB
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Alpha Building Co</h4>
                            <p className="text-text-muted text-xs">+64 27 4429183</p>
                            <p className="text-text-muted text-xs mt-1">6d ago • 18s</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-medium">No Answer</span>
                      </div>

                      <div className="bg-[var(--bg-light)] border-l-4 border-green-500 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">
                            MC
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Metro Construction</h4>
                            <p className="text-text-muted text-xs">+64 21 9384756</p>
                            <p className="text-text-muted text-xs mt-1">1w ago • 2m 8s</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">✓ Paid</span>
                      </div>

                      <div className="bg-[var(--bg-light)] border-l-4 border-blue-500 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
                            PD
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Pacific Design Group</h4>
                            <p className="text-text-muted text-xs">+64 9 8765432</p>
                            <p className="text-text-muted text-xs mt-1">1w ago • 51s</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs font-medium">Voicemail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Screenshots (Sticky) - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <div className="sticky top-40 h-[70vh] flex items-center justify-center">
              {/* Screenshot - Step 1: Invoices with Xero Integration */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl transition-all duration-700 overflow-auto ${
                  activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-3xl font-semibold text-white mb-2">Invoices</h3>
                    <p className="text-text-muted">Overdue invoices synced from Xero</p>
                  </div>

                  {/* Xero Integration Card */}
                  <div className="bg-[var(--bg-light)] border border-primary/30 rounded-xl p-5 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 7H7v6h6V7z" />
                            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white">Xero Connected</h4>
                          <p className="text-text-muted text-xs">Last synced: 2 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-green-500 text-sm font-medium">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Cards */}
                  <div className="space-y-3">
                    {/* Invoice 1 */}
                    <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-base font-semibold text-white">INV-4729</h4>
                          <p className="text-text-muted text-xs">Due Nov 28, 2025</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">$3,240.00</div>
                          <span className="text-secondary text-xs">(12 days overdue)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                          SC
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Skyline Contractors</p>
                          <p className="text-text-muted text-xs">+64 9 3847291</p>
                        </div>
                      </div>
                    </div>

                    {/* Invoice 2 */}
                    <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-base font-semibold text-white">INV-4683</h4>
                          <p className="text-text-muted text-xs">Due Dec 3, 2025</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">$1,575.50</div>
                          <span className="text-secondary text-xs">(7 days overdue)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                          OE
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Ocean Enterprises Ltd</p>
                          <p className="text-text-muted text-xs">+64 21 5584729</p>
                        </div>
                      </div>
                    </div>

                    {/* Invoice 3 */}
                    <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-base font-semibold text-white">INV-4590</h4>
                          <p className="text-text-muted text-xs">Due Dec 5, 2025</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">$4,820.00</div>
                          <span className="text-secondary text-xs">(5 days overdue)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-text/10">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                          VB
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Vanguard Builders</p>
                          <p className="text-text-muted text-xs">+64 27 9203847</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot - Step 2: Call Details */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl transition-all duration-700 overflow-auto ${
                  activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Call with Tech Solutions Ltd</h3>
                      <p className="text-text-muted text-sm">+64 21 8847392 • Dec 10, 2025, 2:15 PM</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">Promised</span>
                  </div>

                  <div className="bg-[var(--bg-light)] border border-primary/30 rounded-xl p-5 mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      AI Generated Summary
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Max contacted Tech Solutions regarding invoice #INV-2847 ($1,850) for consulting services. Client acknowledged the overdue amount and committed to processing payment within 3 business days. Payment expected by December 13th.
                    </p>
                  </div>

                  <div className="bg-[var(--bg-light)] border border-green-500/30 rounded-xl p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-white">INV-2847</h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">$1,850.00</div>
                        <div className="text-xs text-text-muted">of $1,850.00</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Due Dec 1, 2025</span>
                        <span className="text-secondary text-xs">(9 days overdue)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-muted text-xs">Payment promised by Dec 13, 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-light)] border border-text/10 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      Transcript
                      <span className="text-xs text-text-muted ml-auto">18 messages</span>
                    </h4>
                    <div className="space-y-3 text-xs">
                      <div className="flex gap-2">
                        <span className="text-primary font-semibold w-16 flex-shrink-0">AI Agent:</span>
                        <span className="text-text-muted">Hi, this is Max calling from Brilliant Construction regarding invoice INV-2847 for $1,850...</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-secondary font-semibold w-16 flex-shrink-0">Client:</span>
                        <span className="text-text-muted">Oh yes, I've been meaning to get to that. Can I have until Friday?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot - Step 3: Call History Dashboard */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl transition-all duration-700 overflow-auto ${
                  activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-semibold text-white mb-2">Call History</h3>
                      <p className="text-text-muted">Track your AI-powered collection calls and their outcomes</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-500">28</div>
                        <div className="text-xs text-text-muted">Completed</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">35</div>
                        <div className="text-xs text-text-muted">Total Calls</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Call 1 - Completed */}
                    <div className="bg-[var(--bg-light)] border-l-4 border-green-500 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">
                          TS
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Tech Solutions Ltd</h4>
                          <p className="text-text-muted text-xs">+64 21 8847392</p>
                          <p className="text-text-muted text-xs mt-1">5d ago • 1m 42s</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">✓ Promised</span>
                    </div>

                    {/* Call 2 - No Answer */}
                    <div className="bg-[var(--bg-light)] border-l-4 border-yellow-500 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-sm">
                          AB
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Alpha Building Co</h4>
                          <p className="text-text-muted text-xs">+64 27 4429183</p>
                          <p className="text-text-muted text-xs mt-1">6d ago • 18s</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-medium">No Answer</span>
                    </div>

                    {/* Call 3 - Completed */}
                    <div className="bg-[var(--bg-light)] border-l-4 border-green-500 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">
                          MC
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Metro Construction</h4>
                          <p className="text-text-muted text-xs">+64 21 9384756</p>
                          <p className="text-text-muted text-xs mt-1">1w ago • 2m 8s</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">✓ Paid</span>
                    </div>

                    {/* Call 4 - Voicemail */}
                    <div className="bg-[var(--bg-light)] border-l-4 border-blue-500 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
                          PD
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Pacific Design Group</h4>
                          <p className="text-text-muted text-xs">+64 9 8765432</p>
                          <p className="text-text-muted text-xs mt-1">1w ago • 51s</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs font-medium">Voicemail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
