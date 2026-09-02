import type { Metadata } from 'next';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'CV — Tiago Araújo Francisco | Engenheiro de Software Full-Stack',
  description:
    'Curriculum Vitae de Tiago Araújo Francisco — Engenheiro de Software Full-Stack, CSM®, TKP®. TypeScript, React, Node.js, PostgreSQL.',
};

export default function CvPage() {
  return (
    <>
      {/* Estilos de Impressão */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              .no-print { display: none !important; }
              body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              @page { size: A4; margin: 1.5cm 2cm; }
              .cv-page { padding: 0 !important; border: none !important; }
              .cv-section { break-inside: avoid; }
            }
          `,
        }}
      />

      {/* Botão Flutuante de Impressão (Client Component) */}
      <PrintButton />

      {/* Página do CV */}
      <main className="cv-page max-w-[52rem] mx-auto px-[var(--page-gutter)] py-12 md:py-16 bg-paper text-ink">
        {/* ────────── CABEÇALHO ────────── */}
        <header className="border-b border-rule pb-6 mb-8">
          <h1 className="font-sans font-normal text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.85] tracking-[-0.07em] text-ink mb-3">
            Tiago
            <br />
            Francisco
          </h1>
          <p className="font-serif text-[clamp(1.1rem,1.8vw,1.4rem)] text-ink leading-snug mb-4">
            Engenheiro de Software Full-Stack · Certified Scrum Master (CSM®)
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 label-mono text-soft text-[0.7rem]">
            <a
              href="mailto:tiagodearaujo13@gmail.com"
              className="text-ink no-underline hover:text-soft"
            >
              tiagodearaujo13@gmail.com
            </a>
            <a
              href="tel:+351939347977"
              className="text-ink no-underline hover:text-soft"
            >
              +351 939 347 977
            </a>
            <span>Lagoa, Faro — Portugal</span>
            <a
              href="https://www.linkedin.com/in/tiago-araújofrancisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink no-underline hover:text-soft"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://github.com/tiagodearaujo13-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink no-underline hover:text-soft"
            >
              GITHUB ↗
            </a>
          </div>
        </header>

        {/* ────────── 01 / PERFIL ────────── */}
        <section className="cv-section mb-10" aria-labelledby="cv-profile">
          <div className="flex items-baseline gap-4 border-b border-rule pb-2 mb-4">
            <span className="label-mono text-soft text-[0.65rem]">01</span>
            <h2
              id="cv-profile"
              className="font-serif text-xl md:text-2xl font-normal text-ink"
            >
              Perfil Profissional
            </h2>
          </div>
          <p className="font-sans text-[0.95rem] leading-[1.55] text-ink max-w-[48rem]">
            Desenvolvo sistemas web resilientes, escaláveis e de alta
            disponibilidade em TypeScript, Node.js e React. Fundador e
            engenheiro líder de SaaS em produção com mais de 300 utilizadores
            ativos, canalizando duas décadas de liderança em operações críticas
            para engenharia de software previsível, código limpo e entregas
            Just-in-Time.
          </p>
        </section>

        {/* ────────── 02 / PROJETOS EM DESTAQUE ────────── */}
        <section className="cv-section mb-10" aria-labelledby="cv-projects">
          <div className="flex items-baseline gap-4 border-b border-rule pb-2 mb-4">
            <span className="label-mono text-soft text-[0.65rem]">02</span>
            <h2
              id="cv-projects"
              className="font-serif text-xl md:text-2xl font-normal text-ink"
            >
              Projetos em Destaque
            </h2>
          </div>

          <div className="space-y-6">
            {/* DocFácil.pt */}
            <article className="border-t border-quiet pt-4">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h3 className="font-serif text-lg font-normal text-ink">
                  DocFácil.pt{' '}
                  <span className="label-mono text-soft font-normal">
                    — SaaS EM PRODUÇÃO · +300 UTILIZADORES
                  </span>
                </h3>
                <a
                  href="https://docfacil.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-ink text-[0.65rem] no-underline hover:text-soft"
                >
                  docfacil.pt ↗
                </a>
              </div>
              <p className="font-sans text-[0.88rem] leading-[1.5] text-soft mb-2">
                Plataforma SaaS LegalTech para orquestração, automação e geração
                algorítmica de documentos e contratos jurídicos em tempo de
                execução. Monólito modular com frontend reativo em React.js, API
                RESTful desacoplada em Node.js/Express, persistência em
                PostgreSQL (Neon.tech) e webhooks idempotentes do Stripe.
              </p>
              <p className="label-mono text-soft text-[0.62rem]">
                REACT.JS — NODE.JS — EXPRESS — POSTGRESQL — STRIPE WEBHOOKS —
                JWT — @REACT-PDF/RENDERER — TAILWIND CSS
              </p>
            </article>

            {/* LeadPulse */}
            <article className="border-t border-quiet pt-4">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h3 className="font-serif text-lg font-normal text-ink">
                  LeadPulse{' '}
                  <span className="label-mono text-soft font-normal">
                    — B2B EXTENSION & API
                  </span>
                </h3>
              </div>
              <p className="font-sans text-[0.88rem] leading-[1.5] text-soft mb-2">
                Módulo cliente/servidor e extensão Chrome para captação,
                raspagem programática e validação cadastral de leads corporativos
                B2B. Arquitetura segura com DOMSanitizer customizado, isolamento
                de contexto Chrome API e rate limiter adaptativo.
              </p>
              <p className="label-mono text-soft text-[0.62rem]">
                TYPESCRIPT — REACT.JS — NODE.JS — EXPRESS — CHROME EXTENSION API
                — VITEST — TAILWIND CSS
              </p>
            </article>

            {/* Cognirav */}
            <article className="border-t border-quiet pt-4">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h3 className="font-serif text-lg font-normal text-ink">
                  Cognirav{' '}
                  <span className="label-mono text-soft font-normal">
                    — FULL-STACK PLATFORM
                  </span>
                </h3>
              </div>
              <p className="font-sans text-[0.88rem] leading-[1.5] text-soft mb-2">
                Sistema ponta a ponta para execução de baterias psicométricas,
                computação algorítmica de score e geração de diagnósticos
                analíticos de perfil. Monorepo modular com engine de avaliação em
                React Context API orquestrando 30+ dimensões.
              </p>
              <p className="label-mono text-soft text-[0.62rem]">
                TYPESCRIPT — REACT.JS (VITE) — NODE.JS — EXPRESS — CONTEXT API —
                CANVAS API — TAILWIND CSS
              </p>
            </article>
          </div>
        </section>

        {/* ────────── 03 / COMPETÊNCIAS TÉCNICAS ────────── */}
        <section className="cv-section mb-10" aria-labelledby="cv-skills">
          <div className="flex items-baseline gap-4 border-b border-rule pb-2 mb-4">
            <span className="label-mono text-soft text-[0.65rem]">03</span>
            <h2
              id="cv-skills"
              className="font-serif text-xl md:text-2xl font-normal text-ink"
            >
              Competências Técnicas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-t border-rule pt-3">
              <h3 className="label-mono text-ink font-semibold tracking-widest mb-2">
                FRONTEND & INTERFACES
              </h3>
              <p className="label-mono text-soft text-[0.68rem] leading-relaxed">
                TYPESCRIPT — REACT.JS — NEXT.JS (APP ROUTER) — VITE — TAILWIND
                CSS — CONTEXT API — DESIGN SYSTEMS — WCAG 2.1 AA
              </p>
            </div>
            <div className="border-t border-rule pt-3">
              <h3 className="label-mono text-ink font-semibold tracking-widest mb-2">
                BACKEND & DISTRIBUÍDOS
              </h3>
              <p className="label-mono text-soft text-[0.68rem] leading-relaxed">
                NODE.JS — EXPRESS.JS — RESTFUL APIS — JWT — GOOGLE OAUTH 2.0 —
                BCRYPT — RATE LIMITING — CORS & SECURITY HEADERS — NODEMAILER
              </p>
            </div>
            <div className="border-t border-rule pt-3">
              <h3 className="label-mono text-ink font-semibold tracking-widest mb-2">
                PERSISTÊNCIA & DADOS
              </h3>
              <p className="label-mono text-soft text-[0.68rem] leading-relaxed">
                POSTGRESQL (NEON.TECH) — MODELAGEM RELACIONAL — MIGRAÇÕES DE
                SCHEMA — OTIMIZAÇÃO DE QUERIES — INTEGRIDADE TRANSACIONAL (ACID)
              </p>
            </div>
            <div className="border-t border-rule pt-3">
              <h3 className="label-mono text-ink font-semibold tracking-widest mb-2">
                INTEGRAÇÕES, QUALIDADE & DEVOPS
              </h3>
              <p className="label-mono text-soft text-[0.68rem] leading-relaxed">
                STRIPE CHECKOUT & WEBHOOKS — CHROME EXTENSIONS — VITEST — GIT &
                GITFLOW — CI/CD (GITHUB ACTIONS) — VERCEL — SCRUM (CSM®) —
                KANBAN (TKP®)
              </p>
            </div>
          </div>
        </section>

        {/* ────────── 04 / TRAJETÓRIA PROFISSIONAL ────────── */}
        <section className="cv-section mb-10" aria-labelledby="cv-experience">
          <div className="flex items-baseline gap-4 border-b border-rule pb-2 mb-4">
            <span className="label-mono text-soft text-[0.65rem]">04</span>
            <h2
              id="cv-experience"
              className="font-serif text-xl md:text-2xl font-normal text-ink"
            >
              Trajetória Profissional
            </h2>
          </div>

          <div className="space-y-0">
            {/* DocFácil.pt */}
            <article className="border-t border-rule py-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="font-serif text-base md:text-lg font-normal text-ink">
                  Fundador & Lead Full-Stack Engineer{' '}
                  <span className="font-sans text-soft font-light">
                    — DocFácil.pt (SaaS LegalTech)
                  </span>
                </h3>
                <span className="label-mono text-soft text-[0.65rem]">
                  2024 — PRESENTE
                </span>
              </div>
              <ul className="space-y-1 list-none pl-0">
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Idealização, arquitetura de sistemas e implementação ponta a
                  ponta de plataforma SaaS com +300 utilizadores ativos em
                  produção.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Motor de compilação dinâmica de contratos em PDF com
                  substituição algorítmica de cláusulas condicionais.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Faturamento transacional via Stripe Checkout com webhooks
                  idempotentes e autenticação híbrida JWT + OAuth 2.0.
                </li>
              </ul>
            </article>

            {/* Freelancer */}
            <article className="border-t border-quiet py-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="font-serif text-base md:text-lg font-normal text-ink">
                  Engenheiro de Software Full-Stack{' '}
                  <span className="font-sans text-soft font-light">
                    — Consultoria Independente
                  </span>
                </h3>
                <span className="label-mono text-soft text-[0.65rem]">
                  2023 — PRESENTE
                </span>
              </div>
              <ul className="space-y-1 list-none pl-0">
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Arquitetura PERN/MERN com monólitos modulares, APIs limpas e
                  contratos semânticos de integração.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Extensões Chrome para automação B2B com injeção segura de
                  scripts e sanitização anti-XSS.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Clean Architecture, refatoração orientada a testes (Vitest) e
                  pipelines CI/CD automatizados.
                </li>
              </ul>
            </article>

            {/* Operações */}
            <article className="border-t border-quiet py-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="font-serif text-base md:text-lg font-normal text-ink">
                  Gestão Operacional & Liderança Executiva{' '}
                  <span className="font-sans text-soft font-light">
                    — Hotelaria & Alta Gastronomia
                  </span>
                </h3>
                <span className="label-mono text-soft text-[0.65rem]">
                  2003 — 2023
                </span>
              </div>
              <ul className="space-y-1 list-none pl-0">
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Liderança de equipas de +20 colaboradores em ambientes de alta
                  pressão e precisão contínua.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Gestão de cadeia de suprimentos, controlo orçamentário e
                  entregas críticas sob modelo Just-in-Time.
                </li>
                <li className="font-sans text-[0.85rem] leading-[1.5] text-soft pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.7rem]">
                  Tomada de decisão estratégica em tempo real com tolerância zero
                  a falhas operacionais.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* ────────── 05 / FORMAÇÃO & CERTIFICAÇÕES ────────── */}
        <section className="cv-section mb-10" aria-labelledby="cv-certs">
          <div className="flex items-baseline gap-4 border-b border-rule pb-2 mb-4">
            <span className="label-mono text-soft text-[0.65rem]">05</span>
            <h2
              id="cv-certs"
              className="font-serif text-xl md:text-2xl font-normal text-ink"
            >
              Formação & Certificações
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-t border-quiet pt-3">
              <h3 className="font-sans text-sm font-semibold text-ink">
                Certified Scrum Master® (CSM)
              </h3>
              <p className="label-mono text-soft text-[0.65rem]">
                SCRUM ALLIANCE
              </p>
            </div>
            <div className="border-t border-quiet pt-3">
              <h3 className="font-sans text-sm font-semibold text-ink">
                Team Kanban Practitioner® (TKP)
              </h3>
              <p className="label-mono text-soft text-[0.65rem]">
                KANBAN UNIVERSITY
              </p>
            </div>
            <div className="border-t border-quiet pt-3">
              <h3 className="font-sans text-sm font-semibold text-ink">
                Certified Agile Coach (CAC)
              </h3>
              <p className="label-mono text-soft text-[0.65rem]">MASSIMUS</p>
            </div>
            <div className="border-t border-quiet pt-3">
              <h3 className="font-sans text-sm font-semibold text-ink">
                Engenharia Full-Stack JavaScript/TypeScript
              </h3>
              <p className="label-mono text-soft text-[0.65rem]">
                MATE ACADEMY BRASIL
              </p>
            </div>
          </div>
        </section>

        {/* ────────── RODAPÉ ────────── */}
        <footer className="border-t border-rule pt-4 flex flex-wrap justify-between items-center gap-4">
          <span className="label-mono text-soft text-[0.6rem]">
            © {new Date().getFullYear()} TIAGO ARAÚJO FRANCISCO
          </span>
          <a
            href="/"
            className="label-mono text-ink text-[0.65rem] no-underline hover:text-soft"
          >
            ← VOLTAR AO PORTFÓLIO
          </a>
        </footer>
      </main>
    </>
  );
}
