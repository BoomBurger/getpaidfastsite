'use client';

import { useEffect, useRef, useState } from 'react';

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const faqs = [
    {
      question: "What if the AI can't handle a complex situation?",
      answer: "You get notified instantly with a full call summary. The AI handles 95% of calls successfully - for edge cases, you step in with all the context you need."
    },
    {
      question: "How long does setup take?",
      answer: "Under 60 seconds. Click 'Connect Xero' → Authorize → AI starts calling. That's it."
    },
    {
      question: "Can I customize what the AI says?",
      answer: "Completely. Change the voice, script, tone, and messaging to match your brand. Make it sound exactly how you want."
    },
    {
      question: "What happens if someone promises to pay but doesn't?",
      answer: "AI automatically follows up based on your schedule. If they still don't pay, you get a detailed history of every conversation to take further action."
    },
    {
      question: "How does the AI sound? Will clients think it's a robot?",
      answer: "Professional and conversational. Clients know it's AI - we're completely transparent - but they're impressed by how natural it sounds."
    },
    {
      question: "Will my clients hate me for using a robot?",
      answer: "Quite the opposite. Your clients will appreciate the consistency and professionalism. Plus, the AI never has a bad day, forgets to follow up, or gets awkward about money. It's like having the world's most polite, patient collections specialist who never needs coffee breaks."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - FAQ */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted mb-6">
              Everything you need to know about getpaidfast.ai
            </p>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-light)] border border-primary/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-4 flex items-start justify-between gap-4 hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 pb-4 text-text-muted leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Us */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Contact Us
            </h2>
            <p className="text-text-muted mb-6">
              Have questions? Get in touch with our team
            </p>

            <div className="bg-[var(--bg-light)] border border-secondary/20 rounded-2xl p-8 pb-[4.5rem] relative overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(239, 68, 68, 0.15) 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}
            >
              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Email</h3>
                    <a
                      href="mailto:yahya@getpaidfast.ai"
                      className="text-white text-lg hover:text-secondary transition-colors"
                    >
                      yahya@getpaidfast.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Phone</h3>
                    <a
                      href="tel:+64211065683"
                      className="text-white text-lg hover:text-secondary transition-colors"
                    >
                      +64 21 106 5683
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Hours</h3>
                    <p className="text-white text-lg">9am - 9pm NZST</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-secondary/20">
                <p className="text-text-muted mb-4">
                  Ready to automate your collections?
                </p>
                <a
                  href="https://dashboard.getpaidfast.ai/register"
                  className="block w-full text-center px-6 py-3.5 bg-secondary text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
