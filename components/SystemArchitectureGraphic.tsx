'use client';

import React from 'react';

export default function SystemArchitectureGraphic() {
  return (
    <div
      className="w-full border border-[var(--rule)] bg-[var(--paper)] p-5 md:p-6 mt-6 select-none"
      role="img"
      aria-label="Diagrama esquemático de arquitetura e fluxo de microssistemas em tempo real"
    >
      {/* Top Header Editorial */}
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--rule)] pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[var(--ink)] animate-pulse motion-reduce:animate-none" />
          <span className="font-mono text-[9px] tracking-widest text-[var(--ink)] font-bold uppercase">
            0002 / TOPOLOGIA DE SISTEMAS &amp; FLUXO DE DADOS
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[8px] text-[var(--soft-ink)]">
          <span>LATÊNCIA: 14MS</span>
          <span>ESTADO: SÍNCRONO</span>
          <span>INTEGRIDADE: ACID</span>
        </div>
      </div>

      {/* SVG Container Esquematico */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 185"
          className="w-full min-w-[620px] h-auto text-[var(--ink)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid sutil de fundo */}
          <g opacity="0.06">
            <line x1="0" y1="45" x2="760" y2="45" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="0" y1="90" x2="760" y2="90" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="0" y1="135" x2="760" y2="135" stroke="currentColor" strokeDasharray="2 4" />
          </g>

          {/* Trilhos Estáticos de Fundo */}
          <line x1="115" y1="90" x2="250" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="375" y1="90" x2="435" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="560" y1="70" x2="620" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="560" y1="110" x2="620" y2="135" stroke="currentColor" strokeWidth="1" opacity="0.2" />

          {/* Fluxo Dinâmico Animado (Data Flow) */}
          <line
            x1="115"
            y1="90"
            x2="250"
            y2="90"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="animate-[dash_1.8s_linear_infinite] motion-reduce:animate-none"
          />
          <line
            x1="375"
            y1="90"
            x2="435"
            y2="90"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="animate-[dash_1.8s_linear_infinite] motion-reduce:animate-none"
          />
          <line
            x1="560"
            y1="70"
            x2="620"
            y2="45"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="animate-[dash_2.2s_linear_infinite] motion-reduce:animate-none"
          />
          <line
            x1="560"
            y1="110"
            x2="620"
            y2="135"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="animate-[dash_2.2s_linear_infinite] motion-reduce:animate-none"
          />

          {/* NÓ 1: CLIENT */}
          <g transform="translate(10, 50)">
            <rect x="0" y="0" width="105" height="80" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
            <text x="16" y="24" className="font-mono text-[9px] font-bold" fill="currentColor">CLIENT</text>
            <text x="16" y="42" className="font-mono text-[7px]" fill="var(--soft-ink)">NEXT.JS 14</text>
            <text x="16" y="56" className="font-mono text-[7px]" fill="var(--soft-ink)">EDGE CDN</text>
            <text x="16" y="70" className="font-mono text-[7px]" fill="var(--soft-ink)">REACT UI</text>
            {/* Saída Direita */}
            <circle cx="105" cy="40" r="3.5" fill="currentColor" />
          </g>

          {/* NÓ 2: API GATEWAY */}
          <g transform="translate(250, 50)">
            <rect x="0" y="0" width="125" height="80" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
            <text x="16" y="24" className="font-mono text-[9px] font-bold" fill="currentColor">API GATEWAY</text>
            <text x="16" y="42" className="font-mono text-[7px]" fill="var(--soft-ink)">RATE LIMITING</text>
            <text x="16" y="56" className="font-mono text-[7px]" fill="var(--soft-ink)">JWT / OAUTH 2.0</text>
            <text x="16" y="70" className="font-mono text-[7px]" fill="var(--soft-ink)">CORS / PROXY</text>
            {/* Entrada Esquerda & Saída Direita */}
            <circle cx="0" cy="40" r="3.5" fill="currentColor" />
            <circle cx="125" cy="40" r="3.5" fill="currentColor" />
          </g>

          {/* NÓ 3: CORE SERVICES */}
          <g transform="translate(435, 50)">
            <rect x="0" y="0" width="125" height="80" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
            <text x="16" y="24" className="font-mono text-[9px] font-bold" fill="currentColor">CORE SERVICES</text>
            <text x="16" y="42" className="font-mono text-[7px]" fill="var(--soft-ink)">NODE.JS / EXPRESS</text>
            <text x="16" y="56" className="font-mono text-[7px]" fill="var(--soft-ink)">STRIPE WEBHOOKS</text>
            <text x="16" y="70" className="font-mono text-[7px]" fill="var(--soft-ink)">PDF COMPILER</text>
            {/* Entrada Esquerda & Saídas Direitas */}
            <circle cx="0" cy="40" r="3.5" fill="currentColor" />
            <circle cx="125" cy="20" r="3.5" fill="currentColor" />
            <circle cx="125" cy="60" r="3.5" fill="currentColor" />
          </g>

          {/* NÓ 4A: POSTGRESQL */}
          <g transform="translate(620, 15)">
            <rect x="0" y="0" width="130" height="62" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
            <text x="16" y="22" className="font-mono text-[9px] font-bold" fill="currentColor">POSTGRESQL</text>
            <text x="16" y="38" className="font-mono text-[7px]" fill="var(--soft-ink)">NEON SERVERLESS</text>
            <text x="16" y="52" className="font-mono text-[7px]" fill="var(--soft-ink)">ACID / RELATIONAL</text>
            {/* Entrada Esquerda */}
            <circle cx="0" cy="30" r="3.5" fill="currentColor" />
          </g>

          {/* NÓ 4B: ASYNC QUEUE */}
          <g transform="translate(620, 105)">
            <rect x="0" y="0" width="130" height="62" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
            <text x="16" y="22" className="font-mono text-[9px] font-bold" fill="currentColor">ASYNC QUEUE</text>
            <text x="16" y="38" className="font-mono text-[7px]" fill="var(--soft-ink)">EVENT BUS / JOBS</text>
            <text x="16" y="52" className="font-mono text-[7px]" fill="var(--soft-ink)">RESEND / MAILERS</text>
            {/* Entrada Esquerda */}
            <circle cx="0" cy="30" r="3.5" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Rodapé do Esquemático */}
      <div className="flex flex-wrap items-center justify-between border-t border-[var(--rule)] pt-3 mt-4 text-[8px] font-mono text-[var(--soft-ink)]">
        <span>PADRÃO: MONÓLITO MODULAR COM DECOUPLED BACKEND</span>
        <span>TESTES: SUÍTE AUTOMATIZADA (VITEST)</span>
      </div>
    </div>
  );
}
