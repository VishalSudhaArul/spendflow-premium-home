import { useEffect, useState } from 'react';
import { Menu, X, CircleDollarSign, ArrowUpRight } from 'lucide-react';
import Button from './Button';

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Insights', href: '#insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary navigation"
          className={`mt-2 sm:mt-3 flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
            scrolled
              ? 'bg-surface/90 backdrop-blur-md border border-line shadow-[0_2px_16px_rgba(17,24,39,0.06)] py-2 sm:py-2.5'
              : 'bg-transparent border border-transparent py-3'
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 font-display text-lg font-semibold text-ink group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label="SpendFlow home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-105">
              <CircleDollarSign className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            </div>
            <span className="tracking-tight text-ink font-semibold">SpendFlow</span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-sans font-bold bg-accent-soft text-accent-deep px-2 py-0.5 rounded border border-indigo-100">
              Demo
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 bg-bg/80 p-1 rounded-xl border border-line">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href.substring(1));
                  }}
                  className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-ink-soft hover:text-ink hover:bg-surface transition-all duration-150"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('product')}
              className="py-2 px-4 text-xs font-semibold shadow-xs hover:shadow transition-all"
            >
              Open Dashboard
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface/80 text-ink hover:bg-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Nav */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-line bg-surface/95 backdrop-blur-lg shadow-[0_8px_32px_rgba(17,24,39,0.08)] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href.substring(1));
                  }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft hover:text-ink hover:bg-bg transition-colors"
                >
                  <span>{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft/40" />
                </a>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t border-line">
              <Button
                className="w-full py-2.5 text-xs font-semibold"
                onClick={() => scrollTo('product')}
              >
                Open Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
