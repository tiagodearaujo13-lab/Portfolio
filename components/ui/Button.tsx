import { clsx } from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/25 hover:shadow-emerald-800/40 border-emerald-500/20',
  secondary:
    'bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 border-zinc-700/50 hover:border-zinc-600/50',
  ghost:
    'bg-transparent hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 border-transparent',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className,
  onClick,
  ariaLabel,
  icon,
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          aria-label={ariaLabel}
        >
          {icon}
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles} aria-label={ariaLabel}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </button>
  );
}
