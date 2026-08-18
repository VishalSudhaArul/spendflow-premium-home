import { ArrowDown, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import DashboardPreview from '../components/DashboardPreview';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative scroll-mt-28 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden bg-bg"
    >
      {/* Subtle soft violet radial background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(65%_60%_at_50%_0%,rgba(99,91,255,0.07),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-16 -z-10 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 hero-rise flex flex-col justify-center">
            {/* Clean Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1 text-xs font-semibold text-ink-soft shadow-xs w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="font-semibold text-ink">SpendFlow</span>
              <span className="text-ink-soft/40">•</span>
              <span className="text-ink-soft font-normal">Personal Finance</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] font-medium text-ink tracking-tight">
              Know where your money is going.
              <br />
              <span className="text-ink-soft font-normal">Before it disappears.</span>
            </h1>

            {/* Value Proposition */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-soft max-w-xl">
              SpendFlow turns everyday spending into a clear picture of where
              your money goes, what is changing, and what deserves your
              attention.
            </p>

            {/* Honest Demo Mode Indicator */}
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Illustrative demo mode active</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Button
                onClick={() => scrollTo('product')}
                className="px-6.5 py-3.5 text-base font-semibold shadow-sm hover:shadow transition-all duration-200"
              >
                Explore SpendFlow
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <a
                href="#product"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('product');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-ink hover:bg-bg hover:border-ink/20 transition-all duration-200"
              >
                See how it works
                <ArrowDown className="h-4 w-4 text-ink-soft" aria-hidden />
              </a>
            </div>
          </div>

          {/* Right Dashboard Preview Block */}
          <div className="lg:col-span-6 dash-rise w-full">
            <div className="relative">
              {/* Subtle card glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-indigo-100/30 to-slate-200/20 blur-xl opacity-60" />
              <div className="relative">
                <DashboardPreview compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
