import { personalInfo } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full flex justify-between items-center py-5 px-[var(--page-gutter)] border-t border-rule bg-paper"
      role="contentinfo"
    >
      <div className="label-mono text-soft">
        © {currentYear} {personalInfo.name}
      </div>

      <a
        href="#hero"
        className="label-mono text-ink no-underline hover:text-soft"
        aria-label="Voltar ao topo da página"
      >
        Voltar ao topo ↑
      </a>
    </footer>
  );
}
