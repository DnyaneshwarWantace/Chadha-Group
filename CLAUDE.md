# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build (output: dist/)
npm run build:dev  # Development mode build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

No test framework is configured in this project.

## Architecture

**React 18 + TypeScript + Vite SPA** for Chadha Group, an industrial manufacturing conglomerate with 5 subsidiary companies.

### Routing Structure

Each of the 5 companies has 3 pages:
- `/[company-slug]` — Company overview
- `/[company-slug]/products` — Product gallery
- `/[company-slug]/equipment` — Equipment gallery

Companies: `laxmi-metal-works`, `shri-balaji-industries`, `ess-ess-industries`, `aft-automotive`, `mrk-impex`

Plus `/`, `/about`, `/contact`, and `/*` (404).

### Key Patterns

- **`@` path alias** maps to `./src/` — use `@/components/...` for imports
- **`cn()` utility** at `@/lib/utils.ts` — use for merging Tailwind classes (combines clsx + tailwind-merge)
- **UI components** live in `src/components/ui/` — these are shadcn/ui components built on Radix UI primitives; prefer extending these over creating new component libraries
- **`useIsMobile()`** hook at `@/hooks/use-mobile.tsx` — mobile breakpoint is 768px

### Providers (App.tsx)

App wraps everything in: `QueryClientProvider` → `TooltipProvider` → `BrowserRouter` → `Toaster` + `Sonner` + `ScrollIndicator` + `ScrollToTop`.

### Styling

Tailwind CSS with CSS custom properties (HSL variables) for theming. Dark mode via `.dark` class (next-themes). Custom animations: `accordion-down`, `accordion-up`, `fade-in`, `scale-in` defined in `tailwind.config.ts`.

### Static Assets

Images and videos are in `public/` and referenced with root-relative paths (e.g., `/images/mrk/...`).
