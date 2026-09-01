import { ArrowUp, Heart } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-zinc-800/50 bg-zinc-950"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-500">
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-zinc-600 mt-1 flex items-center justify-center md:justify-start gap-1">
              Feito com{' '}
              <Heart
                size={12}
                className="text-emerald-500 fill-emerald-500"
                aria-label="amor"
              />{' '}
              usando Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="group flex items-center gap-2 px-4 py-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Voltar ao topo da página"
          >
            Voltar ao topo
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
