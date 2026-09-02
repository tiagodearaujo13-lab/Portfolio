'use client';

import { useState, useEffect, useRef } from 'react';

interface CvDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDownloadModal({ isOpen, onClose }: CvDownloadModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

      // Dispara o download automático do PDF
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = 'CV_Tiago_Araujo_Francisco.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Ocorreu um erro. Tente novamente.'
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
            <span className="label-mono text-soft">DOCUMENTO OFICIAL / 2026</span>
            <h3
              id="cv-modal-title"
              className="font-serif text-2xl md:text-3xl text-ink tracking-tight"
            >
              Aceder ao Curriculum Vitae
            </h3>
          </div>
          <button
            onClick={onClose}
            className="label-mono text-sm px-2 py-1 border border-transparent text-ink hover:border-rule"
            aria-label="Fechar modal"
          >
            [✕]
          </button>
        </div>

        {/* Estado: Sucesso */}
        {status === 'success' ? (
          <div className="space-y-6 py-4">
            <div className="p-4 border border-rule space-y-2">
              <p className="label-mono text-ink font-bold">
                ✓ DOWNLOAD INICIADO COM SUCESSO
              </p>
              <p className="font-sans text-sm text-soft leading-relaxed">
                O arquivo PDF foi enviado para o seu navegador. Caso o download
                não tenha começado automaticamente, utilize as opções abaixo:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/assets/cv-tiago-francisco.pdf"
                download
                className="px-6 py-3 bg-ink text-paper label-mono text-center no-underline hover:bg-soft-ink"
              >
                DESCARREGAR NOVAMENTE ↓
              </a>
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-rule text-ink label-mono text-center no-underline hover:bg-ink hover:text-paper"
              >
                VISUALIZAR CV WEB ↗
              </a>
            </div>
          </div>
        ) : (
          /* Estado: Formulário */
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="font-sans text-sm text-soft leading-relaxed">
              Introduza o seu endereço de e-mail corporativo ou pessoal para
              desbloquear o download direto do documento em formato PDF:
            </p>

            <div className="space-y-2">
              <label
                htmlFor="lead-email"
                className="label-mono text-ink block font-bold"
              >
                E-MAIL PROFISSIONAL *
              </label>
              <input
                ref={inputRef}
                id="lead-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@empresa.com"
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
                SEM SPAM · DADOS PROTEGIDOS
              </span>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3 bg-ink text-paper label-mono hover:bg-soft-ink disabled:opacity-50"
              >
                {status === 'loading'
                  ? 'A PROCESSAR...'
                  : 'CONFIRMAR & DESCARREGAR ↓'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
