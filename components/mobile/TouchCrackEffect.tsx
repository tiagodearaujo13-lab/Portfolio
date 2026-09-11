'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface CrackPoint {
  id: number;
  x: number;
  y: number;
  paths: string[];
}

let crackId = 0;
let audioContext: AudioContext | null = null;

function createCrackPaths(): string[] {
  const paths: string[] = [];
  const branchCount = 8;

  for (let branch = 0; branch < branchCount; branch += 1) {
    const angle = (Math.PI * 2 * branch) / branchCount + (Math.random() - 0.5) * 0.22;
    const length = 55 + Math.random() * 75;
    const start = 8;
    const middle = length * (0.45 + Math.random() * 0.15);
    const bend = (Math.random() - 0.5) * 20;
    const x1 = Math.cos(angle) * start;
    const y1 = Math.sin(angle) * start;
    const x2 = Math.cos(angle) * middle - Math.sin(angle) * bend;
    const y2 = Math.sin(angle) * middle + Math.cos(angle) * bend;
    const x3 = Math.cos(angle) * length;
    const y3 = Math.sin(angle) * length;

    paths.push(`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}`);

    if (Math.random() > 0.25) {
      const split = middle + Math.random() * (length - middle) * 0.35;
      const splitAngle = angle + (Math.random() > 0.5 ? 1 : -1) * (0.35 + Math.random() * 0.5);
      paths.push(
        `M ${Math.cos(angle) * split} ${Math.sin(angle) * split} L ${Math.cos(splitAngle) * (split + 25)} ${Math.sin(splitAngle) * (split + 25)}`
      );
    }
  }

  return paths;
}

function playGlassImpact(): void {
  if (typeof window === 'undefined') return;

  try {
    const AudioContextConstructor =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextConstructor) return;
    audioContext ??= new AudioContextConstructor();
    const context = audioContext;
    const now = context.currentTime;

    void context.resume();

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 0.08, context.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let index = 0; index < channel.length; index += 1) {
      channel[index] = (Math.random() * 2 - 1) * (1 - index / channel.length);
    }

    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2600, now);
    filter.Q.setValueAtTime(7, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.38, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);
    noise.connect(filter).connect(gain).connect(context.destination);
    noise.start(now);
    noise.stop(now + 0.08);

    // Pequenos harmónicos agudos dão ao ruído um carácter de estilhaço sem asset externo.
    for (let index = 0; index < 4; index += 1) {
      const oscillator = context.createOscillator();
      const oscillatorGain = context.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(2400 + Math.random() * 3600, now);
      oscillatorGain.gain.setValueAtTime(0.0001, now);
      oscillatorGain.gain.exponentialRampToValueAtTime(0.035, now + 0.003);
      oscillatorGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06 + index * 0.012);
      oscillator.connect(oscillatorGain).connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.08 + index * 0.012);
    }
  } catch {
    // O efeito visual continua disponível quando o browser bloqueia áudio ou não o suporta.
  }
}

export default function TouchCrackEffect() {
  const [cracks, setCracks] = useState<CrackPoint[]>([]);
  const touchEnabled = useRef(false);

  const handlePointerDown = useCallback((event: PointerEvent) => {
    if (!touchEnabled.current || event.pointerType !== 'touch') return;

    const target = event.target;
    if (
      target instanceof Element &&
      target.closest('a, button, nav, [role="button"], input, textarea, select')
    ) {
      return;
    }

    const crack: CrackPoint = {
      id: crackId++,
      x: event.clientX,
      y: event.clientY,
      paths: createCrackPaths(),
    };

    setCracks((current) => [...current.slice(-2), crack]);
    playGlassImpact();
    window.setTimeout(() => {
      setCracks((current) => current.filter((item) => item.id !== crack.id));
    }, 1200);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const updateTouchCapability = () => {
      touchEnabled.current = mediaQuery.matches;
    };

    updateTouchCapability();
    mediaQuery.addEventListener?.('change', updateTouchCapability);
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      mediaQuery.removeEventListener?.('change', updateTouchCapability);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [handlePointerDown]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {cracks.map((crack) => (
        <svg
          key={crack.id}
          className="touch-crack absolute h-0 w-0 overflow-visible text-white"
          style={{ left: crack.x, top: crack.y }}
          viewBox="-145 -145 290 290"
          focusable="false"
        >
          <circle r="7" fill="rgba(255,255,255,0.18)" stroke="currentColor" strokeWidth="1" />
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2">
            {crack.paths.map((path, index) => (
              <path key={`${crack.id}-${index}`} d={path} />
            ))}
          </g>
        </svg>
      ))}
    </div>
  );
}
