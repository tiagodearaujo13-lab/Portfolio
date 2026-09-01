'use client';

const experienceList = [
  {
    title: 'Fundador & Lead Fullstack Developer',
    company: 'DocFácil.pt',
    period: '2024 — Presente',
    desc: 'Fundação, arquitetura full-stack e desenvolvimento integral de SaaS LegalTech em produção com +300 utilizadores ativos, Stripe, JWT e renderização dinâmica de PDFs.',
  },
  {
    title: 'Desenvolvedor de Software Freelancer',
    company: 'Projetos Próprios / Clientes',
    period: '2023 — Presente',
    desc: 'Desenvolvimento de aplicações web resilientes, extensões B2B (LeadPulse), plataformas psicométricas (Cognirav) e sistemas customizados com Next.js, React e Node.js.',
  },
  {
    title: 'Chef Executivo & Gestor de Operações',
    company: 'Hotelaria de Luxo & Alta Gastronomia',
    period: '2003 — 2023',
    desc: 'Liderança de equipes de até +20 pessoas em ambientes operacionais de extrema pressão, aplicando metodologias Just-in-Time, rigor absoluto e tolerância zero a falhas.',
  },
  {
    title: 'Formação & Certificações Ágeis',
    company: 'Scrum Alliance & Kanban University',
    period: '2023 — 2024',
    desc: 'Certificações oficiais: Certified Scrum Master (CSM®), Team Kanban Practitioner (TKP®) e formações continuadas em Clean Architecture.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experiencia"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="experience-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">04 / EXPERIÊNCIA</div>

      {/* Coluna Direita */}
      <div>
        <h2
          id="experience-heading"
          className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
        >
          Trajetória Profissional.
        </h2>

        <div className="space-y-0">
          {experienceList.map((exp, index) => (
            <div
              key={exp.title}
              className={`py-8 ${
                index > 0 ? 'border-t border-quiet' : 'border-t border-rule'
              }`}
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="font-serif text-[clamp(1.25rem,2.2vw,2.2rem)] font-normal text-ink leading-tight">
                  {exp.title} <span className="font-sans text-soft font-light">— {exp.company}</span>
                </h3>
                <span className="label-mono text-soft">{exp.period}</span>
              </div>
              <p className="font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.45] text-soft max-w-[48rem]">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
