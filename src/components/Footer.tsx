import { CircleDollarSign } from 'lucide-react';

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Insights', href: '#insights' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a 
              href="#top" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 font-display text-lg font-semibold text-ink"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent border border-indigo-100">
                <CircleDollarSign className="h-4.5 w-4.5" strokeWidth={2.25} aria-hidden />
              </div>
              <span>SpendFlow</span>
            </a>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              Clarity for everyday spending. SpendFlow turns transaction noise into actionable financial perspective.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href.substring(1));
                    }}
                    className="text-xs sm:text-sm font-semibold text-ink-soft hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-ink-soft font-medium">
            © {new Date().getFullYear()} SpendFlow. Submission for Acdyon Technologies Challenge.
          </p>
          <p className="text-xs text-ink-soft">
            All figures shown are illustrative example data.
          </p>
        </div>
      </div>
    </footer>
  );
}
