'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      title: "Drag-and-Drop Queue",
      description: "Complete control over who gets called. No spam. No annoying your good clients.",
      visual: (
        <div className="h-full flex flex-col">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold text-white">Call Queue</h4>
              <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium">+ Add Client</button>
            </div>
            <div className="grid grid-cols-3 gap-4" style={{ height: 'calc(100% - 60px)' }}>
              <div className="bg-[var(--bg-light)] rounded-md p-3 border border-text/10 flex flex-col h-full">
                <div className="text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  Paused
                </div>
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="bg-background/80 border border-text/20 rounded-md p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-text/10 flex items-center justify-center text-text text-xs font-bold">A</div>
                      <span className="text-text text-sm font-medium">Acme Corp</span>
                    </div>
                    <p className="text-text-muted text-xs">$2,400</p>
                  </div>
                  <div className="bg-background/80 border border-text/20 rounded-md p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-text/10 flex items-center justify-center text-text text-xs font-bold">B</div>
                      <span className="text-text text-sm font-medium">BuildCo</span>
                    </div>
                    <p className="text-text-muted text-xs">$1,200</p>
                  </div>
                  <div className="bg-background/80 border border-text/20 rounded-md p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-text/10 flex items-center justify-center text-text text-xs font-bold">F</div>
                      <span className="text-text text-sm font-medium">FastPay Inc</span>
                    </div>
                    <p className="text-text-muted text-xs">$890</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 rounded-md p-3 border-2 border-primary/20 flex flex-col h-full relative">
                <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  Calling
                </div>
                <div className="space-y-2 flex-1 overflow-hidden pb-12">
                  <div className="bg-primary/10 border-2 border-primary rounded-md p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold">C</div>
                      <span className="text-white text-sm font-medium">ClientCo</span>
                    </div>
                    <p className="text-primary text-xs">$3,800</p>
                  </div>
                  <div className="bg-primary/10 border-2 border-primary rounded-md p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold">E</div>
                      <span className="text-white text-sm font-medium">EZ Services</span>
                    </div>
                    <p className="text-primary text-xs">$1,500</p>
                  </div>
                </div>
                <button className="absolute bottom-3 left-3 right-3 bg-secondary hover:bg-secondary/80 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </button>
              </div>
              <div className="bg-[var(--bg-light)] rounded-md p-3 border border-text/10 flex flex-col h-full">
                <div className="text-xs font-semibold text-green-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Done
                </div>
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="bg-background/50 border border-green-500/20 rounded-md p-2.5 opacity-70">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">D</div>
                      <span className="text-text text-sm font-medium">DataTech</span>
                    </div>
                    <p className="text-text-muted text-xs">$900</p>
                  </div>
                  <div className="bg-background/50 border border-green-500/20 rounded-md p-2.5 opacity-70">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">G</div>
                      <span className="text-text text-sm font-medium">GlobalPro</span>
                    </div>
                    <p className="text-text-muted text-xs">$2,100</p>
                  </div>
                  <div className="bg-background/50 border border-green-500/20 rounded-md p-2.5 opacity-70">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">H</div>
                      <span className="text-text text-sm font-medium">HiTech</span>
                    </div>
                    <p className="text-text-muted text-xs">$4,200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Full Customisation",
      description: "Change everything from the voice to the prompt. Inform the AI exactly how your business works.",
      visual: (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-auto">
            <h4 className="text-lg font-semibold text-white mb-6">AI Configuration</h4>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-text-muted mb-2 block uppercase tracking-wider">Voice Persona</label>
                <div className="bg-[var(--bg-light)] border border-primary/30 rounded-lg p-3 flex items-center justify-between">
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
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Assertiveness</label>
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">POLITE</span>
                </div>
                <div className="h-3 bg-[var(--bg-light)] rounded-full overflow-hidden border border-text/10">
                  <div className="h-full bg-secondary relative" style={{ width: '35%' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-primary -mr-2.5"></div>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-text-muted mb-2 block uppercase tracking-wider">Call Schedule</label>
                <div className="bg-[var(--bg-light)] border border-text/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text text-sm">9:00 AM - 5:00 PM</span>
                    <span className="text-text-muted text-xs">Mon-Fri</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-text-muted mb-2 block uppercase tracking-wider">Custom Prompt</label>
                <div className="bg-[var(--bg-light)] border border-text/10 rounded-lg p-3 max-h-28 overflow-hidden relative">
                  <p className="text-text text-sm leading-relaxed mb-2">
                    You are representing Construction Kiwis NZ, a construction company specializing in residential builds. Be professional and empathetic when discussing overdue invoices. Always offer flexible payment plans and maintain a respectful tone. Remember that many of our clients are small business owners facing their own cash flow challenges...
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--bg-light)] to-transparent pointer-events-none"></div>
                  <button className="relative z-10 text-secondary text-xs font-medium flex items-center gap-1 hover:text-primary transition-colors mt-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Prompt
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Max Retry Attempts</label>
                  <span className="text-text text-sm font-medium">3</span>
                </div>
                <input type="range" min="1" max="5" defaultValue="3" className="w-full h-2 bg-[var(--bg-light)] rounded-full appearance-none" readOnly />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Auto Voicemail",
      description: "If the client doesn't pick up, AI automatically leaves a professional voicemail explaining the situation.",
      visual: (
        <div className="h-full flex flex-col">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-6">Recent Activity</h4>
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
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-500 text-xs font-medium rounded">No Answer</span>
                  </div>
                  <p className="text-text-muted text-sm mb-1">Alpha Services Inc.</p>
                  <p className="text-text-muted text-xs">Dec 13, 2025 • 3:24 PM</p>
                </div>
              </div>
              <div className="bg-background/50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 h-10 mb-1">
                      {[4, 6, 5, 8, 6, 9, 7, 6, 5, 8, 6, 9, 8, 6, 7, 5, 6, 5, 7, 6, 5, 8, 7, 6].map((height, i) => (
                        <div key={i} className="flex-1 bg-primary/40 rounded-full" style={{ height: `${height * 2.5}px` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background/30 rounded-lg p-4 border border-text/10 max-h-32 overflow-hidden relative">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Transcript</span>
                </div>
                <p className="text-text text-sm leading-relaxed">
                  Hi, this is calling from Construction Kiwis NZ regarding invoice #4729 for $1,850. We noticed this payment is currently overdue by 14 days. We understand that sometimes things get busy, but we'd really appreciate if you could give us a call back at your earliest convenience to discuss payment arrangements. You can reach us at 0800-555-0123. Again, that's invoice number 4729 for one thousand eight hundred and fifty dollars. We value your business and look forward to...
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Better Response Rate",
      description: "Phone calls get answered immediately. Questions resolved in seconds, not days. See up to 10x better engagement.",
      visual: (
        <div className="h-full flex flex-col">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-6">Response Rate Analytics</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text font-medium">Emails</span>
                  <span className="text-text-muted text-sm">5.1%</span>
                </div>
                <div className="h-14 bg-[var(--bg-light)] rounded-lg overflow-hidden border border-text/10">
                  <div className="h-full bg-secondary flex items-center px-4" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text font-medium">getpaidfast.ai</span>
                  <span className="text-primary text-sm font-semibold">50.3%</span>
                </div>
                <div className="h-14 bg-[var(--bg-light)] rounded-lg overflow-hidden border border-text/10">
                  <div className="h-full bg-primary flex items-center px-4 relative" style={{ width: '50%' }}>
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
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Everything you need
          </h2>
          <p className="text-primary text-lg">
            Automate your accounts receivable with powerful features.
          </p>
        </div>

        {/* Split Layout */}
        <div className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Side - Feature List */}
          <div className="lg:col-span-2 space-y-1 flex flex-col">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
                className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-primary/10 border-l-4 border-primary'
                    : 'hover:bg-text/5 border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 transition-colors ${activeFeature === index ? 'text-primary' : 'text-text-muted'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 transition-colors ${activeFeature === index ? 'text-white' : 'text-text'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Single Visual Area */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 w-full h-full rounded-xl border-2 border-primary/40 bg-[#0a0a0a] shadow-2xl overflow-hidden p-8">
              <div className="relative h-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeFeature === index
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {feature.visual}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
