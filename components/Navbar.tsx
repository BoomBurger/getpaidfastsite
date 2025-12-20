"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [ctaHighlighted, setCtaHighlighted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const howItWorksSection = document.querySelector('#how-it-works');

    if (!howItWorksSection) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setCtaHighlighted(true);
        } else if (entry.isIntersecting) {
          setCtaHighlighted(false);
        }
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px'
      }
    );

    observerRef.current.observe(howItWorksSection);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 rounded-b-2xl px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">
              getpaid<span className="text-primary">fast</span>.ai
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://dashboard.getpaidfast.ai/login"
              className="text-text-muted hover:text-secondary transition-colors font-medium"
            >
              Login
            </a>
            <a
              href="https://dashboard.getpaidfast.ai/register"
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-500 ${
                ctaHighlighted
                  ? 'bg-secondary text-white'
                  : 'bg-text text-background hover:bg-secondary'
              }`}
            >
              Use For Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
