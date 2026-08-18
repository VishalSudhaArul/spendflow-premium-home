import { LineChart, Activity, CalendarClock } from 'lucide-react';
import Reveal from '../components/Reveal';
import FeatureCard from '../components/FeatureCard';

const CARDS = [
  {
    index: '01',
    title: 'Track spending',
    body: 'See where your money goes across the categories that matter.',
    icon: <LineChart className="h-5 w-5" aria-hidden />,
  },
  {
    index: '02',
    title: 'Understand trends',
    body: 'Spot changes before they become habits.',
    icon: <Activity className="h-5 w-5" aria-hidden />,
  },
  {
    index: '03',
    title: 'Plan with confidence',
    body: 'Turn your spending history into a clearer monthly plan.',
    icon: <CalendarClock className="h-5 w-5" aria-hidden />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-accent-deep font-medium">
            See your money clearly
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink tracking-tight">
            Your money, at a glance.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            Instead of digging through transactions, SpendFlow gives you a
            clear view of the habits shaping your month.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.index} delay={i * 100}>
              <FeatureCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
