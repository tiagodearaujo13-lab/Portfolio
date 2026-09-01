'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Linkedin, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/content';

const contactMethods = [
  {
    label: 'Email',
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
  return (
    <section
      id="contato"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-8 md:p-12 lg:p-16">
          {/* Glow de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-bold text-gradient mb-4"
              >
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-zinc-400 text-lg mb-10">
                Estou disponível para projetos freelance, posições full-stack e
                colaborações. Escolha o canal que preferir — respondo rápido.
              </p>
            </motion.div>

            {/* Grid de contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/60 hover:border-zinc-700/80 hover:bg-zinc-800/40 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
                    <p className="text-xs text-zinc-500">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* CTA principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                href={`mailto:${siteConfig.email}?subject=Olá Tiago — Oportunidade de Projeto`}
                external
                variant="primary"
                size="lg"
                icon={<Mail size={18} />}
              >
                Enviar Email Agora
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
