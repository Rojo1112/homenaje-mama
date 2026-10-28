import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Soft choral/acoustic harmonic chord progression
  const playHarmonicChord = (ctx: AudioContext, freqs: number[]) => {
    const now = ctx.currentTime;
    freqs.forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Warm attack & gentle natural decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.025, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 6.0);
    });
  };

  const startChoralMelody = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
        [220.00, 261.63, 329.63, 440.00], // Am7 (A3, C4, E4, A4)
        [174.61, 220.00, 261.63, 349.23], // Fmaj7 (F3, A3, C4, F4)
        [196.00, 246.94, 293.66, 392.00], // G (G3, B3, D4, G4)
      ];

      let step = 0;
      playHarmonicChord(audioCtxRef.current, chords[step]);

      timerRef.current = window.setInterval(() => {
        if (!audioCtxRef.current) return;
        step = (step + 1) % chords.length;
        playHarmonicChord(audioCtxRef.current, chords[step]);
      }, 4500);

      setIsPlaying(true);
      setAudioError(false);
    } catch (e) {
      console.warn('Audio autoplay blocked or unsupported:', e);
      setAudioError(true);
    }
  };

  const stopChoralMelody = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopChoralMelody();
    } else {
      startChoralMelody();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pausar música ambiental' : 'Reproducir melodía suave de fondo'}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border ${
          isPlaying
            ? 'bg-terracota text-white border-terracota-dark shadow-terracota/30 scale-105'
            : 'bg-crema-50/90 text-tierra-800 border-crema-300 hover:border-terracota hover:text-terracota shadow-tierra-900/10'
        }`}
      >
        <span className={`relative flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Disc className={`w-5 h-5 ${isPlaying ? 'text-amber-200' : 'text-terracota'}`} />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
            </span>
          )}
        </span>

        <span className="text-xs font-semibold tracking-wide uppercase">
          {isPlaying ? 'Música activa' : 'Melodía suave'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 ml-1 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 ml-1 opacity-60" />
        )}
      </button>

      {audioError && (
        <span className="text-xs text-terracota-deep bg-white px-2 py-1 rounded shadow">
          Haz clic para activar audio
        </span>
      )}
    </div>
  );
};
