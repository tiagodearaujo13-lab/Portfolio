'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { socialLinks, siteConfig } from '@/data/content';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
];

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  'external-link': <ExternalLink size={18} />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegação principal"
      >
        {/* Logo / Nome */}
        <a
          href="#"
          className="font-mono text-base font-bold text-zinc-100 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded flex items-center gap-1.5"
          aria-label={`${siteConfig.name} — Início`}
        >
          <span className="text-emerald-400">~/</span>tiago<span className="text-emerald-400">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={`${link.label} — abre em nova aba`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-md"
          role="navigation"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-2 px-6 pb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={`${link.label} — abre em nova aba`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
