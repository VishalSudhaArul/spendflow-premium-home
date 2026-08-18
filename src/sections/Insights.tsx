import { Sparkles, Info } from 'lucide-react';
import Reveal from '../components/Reveal';
import InsightCard from '../components/InsightCard';

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 py-20 sm:py-28 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <p className="text-xs uppercase tracking-wider text-accent-deep font-semibold">
              Insights
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink tracking-tight">
              The product notices what you might miss.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
              SpendFlow surfaces changes in your spending so you can decide
              what deserves attention — instead of discovering them at the end
              of the month.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft text-accent border border-indigo-100 shrink-0">
                <Sparkles className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink uppercase tracking-wider">Automated Context</p>
                <p className="mt-1 text-sm text-ink-soft">
                  <span className="text-ink font-semibold">Example insight:</span>{' '}
                  Your food spending is trending higher (+18% vs last month).
                </p>
              </div>
            </div>

            {/* MANDATORY HONESTY DISCLAIMER */}
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
              <Info className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden />
              <span>Illustrative demo data — not a real user report.</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 w-full">
            <InsightCard
              label="Food"
              amount={8420}
              delta="+18%"
              comparison={{ current: 8420, previous: 7140 }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
