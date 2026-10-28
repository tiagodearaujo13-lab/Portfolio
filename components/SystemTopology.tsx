'use client';

import { useState, type KeyboardEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NodeData {
  id: string;
  title: string;
  subtitle: string;
  details: string[];
  description: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const positions = [
  { id: 'client', x: 30, y: 160, width: 235, height: 130 },
  { id: 'api', x: 340, y: 150, width: 265, height: 150 },
  { id: 'ocr', x: 690, y: 30, width: 280, height: 110 },
  { id: 'data', x: 690, y: 170, width: 280, height: 110 },
  { id: 'integrations', x: 690, y: 310, width: 280, height: 110 },
];

const translations = {
  pt: {
    title: 'Arquitetura do GastroSpec Radar',
    eyebrow: '02 / ARQUITETURA DE PRODUTO',
    caption: 'DA CAPTURA À AUDITORIA',
    description: 'Diagrama conceptual: cliente Next.js comunica com a API Node.js, que integra o Gemini, o PostgreSQL e serviços externos.',
    hint: 'Selecione um módulo para explorar a sua função.',
    scroll: 'Deslize horizontalmente para ver o diagrama completo.',
    nodeLabel: 'Módulo',
    nodes: [
      { title: 'CLIENTE & SCANNER', subtitle: 'Next.js · Vercel', details: ['Câmara e QR fiscal', 'IndexedDB · AES-GCM'], description: 'O scanner captura guias e faturas, lê o QR fiscal e permite guardar fotografias cifradas offline para sincronização posterior.' },
      { title: 'API & REGRAS', subtitle: 'Node.js · Cloud Run', details: ['Autenticação e controlo de acesso', 'Auditoria · stock · Rust / SAF-T'], description: 'A API aplica as regras de acesso e de negócio, processa a auditoria e o stock e integra o motor Rust para ficheiros SAF-T.' },
      { title: 'EXTRAÇÃO COM IA', subtitle: 'Gemini 2.5 Flash Lite', details: ['OCR de guias e faturas', 'Deteção de alterações manuais'], description: 'O Gemini extrai dados dos documentos e identifica possíveis alterações manuscritas para revisão pelo utilizador.' },
      { title: 'DADOS & AUDITORIA', subtitle: 'PostgreSQL', details: ['Stock · CMP · acordos', 'Trilho de auditoria'], description: 'O PostgreSQL guarda dados operacionais, movimentos de stock, acordos com fornecedores e registos de auditoria.' },
      { title: 'INTEGRAÇÕES', subtitle: 'Stripe · Resend', details: ['Subscrições e pagamentos', 'Disputas por e-mail'], description: 'O Stripe suporta a faturação por subscrição; o Resend permite enviar disputas para o e-mail registado do fornecedor.' },
    ],
  },
  en: {
    title: 'GastroSpec Radar architecture',
    eyebrow: '02 / PRODUCT ARCHITECTURE',
    caption: 'FROM CAPTURE TO AUDIT',
    description: 'Conceptual diagram: a Next.js client communicates with the Node.js API, which integrates Gemini, PostgreSQL and external services.',
    hint: 'Select a module to explore its role.',
    scroll: 'Scroll horizontally to view the complete diagram.',
    nodeLabel: 'Module',
    nodes: [
      { title: 'CLIENT & SCANNER', subtitle: 'Next.js · Vercel', details: ['Camera and fiscal QR', 'IndexedDB · AES-GCM'], description: 'The scanner captures delivery notes and invoices, reads fiscal QR codes and stores encrypted photographs offline for later synchronisation.' },
      { title: 'API & BUSINESS RULES', subtitle: 'Node.js · Cloud Run', details: ['Authentication and access control', 'Audit · stock · Rust / SAF-T'], description: 'The API enforces access and business rules, processes audits and inventory and integrates the Rust engine for SAF-T files.' },
      { title: 'AI EXTRACTION', subtitle: 'Gemini 2.5 Flash Lite', details: ['Delivery note and invoice OCR', 'Handwritten alteration detection'], description: 'Gemini extracts document data and identifies possible handwritten alterations for the user to review.' },
      { title: 'DATA & AUDIT', subtitle: 'PostgreSQL', details: ['Stock · average cost · agreements', 'Audit trail'], description: 'PostgreSQL stores operational data, inventory movements, supplier agreements and audit records.' },
      { title: 'INTEGRATIONS', subtitle: 'Stripe · Resend', details: ['Subscriptions and payments', 'Supplier disputes by email'], description: 'Stripe supports subscription billing; Resend sends disputes to the supplier’s registered email address.' },
    ],
  },
};

const connections = [
  'M265 225 H340',
  'M605 195 H645 V85 H690',
  'M605 225 H690',
  'M605 255 H645 V365 H690',
];

function TopologyNode({ node, index, active, onActivate, nodeLabel }: {
  node: NodeData;
  index: number;
  active: boolean;
  onActivate: (id: string) => void;
  nodeLabel: string;
}) {
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate(node.id);
    }
  };

  return (
    <g
      className={`topology-node${active ? ' is-active' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${nodeLabel} ${index + 1}: ${node.title}. ${node.description}`}
      aria-pressed={active}
      onClick={() => onActivate(node.id)}
      onFocus={() => onActivate(node.id)}
      onMouseEnter={() => onActivate(node.id)}
      onKeyDown={handleKeyDown}
    >
      <rect x={node.x} y={node.y} width={node.width} height={node.height} rx="4" fill={active ? '#f0fdf4' : '#ffffff'} stroke={active ? '#047857' : '#d4d4d0'} strokeWidth={active ? 2 : 1} />
      <text x={node.x + 18} y={node.y + 24} fill="#047857" fontFamily="var(--mono)" fontSize="10" fontWeight="700" letterSpacing="1">{`${String(index + 1).padStart(2, '0')} / ${nodeLabel.toUpperCase()}`}</text>
      <text x={node.x + 18} y={node.y + 48} fill="#18181b" fontFamily="var(--mono)" fontSize="13" fontWeight="700">{node.title}</text>
      <text x={node.x + 18} y={node.y + 68} fill="#52525b" fontFamily="var(--mono)" fontSize="11">{node.subtitle}</text>
      {node.details.map((detail, detailIndex) => (
        <text key={detail} x={node.x + 18} y={node.y + 88 + detailIndex * 15} fill="#52525b" fontFamily="var(--mono)" fontSize="10">{detail}</text>
      ))}
    </g>
  );
}

export function SystemTopology() {
  const { lang } = useLanguage();
  const content = translations[lang];
  const nodes: NodeData[] = positions.map((position, index) => ({ ...position, ...content.nodes[index] }));
  const [activeId, setActiveId] = useState('api');
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[1];

  return (
    <section className="topology-panel mt-6 w-full border border-[#d4d4d0] bg-[#f8f8f6] p-4 text-[#18181b] sm:p-6" aria-labelledby="system-topology-title">
      <header className="flex flex-wrap items-end justify-between gap-3 border-b border-[#d4d4d0] pb-4">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-[#047857]">{content.eyebrow}</p>
          <h3 id="system-topology-title" className="mt-2 font-serif text-xl sm:text-2xl">{content.title}</h3>
        </div>
        <p className="font-mono text-[10px] tracking-wider text-[#52525b]">{content.caption}</p>
      </header>

      <p className="mt-4 font-mono text-xs leading-relaxed text-[#52525b]">{content.hint}</p>
      <p className="mt-2 font-mono text-xs text-[#52525b] md:hidden">{content.scroll}</p>
      <div className="mt-3 overflow-x-auto" role="region" aria-label={content.title} tabIndex={0}>
        <svg viewBox="0 0 1000 450" className="block h-auto min-w-[760px] w-full" role="group" aria-labelledby="system-topology-title system-topology-description">
          <desc id="system-topology-description">{content.description}</desc>
          <defs>
            <marker id="topology-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0 0 L8 4 L0 8 Z" fill="#047857" />
            </marker>
          </defs>
          {connections.map((path) => <path key={path} d={path} fill="none" stroke="#047857" strokeWidth="1.5" markerEnd="url(#topology-arrow)" />)}
          {nodes.map((node, index) => <TopologyNode key={node.id} node={node} index={index} active={activeNode.id === node.id} onActivate={setActiveId} nodeLabel={content.nodeLabel} />)}
        </svg>
      </div>
      <div className="mt-4 min-h-[5rem] border-t border-[#d4d4d0] pt-4" aria-live="polite" aria-atomic="true">
        <p className="font-mono text-[10px] font-bold tracking-wider text-[#047857]">{activeNode.title} / {activeNode.subtitle}</p>
        <p className="mt-2 max-w-3xl font-serif text-sm leading-relaxed text-[#3f3f46]">{activeNode.description}</p>
      </div>
    </section>
  );
}

export default SystemTopology;
