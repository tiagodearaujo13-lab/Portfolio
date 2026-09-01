'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Zap, Layers } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';

const statusVariant: Record<string, 'success' | 'warning' | 'info'> = {
  production: 'success',
  development: 'warning',
  archived: 'info',
};

export default function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projetos"
      className="py-24 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Layers size={14} />
            <span>ENGENHARIA & PRODUTO</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4"
          >
            Projetos em Destaque
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Aplicações reais desenvolvidas do zero à produção com foco em arquitetura limpa, segurança e entrega de valor.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Card
              as="article"
              className="relative overflow-hidden border-emerald-500/30 bg-zinc-900/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">
                        {featuredProject.title}
                      </h3>
                      <Badge variant={statusVariant[featuredProject.status]}>
                        {featuredProject.statusLabel}
                      </Badge>
                    </div>
                    {featuredProject.users && (
                      <div className="flex items-center gap-2 text-emerald-400 font-mono">
                        <Users size={16} />
                        <span className="text-sm font-medium">
                          {featuredProject.users}
                        </span>
                      </div>
                    )}
                  </div>
                  <Badge variant="success" size="md">
                    <Zap size={14} className="mr-1 inline" />
                    Flagship SaaS
                  </Badge>
                </div>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl">
                  {featuredProject.description}
                </p>

                {featuredProject.longDescription && (
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                    {featuredProject.longDescription}
                  </p>
                )}

                {featuredProject.highlight && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-3.5">
                    <p className="text-sm text-emerald-300 leading-relaxed">
                      <span className="font-semibold text-emerald-400">Destaque Técnico: </span>
                      {featuredProject.highlight}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {featuredProject.links.live && (
                    <Button
                      href={featuredProject.links.live}
                      external
                      variant="primary"
                      icon={<ExternalLink size={16} />}
                    >
                      Visitar Plataforma
                    </Button>
                  )}
                  {featuredProject.links.github && (
                    <Button
                      href={featuredProject.links.github}
                      external
                      variant="secondary"
                      icon={<Github size={16} />}
                    >
                      Repositório GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                as="article"
                className="h-full flex flex-col justify-between p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                    <Badge variant={statusVariant[project.status]} size="sm">
                      {project.statusLabel}
                    </Badge>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="text-xs text-zinc-400 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/50 leading-relaxed">
                      💡 {project.highlight}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-800/60 text-zinc-400 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-5 mt-6 border-t border-zinc-800/60">
                  {project.links.live && (
                    <Button
                      href={project.links.live}
                      external
                      variant="ghost"
                      size="sm"
                      icon={<ExternalLink size={14} />}
                    >
                      Aceder
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      href={project.links.github}
                      external
                      variant="ghost"
                      size="sm"
                      icon={<Github size={14} />}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}