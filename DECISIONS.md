# SpendFlow — Design Decisions

## 1. Why this approach?

I chose to build SpendFlow as a focused personal-finance product homepage rather than a generic SaaS landing page.

The main alternative I rejected was a conventional marketing page built around multiple feature sections, testimonials, statistics, and promotional content. That approach could make the page feel like a template and would also conflict with the challenge's requirement to avoid fabricated testimonials, user counts, and logos.

Instead, I made the product itself the primary visual element. The hero introduces the value proposition and immediately leads into an interactive dashboard preview. This lets the user understand the product through the interface rather than relying on marketing claims.

I also chose React + TypeScript + Vite + Tailwind CSS because they allowed me to build, test, and refine the responsive experience quickly while keeping the UI modular.

## 2. Trade-off

Under the time limit, I prioritized the premium homepage experience and interactive product preview over building a real financial backend, authentication system, or banking integration.

The dashboard therefore uses clearly labeled illustrative demo data instead of pretending to represent real financial accounts.

With a real week, I would connect the interface to a proper data layer, add authentication and persistent user data, improve accessibility testing with screen readers and keyboard navigation, and perform broader device/browser testing.

## 3. AI tools and personal verification

I used AI tools during development to accelerate UI exploration, component refinement, responsive-layout iteration, debugging, and code review.

I did not treat generated output as automatically correct. I personally ran the application, checked the interactions, reviewed the component structure, tested the responsive layout at 390px and 1440px, verified the period selector and chart interactions, and ran the production build.

I also reviewed and refined the generated design decisions, particularly the color palette, typography, spacing, dashboard hierarchy, responsive behavior, and the use of illustrative-data disclaimers.

The final implementation was verified with a successful production build and manual UI/interaction testing.

## 4. Design Direction

SpendFlow uses a calm editorial-fintech visual language rather than a typical high-saturation SaaS aesthetic.

- Background: `#F7F8FC`
- Primary text: `#111827`
- Secondary text: `#667085`
- Primary accent: `#635BFF`
- Deep accent: `#4338CA`
- Soft accent: `#EEF2FF`
- Borders: `#E5E7EB`
- Success state: `#16A34A`

Fraunces is used for major display headings while Inter is used for UI, numbers, controls, and supporting text.

## 5. Key UX Decisions

- Clear value proposition above the fold
- One dominant primary CTA
- Product preview introduced early
- Interactive period comparison
- Spending trend visualization with useful tooltips
- Responsive mobile navigation
- Restrained motion and hover interactions
- Explicit illustrative-data disclaimer
- No fabricated testimonials, user counts, or logos

## 6. Validation

The final page was checked at:

- 390 × 844 mobile
- 1440 × 900 desktop

I verified navigation, mobile menu behavior, period switching, chart interactions, responsive layout, horizontal-overflow behavior, and the production build.

Production build completed successfully with zero build errors.
