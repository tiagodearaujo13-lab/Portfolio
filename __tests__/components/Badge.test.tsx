import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from '@/components/ui/Badge';

describe('Componente Badge', () => {
  it('deve renderizar os elementos filhos (children) corretamente', () => {
    render(<Badge>TypeScript</Badge>);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('deve aplicar as classes da variante padrão (default)', () => {
    const { container } = render(<Badge variant="default">Default Badge</Badge>);
    const badgeElement = container.firstChild as HTMLElement;
    expect(badgeElement).toHaveClass('bg-zinc-800/80');
  });

  it('deve aplicar as classes de diferentes variantes (success, warning, outline)', () => {
    const { container: successContainer } = render(
      <Badge variant="success">Success</Badge>
    );
    expect(successContainer.firstChild).toHaveClass('bg-emerald-500/10');

    const { container: warningContainer } = render(
      <Badge variant="warning">Warning</Badge>
    );
    expect(warningContainer.firstChild).toHaveClass('bg-amber-500/10');

    const { container: outlineContainer } = render(
      <Badge variant="outline">Outline</Badge>
    );
    expect(outlineContainer.firstChild).toHaveClass('bg-transparent');
  });

  it('deve renderizar o ponto pulsante quando a prop pulse for true', () => {
    const { container } = render(<Badge pulse>Em Produção</Badge>);
    const pingDot = container.querySelector('.animate-ping');
    expect(pingDot).toBeInTheDocument();
  });
});
