'use client';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="about-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">01 / SOBRE</div>

      {/* Coluna Direita */}
      <div>
        <h2
          id="about-heading"
          className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
        >
          Da Cozinha de Alta Pressão à Engenharia de Software.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[63rem] gap-[clamp(1.5rem,5vw,5.5rem)]">
          <p className="font-sans text-[clamp(1.05rem,1.65vw,1.42rem)] leading-[1.45] text-ink">
            Fiz a transição de 20 anos a liderar operações de alta gastronomia para a engenharia de software. Não por acaso — mas porque reconheci que as duas disciplinas exigem o mesmo: arquitetura sólida, execução impecável e zero margem para falha crítica.
          </p>
          <p className="font-sans text-[clamp(1.05rem,1.65vw,1.42rem)] leading-[1.45] text-ink">
            Construí o <strong className="font-semibold text-ink">DocFácil.pt</strong> do zero: desde a arquitetura de base de dados até à UI, integração de pagamentos e motor de geração de PDFs. Em produção, com utilizadores reais, resolvendo problemas reais com tolerância zero a falhas.
          </p>
        </div>
      </div>
    </section>
  );
}
