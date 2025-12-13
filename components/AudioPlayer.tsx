"use client";

import { useState, useRef, useEffect, useMemo } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Generate fixed waveform heights to avoid hydration errors
  const waveformHeights = useMemo(() => {
    return Array.from({ length: 40 }, () => Math.random() * 60 + 40);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-r from-primary/30 to-primary/30 backdrop-blur-sm rounded-2xl px-5 py-4 border border-primary/30">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-11 h-11 rounded-full bg-text flex items-center justify-center hover:bg-secondary transition-colors shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                className="w-4 h-4 text-background"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="7" y="5" width="3" height="14" rx="1.5" />
                <rect x="14" y="5" width="3" height="14" rx="1.5" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-background ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="flex-1 flex flex-col gap-1.5">
            <div className="text-xs text-text font-medium">
              Have a listen here
            </div>
            <div
              className="relative h-8 cursor-pointer flex items-center gap-0.5"
              onClick={handleSeek}
            >
              {waveformHeights.map((height, i) => {
                const isPast = (i / 40) * 100 < progress;
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-200 ${
                      isPast ? "bg-primary" : "bg-primary/30"
                    }`}
                    style={{ height: `${height * 0.6}%` }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex-shrink-0 text-xs text-text-muted font-mono tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        src="/recording.mp3"
      />
    </div>
  );
}
