import { TrendingUp, Utensils, AlertCircle } from 'lucide-react';
import { CURRENCY } from '../data';

interface Props {
  label: string;
  amount: number;
  delta: string;
  comparison: { current: number; previous: number };
}

export default function InsightCard({
  label,
  amount,
  delta,
  comparison,
}: Props) {
  const max = Math.max(comparison.current, comparison.previous, 1);
  const diff = comparison.current - comparison.previous;

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(17,24,39,0.06)]">
      {/* Top row */}
      <div className="flex items-center justify-between gap-4 pb-6 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent border border-indigo-100 shadow-xs">
            <Utensils className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-ink-soft">
              Category Focus • {label}
            </p>
            <p className="mt-0.5 font-display text-3xl font-bold text-ink tabular-nums tracking-tight">
              {CURRENCY(amount)}
            </p>
          </div>
        </div>

        {/* Green only for positive change indicator */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
          <TrendingUp className="h-4 w-4 text-emerald-600" aria-hidden />
          {delta} shift
        </span>
      </div>

      {/* Visual Bar Comparison */}
      <div className="mt-6 space-y-4">
        <p className="text-xs font-semibold text-ink uppercase tracking-wider">
          Period Comparison
        </p>

        {/* Previous Period */}
        <div>
          <div className="flex items-center justify-between text-xs text-ink-soft mb-1.5 font-medium">
            <span>Previous Period</span>
            <span className="tabular-nums font-semibold text-ink">{CURRENCY(comparison.previous)}</span>
          </div>
          <div className="h-3 rounded-full bg-line overflow-hidden">
            <div
              className="h-full rounded-full bg-slate-300 transition-all duration-700"
              style={{
                width: `${(comparison.previous / max) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Current Period — Violet for main product visualization */}
        <div>
          <div className="flex items-center justify-between text-xs text-ink-soft mb-1.5 font-medium">
            <span className="font-semibold text-ink flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              This Period (Trending High)
            </span>
            <span className="tabular-nums font-bold text-accent">{CURRENCY(comparison.current)}</span>
          </div>
          <div className="h-3 rounded-full bg-line overflow-hidden">
            <div
              className="h-full rounded-full bg-accent transition-all duration-700"
              style={{
                width: `${(comparison.current / max) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom context pill */}
      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs text-ink-soft">
        <span className="flex items-center gap-1.5 text-accent-deep font-semibold bg-accent-soft px-2.5 py-1 rounded-lg border border-indigo-100">
          <AlertCircle className="h-3.5 w-3.5 text-accent" />
          +{CURRENCY(diff)} increase detected
        </span>
        <span className="text-[11px] text-ink-soft font-medium">Analyzed across 30 days</span>
      </div>
    </div>
  );
}
