import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  pulse?: boolean;
}

const variantStyles: Record<string, string> = {
  default:
    'bg-zinc-800/80 text-zinc-300 border-zinc-700/50',
  success:
    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning:
    'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info:
    'bg-blue-500/10 text-blue-400 border-blue-500/20',
  outline:
    'bg-transparent text-zinc-400 border-zinc-700',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
  pulse = false,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
