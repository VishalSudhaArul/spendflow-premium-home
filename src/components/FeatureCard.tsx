import type { ReactNode } from 'react';

interface Props {
  index: string;
  title: string;
  body: string;
  icon: ReactNode;
}

export default function FeatureCard({ index, title, body, icon }: Props) {
  return (
    <article className="group relative rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(17,24,39,0.06)] hover:border-accent/40 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-transform duration-300 group-hover:scale-105">
            {icon}
          </div>
          <span className="font-display text-sm text-ink-soft/40 tabular-nums font-semibold">
            {index}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-medium text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{body}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-ink-soft opacity-70 group-hover:opacity-100 transition-opacity">
        <span className="font-medium">Core capability</span>
        <span className="text-accent font-semibold group-hover:translate-x-0.5 transition-transform">Explore →</span>
      </div>
    </article>
  );
}
