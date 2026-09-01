'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { aboutContent, certifications } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="section-padding"
      aria-labelledby="about-heading"
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
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Sobre Mim
          </h2>
          <p className="text-emerald-400 text-lg font-medium">
            {aboutContent.headline}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Textos - 2 colunas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2 space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-zinc-400 leading-relaxed text-base md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Valores / Mindset */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {aboutContent.values.map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 px-4 py-3"
                >
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {value.icon}
                  </span>
                  <span className="text-sm text-zinc-300 font-medium">
                    {value.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certificações - 1 coluna */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="sticky top-24">
              <h3 className="text-lg font-semibold text-zinc-200 mb-6 flex items-center gap-2">
                <span className="text-emerald-400">●</span>
                Certificações
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-3 pb-4 border-b border-zinc-800/40 last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                      {cert.badge}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">
                        {cert.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
