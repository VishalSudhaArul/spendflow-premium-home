# SpendFlow — Design Decisions

## 1. Product Direction
SpendFlow was designed as a calm, highly readable personal finance experience. Rather than overwhelming users with dense data tables or aggressive upsells, the product focuses on helping users quickly understand where their money goes, what is changing, and what deserves attention.

## 2. Visual Direction
The visual identity uses a restrained, editorial fintech aesthetic instead of a noisy rainbow color palette. The color system uses:
- `#F7F8FC` background for soft, low-glare contrast
- `#111827` primary ink for sharp typographic authority
- `#635BFF` primary violet accent for key CTAs and active states
- `#EEF2FF` soft accent for selected tab backdrops and icons
- `#16A34A` reserved strictly for positive percentage indicators

## 3. Typography
SpendFlow pairs two distinct typefaces:
- **Fraunces** for major display headings, giving the brand an editorial feel
- **Inter** for UI controls, financial numbers, transaction items, and body text to maximize readability

## 4. UX Decisions
- **Hero Value Proposition:** Clear headline and value statement above the fold.
- **Single Dominant CTA:** "Explore SpendFlow" acts as the clear primary action.
- **Early Product Visibility:** Interactive dashboard preview is presented right in the hero section.
- **Information Flow:** Structured logically from spending totals → weekly trends → category distribution → contextual insights.
- **Mobile-First Responsiveness:** Spacing and layout scale smoothly across all screen sizes.

## 5. Interaction Decisions
- Responsive sticky navbar with smooth mobile drawer navigation
- Precise anchor scrolling with header offset compensation
- Interactive "This month / Last month" period toggle
- Smooth SVG cubic bezier spending chart with hover/focus tooltips
- Micro-interactions on buttons, transaction rows, and category meters

## 6. Responsive Decisions
The interface was rigorously validated at both **390 × 844** (Mobile) and **1440 × 900** (Desktop). All horizontal scrolling was eliminated, and metric cards, charts, and showcase sheets stack naturally on mobile devices.

## 7. Data Honesty
All financial figures, charts, and transaction logs are clearly marked as illustrative demo data. The design intentionally avoids deceptive tactics such as fake testimonials, fabricated active user counters, or fake press logos.

## 8. Technical Decisions
Built using **React 18 + TypeScript + Vite + Tailwind CSS**. The architecture is structured into modular, reusable components (`SpendingChart`, `DashboardPreview`, `InsightCard`, `Button`, `Navbar`, `Footer`) and clean section wrappers.

## 9. Trade-offs
Because this challenge focused on creating a premium product homepage and frontend dashboard experience, building a real banking integration, user authentication flow, or production backend API was intentionally out of scope.

## 10. Validation
- Mobile responsiveness (390px) verified
- Desktop responsiveness (1440px) verified
- Navigation & mobile menu verified
- Period selector state switching verified
- Chart tooltips & hover states verified
- Production build completed successfully with zero type or build errors
