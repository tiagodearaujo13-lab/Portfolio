'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Zap } from 'lucide-react';
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
      className="section-padding"
      aria-labelledby="projects-heading"
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
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Projetos em Destaque
          </h2>
          <p className="text-zinc-400 text-lg">
            Soluções reais, em produção, resolvendo problemas reais.
          </p>
        </motion.div>

        {/* Featured Project — DocFácil.pt */}
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
              className="relative overflow-hidden border-emerald-500/20 hover:border-emerald-500/40"
              glow
            >
              {/* Glow de fundo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 space-y-6">
                {/* Header do projeto */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
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
                    <Zap size={14} />
                    Projeto Flagship
                  </Badge>
                </div>

                {/* Descrição */}
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
                  {featuredProject.description}
                </p>

                {featuredProject.longDescription && (
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
                    {featuredProject.longDescription}
                  </p>
                )}

                {/* Highlight */}
                {featuredProject.highlight && (
                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-5 py-3">
                    <p className="text-sm text-emerald-300/80">
                      💡 {featuredProject.highlight}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => (
                    <Badge key={tech} variant="info" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
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
                      Ver Código
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Outros Projetos */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card as="article" className="h-full flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-zinc-200">
                      {project.title}
                    </h3>
                    <Badge variant={statusVariant[project.status]}>
                      {project.statusLabel}
                    </Badge>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 mt-auto border-t border-zinc-800/40">
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
