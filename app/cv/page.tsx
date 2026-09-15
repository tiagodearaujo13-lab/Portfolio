'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';
import PrintButton from '@/components/PrintButton';

const sectionTitle = 'cv-section-title font-sans text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5';
const bodyText = 'font-serif text-[9.5px] leading-tight text-neutral-800';
const monoText = 'font-mono text-[8px] leading-tight uppercase tracking-wide text-neutral-700';

const projectUrls = ['https://docfacil.pt', 'https://leadpulse-bice.vercel.app', 'https://cognirav.vercel.app'];

export default function CvPage() {
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];

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
          <h1 className="cv-name font-sans font-bold text-4xl leading-[0.85] tracking-[-0.07em] text-ink mb-2">Tiago Francisco</h1>
          <p className="cv-role font-serif text-base text-ink leading-snug mb-3">{copy.cv.role}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-[9px] uppercase tracking-wide text-neutral-700">
            <a href="mailto:tiagodearaujo13@gmail.com">tiagodearaujo13@gmail.com</a><a href="tel:+351939347977">+351 939 347 977</a><span>Lagoa, Faro — Portugal</span><a href="https://www.linkedin.com/in/tiago-araújofrancisco/">LINKEDIN ↗</a><a href="https://github.com/tiagodearaujo13-lab">GITHUB ↗</a>
          </div>
        </header>

        <section className="cv-section mb-5" aria-labelledby="cv-profile"><h2 id="cv-profile" className={sectionTitle}>{copy.cv.profile}</h2><p className={`${bodyText} cv-content max-w-[48rem]`}>{lang === 'pt' ? 'Desenvolvo sistemas web resilientes, escaláveis e de alta disponibilidade em TypeScript, Node.js e React. Fundador e engenheiro líder de SaaS em produção com mais de 300 utilizadores ativos, canalizando duas décadas de liderança em operações críticas para engenharia de software previsível, código limpo e entregas Just-in-Time.' : 'I engineer resilient, scalable and highly available web systems with TypeScript, Node.js and React. Founder and lead engineer of a production SaaS platform serving 300+ active users, bringing two decades of mission-critical leadership to predictable software engineering, clean code and Just-in-Time delivery.'}</p></section>

        <section className="cv-section mb-5" aria-labelledby="cv-projects"><h2 id="cv-projects" className={sectionTitle}>{copy.cv.projects}</h2><div className="space-y-2">
          {copy.cv.projectEntries.map((project, index) => <article key={project.title} className="cv-block cv-project border-t border-quiet pt-2"><div className="flex flex-wrap justify-between gap-x-2 items-baseline"><h3 className="font-serif text-sm">{project.title} <span className={monoText}>{project.meta}</span></h3><a href={projectUrls[index]} className={monoText}>{project.url}</a></div><p className={`${bodyText} mb-1`}>{project.description}</p><p className={monoText}>{project.stack}</p></article>)}
        </div></section>

        <section className="cv-section cv-skills mb-5" aria-labelledby="cv-skills"><h2 id="cv-skills" className={sectionTitle}>{copy.cv.skills}</h2><div className="cv-grid grid grid-cols-2 gap-3">{copy.cv.skillGroups.map((skill) => <div key={skill.title} className="cv-block border-t border-rule pt-1.5"><h3 className="font-mono text-[8px] font-semibold tracking-wider">{skill.title}</h3><p className={monoText}>{skill.items}</p></div>)}</div></section>

        <section className="cv-section mb-5" aria-labelledby="cv-experience"><h2 id="cv-experience" className={sectionTitle}>{copy.cv.experience}</h2><div className="space-y-2">{copy.cv.careerEntries.map((career) => <article key={career.title} className="cv-block cv-career border-t border-rule pt-2"><div className="flex flex-wrap justify-between gap-x-2 items-baseline"><h3 className="font-serif text-sm">{career.title} <span className="font-sans text-neutral-600">{career.company}</span></h3><span className={monoText}>{career.period}</span></div><ul className={`${bodyText} list-disc pl-3 space-y-0.5`}>{career.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>

        <section className="cv-section mb-5" aria-labelledby="cv-certs"><h2 id="cv-certs" className={sectionTitle}>{copy.cv.certifications}</h2><div className="cv-grid grid grid-cols-2 gap-2">{copy.cv.certificationsList.map((cert) => <p key={cert} className="cv-cert cv-block border-t border-quiet pt-1.5 font-serif text-[9.5px] leading-tight">{cert}</p>)}</div></section>
        <footer className="print-hidden border-t border-rule pt-3 flex flex-wrap justify-between items-center gap-3"><span className="font-mono text-[8px] uppercase tracking-wide text-neutral-600">© {new Date().getFullYear()} Tiago Francisco</span><a href="/" className="font-mono text-[9px] uppercase tracking-wide no-underline">{copy.cv.back}</a></footer>
      </main>
    </>
  );
}
