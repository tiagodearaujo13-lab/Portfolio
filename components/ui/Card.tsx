import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  as?: 'div' | 'article';
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
  as: Component = 'div',
}: CardProps) {
  return (
    <Component
      className={clsx(
        'rounded-2xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-sm p-6 transition-all duration-300',
        hover && 'hover:border-zinc-700/80 hover:bg-zinc-800/40',
        glow && 'glow-emerald',
        className
      )}
    >
      {children}
    </Component>
  );
}
