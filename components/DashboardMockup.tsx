'use client';

import { useState } from 'react';

export default function DashboardMockup() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-lg">
      {/* Dashboard Card */}
      <div className="bg-[var(--bg-light)] rounded-xl border border-secondary overflow-hidden shadow-2xl">
        {/* Invoice Card */}
        <div className="p-6 border-b border-white/[0.08]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold">Invoices Discussed</h4>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-green-600 font-medium">1 Promised</span>
            </div>
          </div>

          <div className="bg-background/50 rounded-lg p-4 border border-green-600/30">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span className="font-semibold">INV-0034</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">$650.00</div>
                <div className="text-xs text-text-muted">of $650.00</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Due Dec 5, 2025</span>
                <span className="text-secondary text-xs">(3 days overdue)</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Payment Outcome</span>
                <span className="text-green-600 font-medium">Promised</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-muted">Payment promised by</span>
                <span className="font-medium">Dec 15, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call Recording & Transcript Header */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <h4 className="text-sm font-semibold">Transcript</h4>
            <span className="text-xs text-text-muted">21 messages</span>
          </div>

          {/* Transcript Preview */}
          <div className="space-y-3 text-sm pb-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-primary font-medium">AI Agent</div>
              <div className="flex-1 text-text-muted">
                Hi, this is Max calling from Brilliant Construction NZ.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-secondary font-medium">Customer</div>
              <div className="flex-1 text-text-muted">
                Yeah. You are. What's the purpose of your call?
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-primary font-medium">AI Agent</div>
              <div className="flex-1 text-text-muted">
                I'm calling about invoice INV-0034 for $650. When do you think you'll be able to make a payment?
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-secondary font-medium">Customer</div>
              <div className="flex-1 text-text-muted">
                I can get that sorted by next week, probably around the 15th.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-primary font-medium">AI Agent</div>
              <div className="flex-1 text-text-muted">
                Perfect, I'll make a note that payment is expected by December 15th. Thanks for confirming!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
