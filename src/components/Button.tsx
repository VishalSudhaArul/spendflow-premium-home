import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'soft' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const styles: Record<Variant, string> = {
  primary:
    'bg-[#635BFF] text-white hover:bg-[#4338CA] active:bg-[#3730A3] shadow-sm font-semibold focus-visible:outline-accent',
  dark:
    'bg-ink text-surface hover:bg-ink/90 active:bg-black font-semibold focus-visible:outline-accent',
  ghost:
    'bg-transparent text-ink hover:bg-ink/5 active:bg-ink/10 border border-line font-medium',
  soft:
    'bg-accent-soft text-accent-deep hover:bg-accent-soft/80 active:bg-indigo-100 border border-indigo-100 font-semibold',
};

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm transition-all duration-150 select-none ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
