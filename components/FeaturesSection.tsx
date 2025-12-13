'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4 text-center">
            Powerful features that are included
          </h2>
          <p className="text-primary text-lg">
            Everything you need to automate your accounts receivable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1: Better Response Rate */}
          <div
            className={`bg-[var(--bg-light)] border border-text/10 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Better Response Rate
            </h3>
            <p className="text-text-muted mb-8">
              Phone calls get answered immediately. Questions resolved in seconds, not days. With emails, every back-and-forth takes forever. See up to 10x better engagement.
            </p>

            {/* Screenshot Mockup */}
            <div className="rounded-xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-6">Response Rate Analytics</h4>

                {/* Bar Chart */}
                <div className="space-y-6">
                  {/* Email Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-text font-medium">Emails</span>
                      <span className="text-text-muted text-sm">5.1%</span>
                    </div>
                    <div className="h-14 bg-[var(--bg-light)] rounded-lg overflow-hidden border border-text/10">
                      <div
                        className="h-full bg-secondary flex items-center px-4"
                        style={{ width: '10%' }}
                      >
                      </div>
                    </div>
                  </div>

                  {/* AI Calls Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-text font-medium">AI Calls</span>
                      <span className="text-primary text-sm font-semibold">50.3%</span>
                    </div>
                    <div className="h-14 bg-[var(--bg-light)] rounded-lg overflow-hidden border border-text/10">
                      <div
                        className="h-full bg-primary flex items-center px-4 relative"
                        style={{ width: '50%' }}
                      >
                        <span className="text-white text-sm font-semibold">10x Better</span>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Drag-and-Drop Queue */}
          <div
            className={`bg-[var(--bg-light)] border border-text/10 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Drag-and-Drop Queue
            </h3>
            <p className="text-text-muted mb-8">
              Complete control over who gets called. No spam. No annoying your good clients.
            </p>

            {/* Screenshot Mockup */}
            <div className="rounded-xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-white">Call Queue</h4>
                  <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium">
                    + Add Client
                  </button>
                </div>

                {/* Queue Columns */}
                <div className="grid grid-cols-3 gap-4">
                  {/* PAUSED Column */}
                  <div className="bg-[var(--bg-light)] rounded-lg p-3 border border-text/10">
                    <div className="text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      Paused
                    </div>
                    <div className="space-y-2">
                      <div className="bg-background/80 border border-text/20 rounded-lg p-3 cursor-move hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-text/10 flex items-center justify-center text-text text-xs font-bold">
                            A
                          </div>
                          <span className="text-text text-sm font-medium">Client A</span>
                        </div>
                        <p className="text-text-muted text-xs">$2,400</p>
                      </div>
                      <div className="bg-background/80 border border-text/20 rounded-lg p-3 cursor-move hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-text/10 flex items-center justify-center text-text text-xs font-bold">
                            B
                          </div>
                          <span className="text-text text-sm font-medium">Client B</span>
                        </div>
                        <p className="text-text-muted text-xs">$1,200</p>
                      </div>
                    </div>
                  </div>

                  {/* CALLING Column */}
                  <div className="bg-primary/10 rounded-lg p-3 border-2 border-primary/20">
                    <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      Calling
                    </div>
                    <div className="space-y-2">
                      <div className="bg-primary/10 border-2 border-primary rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold">
                            C
                          </div>
                          <span className="text-white text-sm font-medium">Client C</span>
                        </div>
                        <p className="text-primary text-xs">$3,800</p>
                      </div>
                    </div>
                  </div>

                  {/* DONE Column */}
                  <div className="bg-[var(--bg-light)] rounded-lg p-3 border border-text/10">
                    <div className="text-xs font-semibold text-green-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Done
                    </div>
                    <div className="space-y-2">
                      <div className="bg-background/50 border border-green-500/20 rounded-lg p-3 opacity-70">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">
                            D
                          </div>
                          <span className="text-text text-sm font-medium">Client D</span>
                        </div>
                        <p className="text-text-muted text-xs">$900</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Full Customisation */}
          <div
            className={`bg-[var(--bg-light)] border border-text/10 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Full Customisation
            </h3>
            <p className="text-text-muted mb-8">
              Change everything from the voice to the prompt. Inform the AI exactly how your business works.
            </p>

            {/* Screenshot Mockup */}
            <div className="rounded-xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-6">Voice Settings</h4>

                {/* Customisation Options */}
                <div className="space-y-6">
                  {/* Voice Persona Dropdown */}
                  <div>
                    <label className="text-xs font-semibold text-text-muted mb-3 block uppercase tracking-wider">
                      Voice Persona
                    </label>
                    <div className="bg-[var(--bg-light)] border border-primary/30 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white text-sm font-medium">Rachel</span>
                          <p className="text-text-muted text-xs">Professional, Kiwi Accent</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Assertiveness Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Assertiveness
                      </label>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
                        POLITE
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <div className="h-3 bg-[var(--bg-light)] rounded-full overflow-hidden border border-text/10">
                        <div className="h-full bg-secondary relative" style={{ width: '35%' }}>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-primary -mr-2.5"></div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-text-muted">Gentle</span>
                        <span className="text-xs text-text-muted">Firm</span>
                      </div>
                    </div>
                  </div>

                  {/* Custom Prompt */}
                  <div>
                    <label className="text-xs font-semibold text-text-muted mb-3 block uppercase tracking-wider">
                      Custom Prompt
                    </label>
                    <div className="bg-[var(--bg-light)] border border-text/10 rounded-lg p-4">
                      <p className="text-text text-sm leading-relaxed">
                        You are a representing Construction Kiwis NZ we are a construction company and specialise in...
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-secondary text-xs">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit Prompt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Auto Voicemail */}
          <div
            className={`bg-[var(--bg-light)] border border-text/10 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Sends Voicemails
            </h3>
            <p className="text-text-muted mb-8">
              If the client doesn't pick up, AI automatically leaves a professional voicemail explaining the situation.
            </p>

            {/* Screenshot Mockup */}
            <div className="rounded-xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-6">Recent Activity</h4>

                {/* Voicemail Card */}
                <div className="bg-[var(--bg-light)] border border-blue-500/30 rounded-xl p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-base font-semibold">Voicemail Left</span>
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-500 text-xs font-medium rounded">
                          No Answer
                        </span>
                      </div>
                      <p className="text-text-muted text-sm mb-1">Alpha Services Inc.</p>
                      <p className="text-text-muted text-xs">Dec 13, 2025 • 3:24 PM • +64 9 4729384</p>
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="bg-background/50 rounded-lg p-4 mb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 h-10 mb-1">
                          {[4, 6, 5, 8, 6, 9, 7, 6, 5, 8, 6, 9, 8, 6, 7, 5, 6, 5, 7, 6, 5, 8, 7, 6].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-primary/40 rounded-full transition-all hover:bg-primary/60"
                              style={{ height: `${height * 2.5}px` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-xs text-text-muted">
                          <span>0:00</span>
                          <span>0:18</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transcript */}
                  <div className="bg-background/30 rounded-lg p-4 border border-text/10">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Voicemail Transcript</span>
                    </div>
                    <p className="text-text text-sm leading-relaxed">
                      "Hi, this is calling from <span className="text-primary">[Your Company]</span> regarding invoice #4729 for $1,850. We noticed this payment is currently overdue. Please give us a call back at your earliest convenience to discuss payment arrangements. Thank you."
                    </p>
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
