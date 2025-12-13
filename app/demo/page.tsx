'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Initialize audio element
    const audio = new Audio('/recording.mp3');
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const waveformBars = useMemo(() => {
    return Array.from({ length: 60 }, () => ({
      height: Math.floor(Math.random() * 80) + 20,
      duration: 0.8 + Math.random() * 0.5
    }));
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  const formatTime = (time: number): string => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto w-full animate-slide-up">

        {/* Demo Warning Banner */}
        <div className="mb-6 rounded-xl border border-secondary/30 bg-secondary/10 p-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white mb-1">Demo Call Recording</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                This is what you would actually see after the AI calls your client. Listen to the recording and review the full transcript, invoice updates, and payment promises.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div>
            <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-text">Demo Call</span>
            </div>
            <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Call with City Limousines</h1>
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +64 21 106 5683
              </span>
              <span className="w-1 h-1 rounded-full bg-text/30"></span>
              <span>Dec 8, 2025, 7:36 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="h-8 px-3 rounded border border-white/10 text-xs font-medium text-text-muted hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back
            </a>
            <div className="h-8 px-3 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Completed
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>

          {/* Summary Section */}
          <div className="rounded-xl border border-text/10 bg-[var(--bg-light)] p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M8 18v-1"/><path d="M16 18v-3"/></svg>
              <h2 className="text-sm font-medium text-white">AI Generated Call Summary</h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Max called City Limousines regarding an overdue invoice for $650. After verifying he was speaking with the right person and getting permission to discuss the invoice, Max provided details about invoice INV-0034 for development work. The customer remembered the work and promised to pay within a week, specifically by December 15th, 2025. Max recorded the payment promise and concluded the call professionally after confirming the customer had no further questions.
            </p>
          </div>

          {/* Invoices Section */}
          <div className="rounded-xl border border-text/10 bg-[var(--bg-light)] overflow-hidden">
            <div className="px-5 py-3 border-b border-text/10 flex justify-between items-center bg-white/[0.02]">
              <h3 className="text-sm font-medium text-white">Invoices Discussed</h3>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-xs text-text-muted">1 Promised</span>
              </div>
            </div>
            <div className="p-5">
              <div className="group relative rounded-lg border border-text/10 bg-background p-5 hover:bg-[var(--bg-secondary)] hover:border-text/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold border border-secondary/20 mt-1">
                      1
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white tracking-tight">INV-0034</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-text-muted border border-white/5">PO 9-7-1-1</span>
                      </div>
                      <div className="text-xs text-text-muted">Due Dec 5, 2025 <span className="text-secondary ml-1 font-medium">(3 days overdue)</span></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-white tracking-tight">$650.00</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Outstanding</div>
                  </div>
                </div>

                {/* Outcome Box */}
                <div className="rounded border border-green-900/30 bg-green-500/5 p-4 mb-3 relative overflow-hidden">
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <div className="text-xs text-green-400 font-medium flex items-center gap-1.5 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        Payment promised by
                      </div>
                      <div className="text-sm font-semibold text-white">Dec 15, 2025</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-green-500/60 uppercase tracking-widest mb-1">Status</div>
                      <div className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">PROMISED</div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex items-center gap-3 bg-background border border-text/10 rounded px-3 py-2">
                  <div className="w-5 h-5 rounded-full bg-text/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  </div>
                  <div className="text-xs text-text-muted italic">"Customer promised to pay within a week"</div>
                  <div className="ml-auto text-[10px] text-text/40 font-mono">ID: 68d4a291</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transcript & Player Section */}
          <div className="rounded-xl border border-text/10 bg-[var(--bg-light)] flex flex-col overflow-hidden h-[800px]">

            {/* Player Header */}
            <div className="p-4 border-b border-text/10 flex flex-col gap-4 bg-white/[0.02]">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Call Recording
                </h3>
              </div>

              {/* Waveform Player */}
              <div className="bg-background rounded-lg border border-text/10 p-3 flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white text-background flex items-center justify-center hover:bg-text transition-colors flex-shrink-0"
                >
                  {!isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-0.5 h-8 w-full overflow-hidden opacity-60">
                    {mounted && waveformBars.map((bar, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-primary rounded-full mx-[1px] transition-all ${
                          isPlaying ? 'animate-pulse' : ''
                        }`}
                        style={{
                          height: isPlaying ? `${bar.height}%` : '4px',
                          animationDuration: `${bar.duration}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-mono text-text-muted w-16 text-right">
                  {formatTime(currentTime)}
                </div>
              </div>
            </div>

            {/* Chat Feed */}
            <div
              className="flex-1 overflow-y-auto p-6 space-y-6"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
            >

              {/* AI Messages and Customer responses - simplified for brevity, you can add all messages */}
              <AIMessage time="00:01" message="Hi, this is Max calling from Brilliant Construction NZ." />
              <AIMessage time="00:04" message="Hi! Am I speaking with City Limousines?" />
              <CustomerMessage time="00:07" message="Yeah. You are. What's the purpose of your call?" />
              <AIMessage time="00:10" message="Great, thanks for confirming. I'm calling about some overdue invoices. Is now a good time to go through them with you?" />
              <CustomerMessage time="00:15" message="Yeah. That's fine." />
              <AIMessage time="00:18" message="Okay, the first invoice I have is number INV-0034 for six hundred fifty dollars. When do you think you'll be able to make a payment on this one?" />
              <CustomerMessage time="00:24" message="Mate, you gotta tell me something more than the invoice number. What was it for again?" />
              <AIMessage time="00:29" message="That invoice was for development work - developer onsite, with reference P/O 9-7-1-1. It was due on December fifth, so it's about three days overdue now. When do you think you'll be able to make a payment on this one?" />
              <CustomerMessage time="00:38" message="Right. Right. Oh, yes. Okay. I remember that. Can you give me a week?" />
              <AIMessage time="00:43" message="Great, I have that down for December fifteenth, twenty twenty-five. Thank you." />

              {/* System Action */}
              <SystemAction
                type="update"
                title="Update Invoice"
                content={`"invoiceId": "INV-0034",\n"promiseDate": "2025-12-15"`}
              />

              <SystemResult
                content={`{"success":true,"data":{"invoiceId":"68d4a291...","paymentOutcome":"promised","notes":"Customer promised to pay"},"message":"Payment promise updated successfully"}`}
              />

              <CustomerMessage time="00:46" message="Cool. Perfect." />
              <AIMessage time="00:49" message="That's all the invoices I had for today. Do you have any questions for me before I let you go?" />
              <CustomerMessage time="00:53" message="No questions, mate. No questions." />
              <AIMessage time="00:56" message="Perfect. Thank you for your time today, City Limousines. Have a great day." />
              <CustomerMessage time="00:59" message="Thank you. See you." />

              <SystemAction
                type="end"
                title="End Call"
                content={`{"reason": "Call completed successfully - payment promise recorded"}`}
              />

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function AIMessage({ time, message }: { time: string; message: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </div>
      </div>
      <div className="flex-1 max-w-3xl">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xs font-bold text-primary">AI Agent</span>
          <span className="text-[10px] text-text/40">{time}</span>
        </div>
        <div className="text-sm text-text bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-none px-4 py-3 inline-block">
          {message}
        </div>
      </div>
    </div>
  );
}

function CustomerMessage({ time, message }: { time: string; message: string }) {
  return (
    <div className="flex gap-4 flex-row-reverse group">
      <div className="flex-shrink-0 flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-full bg-text/10 flex items-center justify-center">
          <span className="text-xs font-bold text-white">CL</span>
        </div>
      </div>
      <div className="flex-1 max-w-3xl flex flex-col items-end">
        <div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
          <span className="text-xs font-bold text-text-muted">Customer</span>
          <span className="text-[10px] text-text/40">{time}</span>
        </div>
        <div className="text-sm text-text bg-[var(--bg-secondary)] border border-text/10 rounded-2xl rounded-tr-none px-4 py-3 inline-block">
          {message}
        </div>
      </div>
    </div>
  );
}

function SystemAction({ type, title, content }: { type: string; title: string; content: string }) {
  const color = type === 'update' ? 'yellow' : type === 'end' ? 'blue' : 'primary';
  const colorClasses = {
    yellow: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-500/80',
    blue: 'border-primary/20 bg-primary/5 text-primary',
    primary: 'border-primary/20 bg-primary/5 text-primary'
  };

  return (
    <div className="pl-12 pr-4 md:pr-0">
      <div className={`rounded-md border ${colorClasses[color as keyof typeof colorClasses]} p-3 font-mono text-xs overflow-x-auto relative group`}>
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${color}-500/40 rounded-l-md`}></div>
        <div className="flex items-center gap-2 mb-2 uppercase tracking-wider text-[10px] font-bold opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          System Action: {title}
        </div>
        <div className="text-text-muted whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}

function SystemResult({ content }: { content: string }) {
  return (
    <div className="pl-12 pr-4 md:pr-0">
      <div className="rounded-md border border-green-500/20 bg-green-500/5 p-3 font-mono text-xs overflow-x-auto relative group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500/40 rounded-l-md"></div>
        <div className="flex items-center gap-2 mb-2 text-green-500/80 uppercase tracking-wider text-[10px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          System Result: Success
        </div>
        <div className="text-text/50 whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}
