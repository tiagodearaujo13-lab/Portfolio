'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/content';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Apresentação principal"
    >
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-zinc-950 to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Foto de Perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full ring-2 ring-emerald-500/30 ring-offset-4 ring-offset-zinc-950 overflow-hidden">
              <Image
                src="/assets/tiago.webp"
                alt="Foto de perfil de Tiago Araújo Francisco"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <Badge variant="success" pulse>
                {siteConfig.availabilityText}
              </Badge>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-3xl space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-400 font-medium">
              {siteConfig.title}
            </p>
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            {siteConfig.pitch}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#projetos" variant="primary" size="lg">
              Ver Projetos
            </Button>
            <Button
              href="#contato"
              variant="secondary"
              size="lg"
              icon={<Mail size={18} />}
            >
              Entrar em Contato
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="Rolar para baixo"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
