'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-hidden no-print fixed bottom-6 right-6 z-50 bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-widest border border-rule hover:bg-soft-ink cursor-pointer"
      aria-label="Imprimir ou guardar como PDF"
    >
      IMPRIMIR / GUARDAR EM PDF ↓
    </button>
  );
}
