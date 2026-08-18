import { useState } from 'react';
import {
  Utensils,
  Car,
  ShoppingBag,
  Zap,
  ArrowUpRight,
  Wallet,
  PiggyBank,
  TrendingDown,
  Sparkles,
} from 'lucide-react';
import { CURRENCY, PERIODS, type Period, type Txn } from '../data';
import SpendingChart from './SpendingChart';

const ICONS = {
  utensils: Utensils,
  car: Car,
  shopping: ShoppingBag,
  zap: Zap,
} as const;

const ICON_BG = {
  utensils: 'bg-indigo-50 text-indigo-900 border border-indigo-100',
  car: 'bg-slate-100 text-slate-900 border border-slate-200',
  shopping: 'bg-violet-50 text-violet-900 border border-violet-100',
  zap: 'bg-slate-100 text-slate-900 border border-slate-200',
} as const;

function TxnRow({ t }: { t: Txn }) {
  const Icon = ICONS[t.icon];
  const bgClass = ICON_BG[t.icon];

  return (
    <li className="group flex items-center gap-3 py-2.5 px-2 rounded-xl transition-colors duration-150 hover:bg-bg">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${bgClass}`}>
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-ink group-hover:text-accent transition-colors">{t.name}</p>
        </div>
        <p className="truncate text-xs text-ink-soft">
          {t.detail} {t.date && <span className="text-ink-soft/50">• {t.date}</span>}
        </p>
      </div>
      <span className="text-sm font-semibold text-ink tabular-nums group-hover:text-accent transition-colors">
        {CURRENCY(t.amount)}
      </span>
    </li>
  );
}

const TONE_CLASS = {
  accent: 'bg-accent',
  ink: 'bg-slate-900',
  muted: 'bg-slate-600',
  line: 'bg-slate-400',
} as const;

const CATEGORY_ICONS = {
  Food: Utensils,
  Transport: Car,
  Shopping: ShoppingBag,
  Bills: Zap,
} as const;

interface Props {
  compact?: boolean;
}

export default function DashboardPreview({ compact = false }: Props) {
  const [period, setPeriod] = useState<Period>('this');
  const d = PERIODS[period];
  const spentPct = Math.round((d.total / d.budget) * 100);

  const prevTotal = PERIODS[period === 'this' ? 'last' : 'this'].total;
  const totalChangePct = Math.round(((d.total - prevTotal) / prevTotal) * 100);

  return (
    <div className="w-full rounded-3xl border border-line bg-surface shadow-[0_24px_80px_-24px_rgba(17,24,39,0.12)] overflow-hidden transition-all duration-300">
      {/* Window chrome header bar */}
      <div className="flex items-center justify-between border-b border-line px-4 sm:px-6 py-3 bg-bg">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden />
          <div className="ml-3 flex items-center gap-2 text-xs font-medium text-ink-soft bg-surface px-3 py-1 rounded-full border border-line">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            spendflow.app/dashboard
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-ink-soft">
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-accent-soft text-accent-deep text-[11px] font-semibold">
            Demo Sandbox
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-6">
        {/* Top row: Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Total Spending */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-bg/50 p-4 sm:p-5 transition-all duration-200 hover:border-line hover:shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-ink-soft">
                <Wallet className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Total spending</span>
              </div>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                totalChangePct > 0 
                  ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}>
                {totalChangePct > 0 ? `+${totalChangePct}%` : `${totalChangePct}%`} vs prev
              </span>
            </div>

            <p className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tabular-nums tracking-tight">
              {CURRENCY(d.total)}
            </p>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-ink-soft mb-1.5">
                <span>Monthly Budget Cap</span>
                <span className="tabular-nums font-semibold text-ink">{spentPct}% used</span>
              </div>
              <div className="h-2 rounded-full bg-line overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                  style={{ width: `${spentPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Budget Remaining */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-bg/50 p-4 sm:p-5 transition-all duration-200 hover:border-line hover:shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-ink-soft">
                <PiggyBank className="h-4 w-4 text-emerald-600" aria-hidden />
                <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Budget remaining</span>
              </div>
              <span className="text-[11px] text-ink-soft font-medium">
                Limit: {CURRENCY(d.budget)}
              </span>
            </div>

            <p className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tabular-nums tracking-tight">
              {CURRENCY(d.budget - d.total)}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
              <span>Pace Indicator</span>
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {100 - spentPct}% safe margin remaining
              </span>
            </div>
          </div>
        </div>

        {/* Spending trend section */}
        <div className="rounded-2xl border border-line bg-bg/50 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-ink-soft">
              <TrendingDown className="h-4 w-4 text-accent" aria-hidden />
              <span className="text-xs font-semibold text-ink uppercase tracking-wider">Spending trend</span>
            </div>

            {/* Interactive Period Selector */}
            <div
              role="tablist"
              aria-label="Select period"
              className="inline-flex items-center rounded-xl bg-bg p-1 border border-line"
            >
              {(['this', 'last'] as Period[]).map((p) => (
                <button
                  key={p}
                  role="tab"
                  aria-selected={period === p}
                  onClick={() => setPeriod(p)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    period === p
                      ? 'bg-accent text-white shadow-xs'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {p === 'this' ? 'This month' : 'Last month'}
                </button>
              ))}
            </div>
          </div>

          <SpendingChart key={period} trend={d.trend} points={d.trendPoints} compact={compact} />
        </div>

        {/* Categories + Recent Transactions */}
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {/* Categories Card */}
          <div className="rounded-2xl border border-line bg-bg/50 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-ink uppercase tracking-wider">Categories</p>
                <span className="text-[11px] text-ink-soft font-medium">Share of Total</span>
              </div>
              <ul className="space-y-3.5">
                {d.categories.map((c) => {
                  const pct = Math.round((c.amount / d.total) * 100);
                  const IconComp = CATEGORY_ICONS[c.label as keyof typeof CATEGORY_ICONS] || Utensils;
                  return (
                    <li key={c.label} className="group">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="flex items-center gap-2 font-medium text-ink">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] ${TONE_CLASS[c.tone]} text-surface`}
                            aria-hidden
                          >
                            <IconComp className="h-3 w-3 stroke-[2.25]" />
                          </span>
                          {c.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-ink-soft font-mono tabular-nums">{pct}%</span>
                          <span className="tabular-nums font-semibold text-ink">
                            {CURRENCY(c.amount)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-line overflow-hidden">
                        <div
                          className={`h-full rounded-full ${TONE_CLASS[c.tone]} transition-all duration-700 ease-out group-hover:brightness-110`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-[11px] text-ink-soft">
              <span>Proportional category distribution</span>
              <span className="font-semibold text-accent">100% accounted</span>
            </div>
          </div>

          {/* Recent Transactions Card */}
          <div className="rounded-2xl border border-line bg-bg/50 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-ink uppercase tracking-wider">Recent transactions</p>
                <div className="flex items-center gap-1 text-[11px] text-ink-soft font-medium">
                  <span>Demo data</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink-soft" aria-hidden />
                </div>
              </div>
              <ul className="divide-y divide-line/60">
                {d.txns.map((t) => (
                  <TxnRow key={t.name} t={t} />
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-line flex items-center gap-1.5 text-[11px] text-ink-soft">
              <Sparkles className="h-3 w-3 text-accent shrink-0" aria-hidden />
              <span>Real-time transaction classification preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
