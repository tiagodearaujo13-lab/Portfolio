'use client';

import { socialLinks } from '@/data/content';

export default function Navbar() {
  return (
    <header
      className="w-full flex justify-between items-center py-5 px-[var(--page-gutter)] border-b border-rule bg-paper"
      role="banner"
    >
      {/* Esquerda: Wordmark */}
      <a
        href="#"
        className="font-mono text-xs font-medium tracking-widest text-ink uppercase no-underline hover:no-underline"
        aria-label="Tiago Francisco — Início"
      >
        ~/tiago.dev
      </a>

      {/* Direita: Nota + Links */}
      <div className="flex items-center gap-6 md:gap-8">
        <span className="hidden lg:inline text-soft font-mono text-[0.66rem] uppercase tracking-wider text-right">
          Desenvolvedor Full-Stack JS/TS &amp; Scrum Master
        </span>

        <nav aria-label="Links rápidos" className="flex items-center gap-4 md:gap-6 font-mono text-[0.66rem] uppercase tracking-wider">
          <a
            href="https://github.com/tiagodearaujo13-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 hover:text-soft"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tiago-araújofrancisco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 hover:text-soft"
          >
            LINKEDIN ↗
          </a>
          <a
            href="#contato"
            className="text-ink underline underline-offset-4 hover:text-soft"
          >
            CONTATO ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
