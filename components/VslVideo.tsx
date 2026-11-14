'use client';

import { useRef, useState } from 'react';
import { trackInternal } from '@/lib/tracking/trackEvent';

const PROGRESS_STEPS = [25, 50, 75, 100];

/**
 * VSL : bouton play custom + tracking vsl_play / vsl_progress.
 */
export default function VslVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fired = useRef(new Set<number>());
  const [started, setStarted] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    trackInternal('vsl_play');
    video.play();
  }

  function onTimeUpdate() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    for (const step of PROGRESS_STEPS) {
      if (pct >= step && !fired.current.has(step)) {
        fired.current.add(step);
        trackInternal('vsl_progress', { progress: step });
      }
    }
  }

  return (
    <div className="feature-video-art">
      <video
        ref={videoRef}
        className="feature-video-player"
        controls
        preload="metadata"
        playsInline
        onTimeUpdate={onTimeUpdate}
      >
        <source src={src} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
      {!started && (
        <button
          className="video-play-button"
          type="button"
          aria-label="Play video"
          onClick={play}
        >
          ▶
        </button>
      )}
    </div>
  );
}
