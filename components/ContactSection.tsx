'use client';

import { FormEvent, useState } from 'react';
import { personalInfo } from '@/data/content';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result: { success?: boolean; message?: string; error?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Não foi possível enviar a mensagem.');
      }

      setForm(initialForm);
      setStatus('success');
    } catch (error) {
      console.error('[CONTACT_FORM_ERROR]', error);
      setStatus('error');
    }
  };

  const fieldClassName =
    'w-full border-b border-rule bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-soft focus:border-ink focus:outline-none';

  return (
    <section
      id="contato"
      className="grid grid-cols-1 gap-[clamp(1.5rem,5vw,7rem)] border-b border-rule bg-paper p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] lg:grid-cols-[minmax(9rem,0.33fr)_1fr]"
      aria-labelledby="contact-heading"
    >
      <div className="label-mono text-soft">05 / CONTATO</div>

      <div>
        <h2
          id="contact-heading"
          className="mb-[clamp(2.25rem,5vw,4.75rem)] max-w-[16ch] font-serif text-[clamp(2.3rem,5.1vw,5.7rem)] font-normal leading-[0.94] tracking-[-0.06em] text-ink"
        >
          Iniciar Diálogo.
        </h2>

        <div className="grid max-w-[62rem] grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(14rem,0.42fr)]">
          <form onSubmit={handleSubmit} className="border border-rule p-[clamp(1.4rem,3vw,2.4rem)]" noValidate>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="font-sans text-sm text-ink">
                Nome
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className={fieldClassName}
                  placeholder="O seu nome"
                />
              </label>
              <label className="font-sans text-sm text-ink">
                E-mail de retorno
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className={fieldClassName}
                  placeholder="nome@empresa.pt"
                />
              </label>
            </div>

            <label className="mt-6 block font-sans text-sm text-ink">
              Assunto
              <input
                required
                name="subject"
                type="text"
                minLength={3}
                maxLength={150}
                value={form.subject}
                onChange={(event) => updateField('subject', event.target.value)}
                className={fieldClassName}
                placeholder="Como posso ajudar?"
              />
            </label>

            <label className="mt-6 block font-sans text-sm text-ink">
              Mensagem
              <textarea
                required
                name="message"
                minLength={10}
                maxLength={5000}
                rows={6}
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className={`${fieldClassName} resize-y`}
                placeholder="Descreva o projeto, posição ou desafio técnico."
              />
            </label>

            <label className="sr-only" aria-hidden="true">
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                value={form.website}
                onChange={(event) => updateField('website', event.target.value)}
              />
            </label>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-quiet pt-5">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="label-mono inline-flex min-h-12 items-center gap-3 bg-ink px-6 py-3 text-paper hover:bg-soft-ink disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'sending' && (
                  <span className="h-3 w-3 animate-spin rounded-full border border-paper border-t-transparent motion-reduce:animate-none" aria-hidden="true" />
                )}
                {status === 'sending' ? 'A ENVIAR…' : 'ENVIAR MENSAGEM →'}
              </button>
              <span className="font-mono text-[10px] uppercase tracking-wider text-soft">Resposta direta por e-mail</span>
            </div>

            <div className="mt-5 min-h-6" role="status" aria-live="polite">
              {status === 'success' && <p className="font-mono text-xs text-ink">Mensagem enviada. Obrigado pelo contacto.</p>}
              {status === 'error' && <p className="font-mono text-xs text-red-700">Não foi possível enviar. Verifique os dados ou tente novamente.</p>}
            </div>
          </form>

          <aside className="border-t border-rule pt-5 xl:border-l xl:border-t-0 xl:pl-6" aria-label="Outras formas de contacto">
            <p className="max-w-[26ch] font-serif text-2xl leading-tight text-ink">
              Tem uma ideia, uma posição ou um sistema para discutir?
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="label-mono block text-ink no-underline hover:text-soft"
                aria-label={`Enviar e-mail para ${personalInfo.email}`}
              >
                {personalInfo.email} ↗
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono block text-ink no-underline hover:text-soft"
                aria-label="Aceder ao perfil no LinkedIn (abre em novo separador)"
              >
                LINKEDIN ↗
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono block text-ink no-underline hover:text-soft"
                aria-label="Aceder ao perfil no GitHub (abre em novo separador)"
              >
                GITHUB ↗
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
