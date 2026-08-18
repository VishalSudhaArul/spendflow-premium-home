import { ArrowRight, CircleDollarSign } from 'lucide-react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 sm:px-12 sm:py-20 text-center shadow-[0_20px_50px_-12px_rgba(17,24,39,0.05)]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(99,91,255,0.08),transparent)]"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent border border-indigo-100 mb-6 shadow-xs">
              <CircleDollarSign className="h-6 w-6" strokeWidth={2.25} />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-ink tracking-tight max-w-2xl mx-auto leading-tight">
              Make every rupee easier to understand.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
              Spend less time wondering where your money went — and more time
              deciding what comes next.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => {
                  const el = document.getElementById('product');
                  if (el) {
                    const yOffset = -80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-7 py-3.5 text-base font-semibold shadow-sm hover:shadow transition-all duration-200"
              >
                Explore SpendFlow
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
