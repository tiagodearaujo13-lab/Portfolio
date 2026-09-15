'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';

interface CvDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDownloadModal({ isOpen, onClose }: CvDownloadModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus no input ao abrir
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset ao fechar
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/download-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao processar e-mail.');
      }

      setStatus('success');

    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : copy.modal.errorFallback
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className="w-full max-w-lg bg-paper border border-rule p-6 md:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between border-b border-rule pb-4">
          <div className="space-y-1">
            <span className="label-mono text-soft">{copy.modal.document}</span>
            <h3
              id="cv-modal-title"
              className="font-serif text-2xl md:text-3xl text-ink tracking-tight"
            >
              {copy.modal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="label-mono text-sm px-2 py-1 border border-transparent text-ink hover:border-rule"
            aria-label={copy.modal.closeAria}
          >
            [✕]
          </button>
        </div>

        {/* Estado: Sucesso */}
        {status === 'success' ? (
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <p className="label-mono text-ink font-bold">
                {copy.modal.authorised}
              </p>
              <h4 className="font-serif text-2xl text-ink">
                {copy.modal.successTitle}
              </h4>
              <p className="font-serif text-base md:text-lg text-soft leading-relaxed">
                {copy.modal.successText}
              </p>
            </div>

            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-4 bg-ink text-paper label-mono text-center no-underline hover:bg-soft-ink"
            >
              {copy.modal.viewWeb}
            </a>

            <p className="font-serif text-sm text-soft leading-relaxed">
              {copy.modal.printInstruction}
            </p>

            <button
              type="button"
              onClick={onClose}
              className="label-mono text-ink border border-rule px-5 py-3 hover:bg-ink hover:text-paper"
            >
              {copy.modal.close}
            </button>
          </div>
        ) : (
          /* Estado: Formulário */
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="font-serif text-sm text-soft leading-relaxed">
              {copy.modal.intro}
            </p>

            <div className="space-y-2">
              <label
                htmlFor="lead-email"
                className="label-mono text-ink block font-bold"
              >
                {copy.modal.emailLabel}
              </label>
              <input
                ref={inputRef}
                id="lead-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.modal.emailPlaceholder}
                className="w-full px-4 py-3 border border-rule bg-transparent font-mono text-sm text-ink placeholder:text-soft focus:outline-none focus:ring-2 focus:ring-ink"
                disabled={status === 'loading'}
                autoComplete="email"
              />
              {status === 'error' && (
                <span className="label-mono text-ink block mt-1" role="alert">
                  ⚠ {errorMessage}
                </span>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="label-mono text-[0.6rem] text-soft">
                {copy.modal.privacy}
              </span>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3 bg-ink text-paper label-mono hover:bg-soft-ink disabled:opacity-50"
              >
                {status === 'loading' ? copy.modal.processing : copy.modal.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
