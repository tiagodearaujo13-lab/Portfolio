import { ArrowUp, Heart, Circle } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-zinc-800/60 bg-[#0D0D0E]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Status */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-mono text-xs text-zinc-500">
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 font-mono text-[11px] text-zinc-600">
              <span className="flex items-center gap-1.5 text-emerald-400/90">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sistemas operacionais
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                Construído com Next.js & Tailwind CSS
              </span>
            </div>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="group flex items-center gap-2 px-4 py-2 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Voltar ao topo da página"
          >
            [ Topo ↑ ]
          </a>
        </div>
      </div>
    </footer>
  );
}
