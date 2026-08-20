# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install deps (bun.lockb also present; npm is what vercel.json uses)
npm run dev          # dev server on http://localhost:8080 (NOT Vite's default 5173)
npm run build        # production build to dist/
npm run build:dev    # build with development mode (keeps lovable-tagger plugin)
npm run preview      # serve the production build
npm run lint         # eslint over the repo
```

There is no test setup and no typecheck script. `tsc` runs only as part of the Vite build; `tsconfig.app.json` has `strict: false`, `noImplicitAny: false`, and unused-var checks off, so type errors are rarely surfaced.

## Architecture

Single-page portfolio site: Vite + React 18 + TypeScript, Tailwind + shadcn/ui, deployed on Vercel (`vercel.json`).

- `src/main.tsx` → `src/App.tsx` (QueryClientProvider + TooltipProvider + both toasters + BrowserRouter) → routes are only `/` (`src/pages/Index.tsx`) and `*` (`NotFound`).
- `src/pages/Index.tsx` is the whole site: it stacks the section components in fixed order (Hero, About, WorkExperience, Projects, Skills, Education, BeyondTheCode, Contact, Footer) with Navigation and ScrollToTop overlaid.
- Navigation is not routing — each section renders `<section id="...">` (`hero`, `about`, `work-experience`, `projects`, `skills`, `education`, `beyond-the-code`, `contact`) and `Navigation.tsx` scrolls to them via `document.getElementById`. Adding a section means: create the component, add it to `Index.tsx`, give it a matching `id`, and add an entry to `navItems` in `Navigation.tsx`.
- Content lives inline in the components as local `const` arrays of objects (e.g. the `projects` array at the top of `src/components/Projects.tsx`, with `title`/`description`/`fullDescription`/`tags`/`technologies`/`features`/`github`/`demo`/`image`). To change portfolio content, edit those arrays — there is no CMS and no data layer. `@tanstack/react-query` is wired up but nothing fetches.
- `JasleenData.json` (Q&A pairs about Jasleen) is **not imported anywhere**. The README's claim that it drives site content is wrong.
- Project demo screenshots are imported as modules from `src/assets/demo-*.png`; resume/PDFs are served from `public/`.

## Styling system

`src/index.css` (~530 lines) is the design system and is where most visual decisions live — read it before adding styles.

- All colors are HSL CSS variables under `@layer base :root`, mapped into Tailwind tokens in `tailwind.config.ts`. Use the semantic Tailwind classes (`bg-card`, `text-muted-foreground`, `border-border`) rather than raw colors.
- Each section has its own background token/utility for visual separation: `--section-hero` … `--section-contact` exposed as `.bg-section-hero`, `.bg-section-about`, etc. A new section should get a matching variable + utility class.
- Custom component/utility classes defined in `index.css`: `.card-glow`, `.btn-gradient`, `.btn-secondary`, `.skill-badge`, `.text-gradient`, `.bg-gradient-primary|secondary|accent|hero`, `.glow-soft`, `.glow-strong`, plus gradient vars `--gradient-primary`/`--gradient-hero`/`--gradient-extra` and shadow vars `--shadow-soft`/`--shadow-glow`/`--shadow-card`.
- Fonts: `font-sans` = Inter, `font-display` = Poppins, both loaded via Google Fonts in `index.html`.
- A `.dark` variable block exists and `darkMode: ["class"]` is set, but nothing ever adds the `dark` class — there is no working theme toggle despite the README saying otherwise.

## Scroll animations

`src/hooks/useScrollAnimation.ts` wraps IntersectionObserver and returns `{ elementRef, isVisible }`. The established pattern is one hook call per animated block, applied as a conditional class:

```tsx
const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
<div ref={sectionRef} className={`scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
```

The animation classes (`scroll-fade-in`, `scroll-slide-up`, `scroll-scale-in`, `scroll-slide-left/right`, `scroll-stagger`, `card-animate`, `timeline-animate`, `skill-animate`) each define a base state plus an `.animate` state in `index.css`. Note `triggerOnce` defaults to `false`, so animations replay on scroll out/in. `framer-motion` is mentioned in the README but is not a dependency.

## Conventions

- Import with the `@/` alias (→ `src/`), configured in both `vite.config.ts` and `tsconfig.app.json`.
- shadcn/ui components live in `src/components/ui/` and are generated (`components.json`, style `default`, base color slate, CSS variables on). Prefer `npx shadcn@latest add <component>` over hand-writing them, and avoid editing existing ones unless intentional.
- Icons come from `lucide-react`.
- Toasts: `useToast()` from `@/hooks/use-toast` (the Radix toaster); `sonner` is also mounted.
- `lovable-tagger` runs as a Vite plugin in development mode only — this project originated from Lovable.

## Contact form

`src/components/Contact.tsx` sends mail client-side via `@emailjs/browser`. The EmailJS public key, service ID, and template ID are hardcoded in the component (public key is intended to be public; the recipient address is hardcoded in `templateParams`). There are no environment variables in this project — no `.env` and no `import.meta.env` usage.
