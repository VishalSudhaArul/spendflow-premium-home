import Reveal from '../components/Reveal';
import DashboardPreview from '../components/DashboardPreview';
import { MousePointerClick } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section id="product" className="scroll-mt-24 py-20 sm:py-28 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-accent-deep font-semibold">
            The product
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink tracking-tight">
            A dashboard you can actually read at a glance.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            This is what SpendFlow looks like in practice. Every figure below is
            illustrative demo data — the layout, hierarchy, and micro-interactions
            are the real thing.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 sm:mt-12">
          <DashboardPreview />
        </Reveal>

        <Reveal delay={200} className="mt-5 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink-soft shadow-xs">
            <MousePointerClick className="h-3.5 w-3.5 text-accent animate-bounce" aria-hidden />
            <span>Try switching the <strong>This month / Last month</strong> period selector above</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
