import { Table2, BarChart3, Lightbulb, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CURRENCY } from '../data';

function VisualSheet({
  children,
  label,
  badge,
}: {
  children: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <div className="relative rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-[0_12px_32px_rgba(17,24,39,0.05)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
          {label}
        </p>
        {badge && (
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent-soft text-accent-deep px-2.5 py-0.5 rounded-full border border-indigo-100">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

const ITEMS = [
  {
    title: 'Everything important, without the spreadsheet.',
    body: 'Spending, budget, and categories live in one calm view — no manual tracking, no scattered tabs.',
    icon: <Table2 className="h-5 w-5" aria-hidden />,
    visual: (
      <VisualSheet label="Unified Overview" badge="Calm Interface">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {[
            { name: 'Food', amount: 8420, pct: 20, color: 'bg-accent' },
            { name: 'Transport', amount: 5240, pct: 12, color: 'bg-slate-900' },
            { name: 'Bills', amount: 14420, pct: 34, color: 'bg-slate-400' },
          ].map((c) => (
            <div key={c.name} className="rounded-xl bg-bg p-3 border border-line transition-all hover:border-slate-300">
              <div className="flex items-center justify-between">
                <span className={`h-2 w-2 rounded-full ${c.color}`} />
                <span className="text-[10px] text-ink-soft font-mono">{c.pct}%</span>
              </div>
              <p className="mt-2 text-xs font-medium text-ink-soft">{c.name}</p>
              <p className="mt-0.5 text-sm font-semibold text-ink tabular-nums">
                {CURRENCY(c.amount)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs text-ink-soft">
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Automatic grouping
          </span>
          <span className="tabular-nums font-semibold text-ink">Total ₹42,680</span>
        </div>
      </VisualSheet>
    ),
  },
  {
    title: 'Understand the pattern, not just the transaction.',
    body: 'Weekly trends put each purchase in context, so a one-off looks different from a habit shift.',
    icon: <BarChart3 className="h-5 w-5" aria-hidden />,
    visual: (
      <VisualSheet label="Weekly trend visualization" badge="Pattern Analysis">
        {/* Polished Mini Spending Chart Visualization */}
        <div className="relative rounded-xl bg-bg p-4 border border-line overflow-hidden">
          {/* Highlight pill */}
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="text-ink-soft font-medium">7-Week Trend Curve</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-indigo-50 text-indigo-900 border border-indigo-100 px-2.5 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 text-accent" />
              Peak: W6 (₹8,520)
            </span>
          </div>

          {/* SVG line and bar visualization */}
          <div className="relative h-28 flex items-end justify-between gap-1.5">
            {/* SVG Trend curve line overlay */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path
                d="M 7 62 C 18 48, 25 59, 36 37 C 47 52, 55 37, 65 52 C 75 29, 85 42, 93 42"
                fill="none"
                stroke="#635BFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Weekly bars */}
            {[
              { label: 'W1', height: 38, amount: '₹4.5k' },
              { label: 'W2', height: 52, amount: '₹6.2k' },
              { label: 'W3', height: 41, amount: '₹4.9k' },
              { label: 'W4', height: 63, amount: '₹7.5k' },
              { label: 'W5', height: 48, amount: '₹5.7k' },
              { label: 'W6', height: 71, amount: '₹8.5k', isPeak: true },
              { label: 'W7', height: 58, amount: '₹6.9k' },
            ].map((bar, i) => (
              <div key={i} className="group flex-1 flex flex-col items-center justify-end h-full relative z-10">
                <div 
                  className={`w-full max-w-[20px] rounded-t-md transition-all duration-300 ${
                    bar.isPeak 
                      ? 'bg-accent shadow-[0_0_10px_rgba(99,91,255,0.4)]' 
                      : 'bg-slate-800 group-hover:bg-slate-900'
                  }`}
                  style={{ height: `${bar.height}%` }}
                />
                <span className="mt-1 text-[10px] font-semibold text-ink-soft tabular-nums">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </VisualSheet>
    ),
  },
  {
    title: 'Make decisions with context.',
    body: 'Insights explain what changed and by how much — so you can respond intentionally instead of guessing.',
    icon: <Lightbulb className="h-5 w-5" aria-hidden />,
    visual: (
      <VisualSheet label="Automated Insight Engine" badge="Contextual Alert">
        <div className="rounded-xl bg-accent-soft border border-indigo-100 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-deep">
                <TrendingUp className="h-3.5 w-3.5 text-accent" />
                Food spending up +18%
              </div>
              <p className="mt-1 text-xs text-ink-soft">
                ₹1,280 more than the previous period (₹8,420 vs ₹7,140).
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-accent shrink-0" />
          </div>

          <div className="mt-4 space-y-2">
            <div>
              <div className="flex justify-between text-[10px] text-ink-soft font-medium mb-1">
                <span>Previous Period</span>
                <span>₹7,140</span>
              </div>
              <div className="h-1.5 rounded-full bg-line overflow-hidden">
                <div className="h-full w-[70%] rounded-full bg-slate-400" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-semibold text-ink mb-1">
                <span>Current Period (Trending High)</span>
                <span className="text-accent font-semibold">₹8,420</span>
              </div>
              <div className="h-1.5 rounded-full bg-line overflow-hidden">
                <div className="h-full w-[88%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </VisualSheet>
    ),
  },
];

export default function Showcase() {
  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-28 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-accent-deep font-semibold">
            In practice
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink tracking-tight">
            Built around how you actually spend.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            SpendFlow replaces guess-work with clear visual feedback designed to fit your natural financial routine.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 space-y-16 sm:space-y-24">
          {ITEMS.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={item.title}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep border border-indigo-100 shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 font-display text-2xl sm:text-3xl font-medium text-ink tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft max-w-md">
                      {item.body}
                    </p>
                  </div>
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>{item.visual}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
