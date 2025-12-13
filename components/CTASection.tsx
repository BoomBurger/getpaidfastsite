'use client';

import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
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
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to get paid <span className="text-primary">fast</span><span className="text-3xl md:text-4xl">.ai?</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Stop chasing payments manually. Let AI handle your collections while you focus on growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://dashboard.getpaidfast.ai/register"
              className="inline-block px-10 py-4 bg-white text-background rounded-full font-bold text-lg hover:bg-text transition-colors shadow-2xl"
            >
              Use For Free
            </a>
            <a
              href="#pricing"
              className="inline-block px-10 py-4 bg-background text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:border-white/40 transition-colors"
            >
              View Pricing
            </a>
          </div>

          {/* Trust Badge */}
          <p className="text-text-muted text-sm mt-8">
            No credit card required • 15 free calls/month • Completely free
          </p>
        </div>
      </div>
    </section>
  );
}
