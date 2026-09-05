'use client';

import { useState } from 'react';
import CvDownloadModal from '@/components/CvDownloadModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        className="w-full flex justify-between items-center py-5 px-[var(--page-gutter)] border-b border-rule bg-paper"
        role="banner"
      >
        {/* Esquerda: Wordmark */}
        <a
          href="#"
          className="font-mono text-xs font-medium tracking-widest text-ink uppercase no-underline hover:no-underline"
          aria-label="Tiago Araújo — Voltar ao início"
        >
          ~/tiago.dev
        </a>

        {/* Direita: Nota + Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <span className="hidden lg:inline text-soft font-mono text-[0.66rem] uppercase tracking-wider text-right">
            Engenheiro Full-Stack JS/TS &amp; CSM®
          </span>

          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-4 md:gap-6 font-mono text-[0.66rem] uppercase tracking-wider"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-ink underline underline-offset-4 hover:text-soft bg-transparent border-none cursor-pointer font-mono text-[0.66rem] uppercase tracking-wider p-0"
              aria-label="Abrir modal para descarregar o Curriculum Vitae"
            >
              CV ↓
            </button>
            <a
              href="https://github.com/tiagodearaujo13-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label="Ver perfil no GitHub (abre em novo separador)"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-araújofrancisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label="Ver perfil no LinkedIn (abre em novo separador)"
            >
              LINKEDIN ↗
            </a>
            <a
              href="#contato"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label="Ir para a secção de contato"
            >
              CONTATO ↗
            </a>
          </nav>
        </div>
      </header>

      <CvDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
