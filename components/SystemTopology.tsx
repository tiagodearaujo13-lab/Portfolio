'use client';

import { useState, type KeyboardEvent } from 'react';

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
    name: 'CLIENT / EDGE',
    type: 'Vercel Edge / CDN',
    details: ['Next.js 14 Client', 'SSL / TLS 1.3', 'RTT < 15ms'],
    metrics: 'Taxa de Transferência: 450 req/s • Tempo de Resposta: 14ms',
    x: 42,
    y: 152,
    width: 230,
    height: 112,
  },
  {
    id: 'api',
    name: 'CORE API GATEWAY',
    type: 'Node.js / Express Serverless',
    details: ['AuthGuard + RateLimit', 'Status: 200 OK', 'Throughput: 1.2k req/s'],
    metrics: 'Taxa de Transferência: 1.2k req/s • Tempo de Resposta: 8ms',
    x: 364,
    y: 142,
    width: 286,
    height: 132,
  },
  {
    id: 'redis',
    name: 'CACHE & FILAS',
    type: 'Redis / BullMQ',
    details: ['Hit Rate: 94.2%', 'TTL 3600s', 'Sessões e jobs assíncronos'],
    metrics: 'Taxa de Transferência: 3.8k ops/s • Hit Rate: 94.2% • TTL: 3600s',
    x: 738,
    y: 32,
    width: 270,
    height: 112,
  },
  {
    id: 'external',
    name: 'SERVIÇOS EXTERNOS',
    type: 'Integrações transacionais',
    details: ['Stripe Webhook', 'DNS MX Resolver'],
    metrics: 'Taxa de Transferência: 120 events/min • Webhooks verificados',
    x: 738,
    y: 160,
    width: 270,
    height: 90,
  },
  {
    id: 'db',
    name: 'PERSISTÊNCIA RELACIONAL',
    type: 'PostgreSQL Database',
    details: ['Connection Pooler', 'ACID Compliant', 'Backup contínuo'],
    metrics: 'Taxa de Transferência: 680 queries/s • Pool: 20 conexões • ACID',
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
}: {
  node: NodeData;
  active: boolean;
  onActivate: (node: NodeData) => void;
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
        {`NÓ 0${NODES.findIndex((item) => item.id === node.id) + 1}`}
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
          0002 / TOPOLOGIA DE SISTEMAS DINÂMICA
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-[#7d94a5]" aria-label="Serviços ativos">
          CLIENT <span className="text-[#00A3FF]">•</span> API GATEWAY <span className="text-[#00A3FF]">•</span> REDIS CACHE <span className="text-[#00A3FF]">•</span> POSTGRESQL
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
            <title id="system-topology-description">Diagrama de fluxo entre cliente Edge, API Gateway, Redis, PostgreSQL e integrações externas.</title>
            <desc>Selecione ou passe o cursor sobre um nó para consultar a telemetria no rodapé.</desc>

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
              />
            ))}
          </svg>
        </div>
      </div>

      <footer className="mt-4 flex flex-col gap-2 border-t border-[#1e293b] pt-3 font-mono text-[8px] uppercase tracking-wider text-[#91a4b1] sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite">
          <span className="text-[#00A3FF]">[ESTADO OPERACIONAL: TELEMETRIA ATIVA / LATÊNCIA 12ms]</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          <span className="text-white">{activeNode.name}: </span>
          {activeNode.metrics}
        </p>
        <p className="text-left sm:text-right">MOTOR: SVG VETORIAL NATIVO • ZERO GPU OVERHEAD • 60 FPS</p>
      </footer>
    </section>
  );
}

export default SystemTopology;
