import type { Metadata } from 'next';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: { absolute: 'CV — Tiago Francisco | Fullstack' },
  description:
    'Curriculum Vitae de Tiago Francisco — Fullstack Developer, CSM®, TKP®. TypeScript, React, Node.js, PostgreSQL.',
};

const sectionTitle = 'cv-section-title font-sans text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5';
const bodyText = 'font-serif text-[9.5px] leading-tight text-neutral-800';
const monoText = 'font-mono text-[8px] leading-tight uppercase tracking-wide text-neutral-700';

export default function CvPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @page { size: A4 portrait; margin: 8mm 10mm; }
        @media print {
          html, body { width: 210mm; min-height: 297mm; background: #fff !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-hidden, .no-print { display: none !important; }
          .cv-page { width: 190mm !important; max-width: none !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; }
          .cv-section, .cv-block, header, footer { break-inside: avoid; page-break-inside: avoid; }
          .cv-page p, .cv-page li { orphans: 2; widows: 2; }
          .cv-section-title { font-size: 8px !important; margin-bottom: 5px !important; }
          .cv-header { padding-bottom: 5px !important; margin-bottom: 8px !important; }
          .cv-name { font-size: 20px !important; line-height: 0.88 !important; margin-bottom: 3px !important; }
          .cv-role { font-size: 10px !important; margin-bottom: 4px !important; }
          .cv-content { font-size: 9.5px !important; line-height: 1.15 !important; }
          .cv-section { margin-bottom: 8px !important; }
          .cv-grid { gap: 6px !important; }
          .cv-project, .cv-career { padding-top: 4px !important; margin-top: 4px !important; }
          .cv-project p, .cv-career li { font-size: 9.5px !important; line-height: 1.15 !important; }
          .cv-skills p { font-size: 8px !important; }
          .cv-cert { padding-top: 4px !important; }
          a { color: inherit !important; text-decoration: none !important; }
        }
      ` }} />

      <PrintButton />

      <main className="cv-page max-w-[52rem] mx-auto px-[var(--page-gutter)] py-12 md:py-16 bg-paper text-ink">
        <header className="cv-header border-b border-rule pb-4 mb-6">
          <h1 className="cv-name font-sans font-bold text-4xl leading-[0.85] tracking-[-0.07em] text-ink mb-2">
            Tiago Francisco
          </h1>
          <p className="cv-role font-serif text-base text-ink leading-snug mb-3">
            Fullstack Developer · Certified Scrum Master (CSM®)
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-[9px] uppercase tracking-wide text-neutral-700">
            <a href="mailto:tiagodearaujo13@gmail.com">tiagodearaujo13@gmail.com</a>
            <a href="tel:+351939347977">+351 939 347 977</a>
            <span>Lagoa, Faro — Portugal</span>
            <a href="https://www.linkedin.com/in/tiago-araújofrancisco/">LINKEDIN ↗</a>
            <a href="https://github.com/tiagodearaujo13-lab">GITHUB ↗</a>
          </div>
        </header>

        <section className="cv-section mb-5" aria-labelledby="cv-profile">
          <h2 id="cv-profile" className={sectionTitle}>01 / Perfil profissional</h2>
          <p className={`${bodyText} cv-content max-w-[48rem]`}>
            Desenvolvo sistemas web resilientes, escaláveis e de alta disponibilidade em TypeScript, Node.js e React. Fundador e engenheiro líder de SaaS em produção com mais de 300 utilizadores ativos, canalizando duas décadas de liderança em operações críticas para engenharia de software previsível, código limpo e entregas Just-in-Time.
          </p>
        </section>

        <section className="cv-section mb-5" aria-labelledby="cv-projects">
          <h2 id="cv-projects" className={sectionTitle}>02 / Projetos em destaque</h2>
          <div className="space-y-2">
            <article className="cv-block cv-project border-t border-quiet pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline">
                <h3 className="font-serif text-sm">DocFácil.pt <span className={monoText}>— SaaS em produção · +300 utilizadores</span></h3>
                <a href="https://docfacil.pt" className={monoText}>docfacil.pt ↗</a>
              </div>
              <p className={`${bodyText} mb-1`}>Plataforma SaaS LegalTech para orquestração, automação e geração algorítmica de documentos jurídicos. Monólito modular com React, Node.js/Express, PostgreSQL, Stripe e webhooks idempotentes.</p>
              <p className={monoText}>REACT — NODE — EXPRESS — POSTGRESQL — STRIPE — JWT — TAILWIND</p>
            </article>
            <article className="cv-block cv-project border-t border-quiet pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline">
                <h3 className="font-serif text-sm">LeadPulse <span className={monoText}>— B2B Extension &amp; API</span></h3>
                <a href="https://leadpulse-bice.vercel.app" className={monoText}>leadpulse-bice.vercel.app ↗</a>
              </div>
              <p className={`${bodyText} mb-1`}>Módulo cliente/servidor e extensão Chrome para captação, raspagem programática e validação de leads B2B, com isolamento de contexto, sanitização e rate limiter adaptativo.</p>
              <p className={monoText}>TYPESCRIPT — REACT — NODE — EXPRESS — CHROME API — VITEST</p>
            </article>
            <article className="cv-block cv-project border-t border-quiet pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline">
                <h3 className="font-serif text-sm">Cognirav <span className={monoText}>— Full-stack platform</span></h3>
                <a href="https://cognirav.vercel.app" className={monoText}>cognirav.vercel.app ↗</a>
              </div>
              <p className={`${bodyText} mb-1`}>Sistema ponta a ponta para baterias psicométricas, computação algorítmica de score e diagnósticos analíticos, com engine de avaliação em React Context API.</p>
              <p className={monoText}>TYPESCRIPT — REACT — NODE — EXPRESS — CONTEXT API — CANVAS</p>
            </article>
          </div>
        </section>

        <section className="cv-section cv-skills mb-5" aria-labelledby="cv-skills">
          <h2 id="cv-skills" className={sectionTitle}>03 / Competências técnicas</h2>
          <div className="cv-grid grid grid-cols-2 gap-3">
            <div className="cv-block border-t border-rule pt-1.5"><h3 className="font-mono text-[8px] font-semibold tracking-wider">FRONTEND &amp; INTERFACES</h3><p className={monoText}>TYPESCRIPT — REACT — NEXT.JS — VITE — TAILWIND — CONTEXT API — WCAG 2.1 AA</p></div>
            <div className="cv-block border-t border-rule pt-1.5"><h3 className="font-mono text-[8px] font-semibold tracking-wider">BACKEND &amp; DISTRIBUÍDOS</h3><p className={monoText}>NODE — EXPRESS — REST APIS — JWT — OAUTH 2.0 — BCRYPT — RATE LIMITING</p></div>
            <div className="cv-block border-t border-rule pt-1.5"><h3 className="font-mono text-[8px] font-semibold tracking-wider">PERSISTÊNCIA &amp; DADOS</h3><p className={monoText}>POSTGRESQL — MODELAGEM RELACIONAL — MIGRAÇÕES — QUERIES — ACID</p></div>
            <div className="cv-block border-t border-rule pt-1.5"><h3 className="font-mono text-[8px] font-semibold tracking-wider">QUALIDADE &amp; DEVOPS</h3><p className={monoText}>STRIPE — CHROME EXTENSIONS — VITEST — GIT — CI/CD — VERCEL — SCRUM — KANBAN</p></div>
          </div>
        </section>

        <section className="cv-section mb-5" aria-labelledby="cv-experience">
          <h2 id="cv-experience" className={sectionTitle}>04 / Trajetória profissional</h2>
          <div className="space-y-2">
            <article className="cv-block cv-career border-t border-rule pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline"><h3 className="font-serif text-sm">Fundador &amp; Lead Fullstack Engineer <span className="font-sans text-neutral-600">— DocFácil.pt</span></h3><span className={monoText}>2024 — PRESENTE</span></div>
              <ul className={`${bodyText} list-disc pl-3 space-y-0.5`}><li>Arquitetura e implementação ponta a ponta de SaaS com +300 utilizadores ativos em produção.</li><li>Motor de compilação dinâmica de contratos, Stripe Checkout, webhooks idempotentes e autenticação JWT + OAuth 2.0.</li></ul>
            </article>
            <article className="cv-block cv-career border-t border-quiet pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline"><h3 className="font-serif text-sm">Fullstack Developer <span className="font-sans text-neutral-600">— Consultoria Independente</span></h3><span className={monoText}>2023 — PRESENTE</span></div>
              <ul className={`${bodyText} list-disc pl-3 space-y-0.5`}><li>Arquitetura PERN/MERN com monólitos modulares, APIs limpas e contratos semânticos.</li><li>Extensões Chrome B2B, Clean Architecture, Vitest e pipelines CI/CD automatizados.</li></ul>
            </article>
            <article className="cv-block cv-career border-t border-quiet pt-2">
              <div className="flex flex-wrap justify-between gap-x-2 items-baseline"><h3 className="font-serif text-sm">Gestão Operacional &amp; Liderança Executiva <span className="font-sans text-neutral-600">— Hotelaria &amp; Alta Gastronomia</span></h3><span className={monoText}>2003 — 2023</span></div>
              <ul className={`${bodyText} list-disc pl-3 space-y-0.5`}><li>Liderança de equipas de +20 colaboradores em ambientes de alta pressão e precisão contínua.</li><li>Gestão de cadeia de suprimentos, orçamento e entregas críticas sob modelo Just-in-Time.</li></ul>
            </article>
          </div>
        </section>

        <section className="cv-section mb-5" aria-labelledby="cv-certs">
          <h2 id="cv-certs" className={sectionTitle}>05 / Formação &amp; certificações</h2>
          <div className="cv-grid grid grid-cols-2 gap-2">
            {['Certified Scrum Master® (CSM) — Scrum Alliance', 'Team Kanban Practitioner® (TKP) — Kanban University', 'Certified Agile Coach (CAC) — MASSIMUS', 'Engenharia Full-Stack JavaScript/TypeScript — Mate Academy Brasil'].map((cert) => <p key={cert} className="cv-cert cv-block border-t border-quiet pt-1.5 font-serif text-[9.5px] leading-tight">{cert}</p>)}
          </div>
        </section>

        <footer className="print-hidden border-t border-rule pt-3 flex flex-wrap justify-between items-center gap-3">
          <span className="font-mono text-[8px] uppercase tracking-wide text-neutral-600">© {new Date().getFullYear()} Tiago Francisco</span>
          <a href="/" className="font-mono text-[9px] uppercase tracking-wide no-underline">← Voltar ao portfólio</a>
        </footer>
      </main>
    </>
  );
}
