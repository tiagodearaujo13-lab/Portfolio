'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/content';

const contactMethods = [
  {
    label: 'Email Directo',
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={20} />,
    color: 'text-emerald-400',
  },
  {
    label: 'WhatsApp',
    description: siteConfig.phone,
    href: siteConfig.whatsapp,
    icon: <MessageCircle size={20} />,
    color: 'text-green-400',
  },
  {
    label: 'LinkedIn',
    description: 'Conectar no LinkedIn',
    href: 'https://www.linkedin.com/in/tiago-araújofrancisco/',
    icon: <Linkedin size={20} />,
    color: 'text-blue-400',
  },
  {
    label: 'GitHub',
    description: 'Ver repositórios',
    href: 'https://github.com/tiagodearaujo13-lab',
    icon: <Github size={20} />,
    color: 'text-zinc-300',
  },
];

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      id="contato"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        {/* Newsletter / Contact Box */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-[#18181B]/80 p-8 md:p-12 lg:p-16">
          {/* Glow de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                // CONNECT & NEWSLETTER
              </span>
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-bold text-gradient"
              >
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg">
                Estou disponível para projetos freelance, posições full-stack e
                consultoria. Subscreva para receber atualizações de projetos e artigos técnicos.
              </p>
            </motion.div>

            {/* Newsletter Input Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-mono text-sm">
                  <CheckCircle2 size={18} />
                  <span>Obrigado! Entrarei em contacto em breve.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="teu.email@dominio.com"
                    required
                    className="flex-1 px-4 py-3 bg-[#0D0D0E] border border-zinc-800 focus:border-emerald-500 rounded-xl text-zinc-100 placeholder-zinc-500 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition-all"
                  />
                  <Button type="submit" variant="primary" size="md" icon={<Send size={16} />}>
                    Subscrever
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Grid de métodos de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-800/60"
            >
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/50 bg-[#0D0D0E]/60 hover:border-zinc-700/80 hover:bg-zinc-800/40 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={`Contactar via ${method.label} — ${method.description}`}
                >
                  <div
                    className={`flex-shrink-0 p-2.5 rounded-lg bg-zinc-800/80 ${method.color} group-hover:scale-110 transition-transform duration-200`}
                  >
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-zinc-200">
                      {method.label}
                    </p>
                    <p className="text-xs font-mono text-zinc-500">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
