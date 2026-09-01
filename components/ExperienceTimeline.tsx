'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { experiences } from '@/data/content';

export default function ExperienceTimeline() {
  return (
    <section
      id="experiencia"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Experiência
          </h2>
          <p className="text-zinc-400 text-lg">
            Uma trajetória de excelência — da alta gastronomia à engenharia de
            software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-zinc-700/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Ícone na timeline */}
                <div
                  className="absolute left-1.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-zinc-950 border-2 border-emerald-500/50 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Conteúdo */}
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-zinc-700/60 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
                        <Briefcase
                          size={18}
                          className="text-emerald-400 flex-shrink-0"
                        />
                        {exp.role}
                      </h3>
                      <p className="text-sm text-zinc-500 mt-1">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" size="sm">
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="space-y-2 mb-4" role="list">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-400 leading-relaxed flex gap-2"
                      >
                        <span
                          className="text-emerald-500 mt-1.5 flex-shrink-0"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="default" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
