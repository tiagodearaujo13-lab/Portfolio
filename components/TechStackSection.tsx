'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { skillCategories } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="section-padding bg-zinc-900/20"
      aria-labelledby="tech-heading"
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
            id="tech-heading"
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Tech Stack
          </h2>
          <p className="text-zinc-400 text-lg">
            Tecnologias e ferramentas que domino e utilizo no dia a dia.
          </p>
        </motion.div>

        {/* Grid de Categorias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card className="h-full">
                {/* Cabeçalho da categoria */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-200">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/40 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
