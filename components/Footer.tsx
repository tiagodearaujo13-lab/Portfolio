'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];

  return (
    <footer
      className="w-full flex justify-between items-center py-5 px-[var(--page-gutter)] border-t border-rule bg-paper"
      role="contentinfo"
    >
      <div className="label-mono text-soft">
        © {currentYear} Tiago Araújo Francisco
      </div>

      <a
        href="#hero"
        className="label-mono text-ink no-underline hover:text-soft"
        aria-label={copy.footer.backToTopAria}
      >
        {copy.footer.backToTop}
      </a>
    </footer>
  );
}
