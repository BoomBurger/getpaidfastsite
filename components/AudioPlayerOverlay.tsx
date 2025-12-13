'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayerOverlay() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="absolute left-6 right-6 rounded-xl px-5 py-3.5 flex items-center gap-4 cursor-pointer hover:brightness-110 transition-all bg-[var(--bg-extralight)] border-2 border-primary shadow-2xl"
      style={{
        bottom: '35%',
        transform: 'scale(1.2)',
        zIndex: 30
      }}
      onClick={togglePlay}
    >
      <audio ref={audioRef} src="/recording.mp3" preload="metadata" />
      <button className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center flex-shrink-0">
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="7" y="6" width="3" height="12" fill="var(--primary)" rx="1"/>
            <rect x="14" y="6" width="3" height="12" fill="var(--primary)" rx="1"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8 6V18L17 12L8 6Z" fill="var(--primary)"/>
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium truncate">Don't believe us? Have a listen.</span>
          <span className="text-xs text-text-muted ml-2 flex-shrink-0">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        <div className="flex items-center gap-[2px] h-5">
          {[25, 45, 60, 40, 75, 50, 70, 55, 85, 65, 55, 35, 50, 65, 45, 30].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
