'use client';

import { useState, type KeyboardEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';

interface NodeData {
  id: string;
  name: string;
  type: string;
  details: string[];
  metrics: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const CYAN = '#00A3FF';
const NODE_BASE = '#2E3236';
const NODE_FILL = '#07131e';

const NODES: NodeData[] = [
  {
    id: 'client',
    name: 'CLIENTE / EDGE',
    type: 'Vercel / Next.js 15',
    details: ['App Shell Mobile + PWA', 'BFF · cookie radar_session', 'Offline: IndexedDB + AES-256'],
    metrics: 'BFF: 1 hop série • Orçamento OCR: 15 guias grátis • Deploy: Cloud Run',
    x: 42,
    y: 152,
    width: 230,
    height: 112,
  },
  {
    id: 'api',
    name: 'CORE API — CLOUD RUN',
    type: 'Node.js HTTP Nativo',
    details: ['AuthGuard + Load Shedder', 'Gates Fail-Closed por plano', 'Motor Rust: SAF-T streaming'],
    metrics: 'Event Loop Lag < 10ms • Heap < 70% • 200 OK sob carga',
    x: 364,
    y: 142,
    width: 286,
    height: 132,
  },
  {
    id: 'gemini',
    name: 'OCR COM IA GEMINI',
    type: 'Gemini 2.5 Flash Lite',
    details: ['Extração de guias/faturas', 'Rasura manual · subfaturação', 'QR ATCUD · NIF Módulo 11'],
    metrics: 'Extração: território fiscal PT • Tolerância: ±0.02 €',
    x: 738,
    y: 32,
    width: 270,
    height: 112,
  },
  {
    id: 'external',
    name: 'PAGAMENTOS & ALERTAS',
    type: 'Stripe + Resend',
    details: ['Faturação por plano/loja', 'Disputa ao fornecedor'],
    metrics: 'Webhooks idempotentes • E-mail verificado do fornecedor',
    x: 738,
    y: 160,
    width: 270,
    height: 90,
  },
  {
    id: 'db',
    name: 'PERSISTÊNCIA RELACIONAL',
    type: 'PostgreSQL (Cloud Run)',
    details: ['Trilha de auditoria cifrada', 'CMP & movimentos de stock', 'Trigger-locked · ACID'],
    metrics: 'Audit: AES-256-GCM • Pool: 20 conexões • Backup contínuo',
    x: 738,
    y: 276,
    width: 270,
    height: 112,
  },
];

const BUS_LINES = [
  'M 272 208 H 364',
  'M 650 190 H 690 V 88 H 738',
  'M 650 208 H 738',
  'M 650 226 H 690 V 332 H 738',
];

function CornerMarks({
  x,
  y,
  width,
  height,
  active,
}: Pick<NodeData, 'x' | 'y' | 'width' | 'height'> & { active: boolean }) {
  const length = 13;
  const stroke = active ? CYAN : '#557080';
  const opacity = active ? 1 : 0.75;

  return (
    <g stroke={stroke} strokeWidth="2" opacity={opacity} fill="none">
      <path d={`M ${x} ${y + length} V ${y} H ${x + length}`} />
      <path d={`M ${x + width - length} ${y} H ${x + width} V ${y + length}`} />
      <path d={`M ${x} ${y + height - length} V ${y + height} H ${x + length}`} />
      <path d={`M ${x + width - length} ${y + height} H ${x + width} V ${y + height - length}`} />
    </g>
  );
}

function TopologyNode({
  node,
  active,
  onActivate,
  nodeLabel,
}: {
  node: NodeData;
  active: boolean;
  onActivate: (node: NodeData) => void;
  nodeLabel: string;
}) {
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate(node);
    }
  };

  return (
    <g
      className={`topology-node${active ? ' is-active' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${node.name}: ${node.type}. ${node.metrics}`}
      aria-pressed={active}
      onMouseEnter={() => onActivate(node)}
      onFocus={() => onActivate(node)}
      onKeyDown={handleKeyDown}
    >
      <rect
        x={node.x}
        y={node.y}
        width={node.width}
        height={node.height}
        fill={NODE_FILL}
        stroke={active ? CYAN : NODE_BASE}
        strokeWidth={active ? 1.8 : 1.2}
      />
      <rect
        x={node.x + 7}
        y={node.y + 7}
        width={node.width - 14}
        height={node.height - 14}
        fill="none"
        stroke="#183044"
        strokeWidth="0.6"
        strokeDasharray="2 5"
      />
      <CornerMarks {...node} active={active} />

      <text x={node.x + 17} y={node.y + 21} fill={CYAN} fontFamily="var(--mono)" fontSize="9" letterSpacing="1.4">
        {`${nodeLabel} 0${NODES.findIndex((item) => item.id === node.id) + 1}`}
      </text>
      <text x={node.x + 17} y={node.y + 43} fill="#f4faff" fontFamily="var(--mono)" fontSize="13" fontWeight="700" letterSpacing="0.8">
        {node.name}
      </text>
      <text x={node.x + 17} y={node.y + 61} fill="#8ca4b5" fontFamily="var(--mono)" fontSize="9.5">
        {node.type}
      </text>
      {node.details.map((detail, index) => (
        <text
          key={detail}
          x={node.x + 17}
          y={node.y + 81 + index * 14}
          fill={index === 0 && node.id === 'api' ? CYAN : '#b4c4cf'}
          fontFamily="var(--mono)"
          fontSize="9"
        >
          {`› ${detail}`}
        </text>
      ))}
    </g>
  );
}

export function SystemTopology() {
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];
  const defaultNode = NODES.find((node) => node.id === 'api') ?? NODES[0];
  const [activeNode, setActiveNode] = useState<NodeData>(defaultNode);

  return (
    <section
      className="topology-panel mt-6 w-full border border-[#1e293b] bg-[#050b12] p-4 text-white sm:p-5 md:p-6"
      aria-labelledby="system-topology-title"
    >
      <header className="mb-4 flex flex-col gap-3 border-b border-[#1e293b] pb-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 id="system-topology-title" className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#00A3FF]">
          <span aria-hidden="true">■</span>
          {copy.topology.title}
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-[#7d94a5]" aria-label={lang === 'pt' ? 'Serviços ativos' : 'Active services'}>
          {copy.topology.services}
        </p>
      </header>

      <div className="relative overflow-hidden border border-[#152838] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#00A3FF]" />
        <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[#00A3FF]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-[#00A3FF]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[#00A3FF]" />

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 1050 420"
            className="block h-auto min-w-[760px] w-full"
            role="group"
            aria-labelledby="system-topology-title system-topology-description"
            onMouseLeave={() => setActiveNode(defaultNode)}
          >
            <title id="system-topology-description">{copy.topology.description}</title>
            <desc>{lang === 'pt' ? 'Selecione ou passe o cursor sobre um nó para consultar a telemetria no rodapé.' : 'Select or hover over a node to inspect telemetry in the footer.'}</desc>

            <g opacity="0.28" fill="none" stroke="#284357" strokeWidth="0.7" strokeDasharray="2 7">
              <path d="M 30 18 H 1020" />
              <path d="M 30 402 H 1020" />
              <path d="M 30 18 V 402" />
              <path d="M 1020 18 V 402" />
            </g>

            <circle className="topology-radar" cx="507" cy="208" r="91" fill="none" stroke={CYAN} strokeWidth="1" />
            <circle className="topology-radar topology-radar-delayed" cx="507" cy="208" r="72" fill="none" stroke={CYAN} strokeWidth="0.7" />

            {BUS_LINES.map((path) => (
              <g key={path} fill="none">
                <path d={path} stroke={NODE_BASE} strokeWidth="1.5" />
                <path d={path} className="topology-flow" stroke={CYAN} strokeWidth="2" strokeDasharray="6 12" />
              </g>
            ))}

            <g className="topology-bus-marker" fill={CYAN}>
              <circle cx="323" cy="208" r="3" />
              <circle cx="690" cy="88" r="3" />
              <circle cx="690" cy="208" r="3" />
              <circle cx="690" cy="332" r="3" />
            </g>

            {NODES.map((node) => (
              <TopologyNode
                key={node.id}
                node={node}
                active={activeNode.id === node.id}
                onActivate={setActiveNode}
                nodeLabel={copy.topology.node}
              />
            ))}
          </svg>
        </div>
      </div>

      <footer className="mt-4 flex flex-col gap-2 border-t border-[#1e293b] pt-3 font-mono text-[8px] uppercase tracking-wider text-[#91a4b1] sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite">
          <span className="text-[#00A3FF]">{copy.topology.operational}</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          <span className="text-white">{activeNode.name}: </span>
          {activeNode.metrics}
        </p>
        <p className="text-left sm:text-right">{copy.topology.engine}</p>
      </footer>
    </section>
  );
}

export default SystemTopology;
