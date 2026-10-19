# Omar Ashraf / Portfolio

Live: https://omarelweeshy.vercel.app

A single-page, motion-led portfolio built with Next.js 16, React 19, GSAP (ScrollTrigger, SplitText) and Lenis.

## What is on the page

- Preloader with counter and curtain reveal, then a split-character hero intro.
- WebGL hero: a domain-warped noise field drawn as contour lines that glow around the pointer (raw WebGL, no 3D library). It pauses offscreen and falls back to a CSS gradient without WebGL.
- Scroll-scrubbed intro statement, a pinned horizontal project gallery on desktop (vertical on mobile), a velocity-reactive marquee, a page-wide light theme for the services section, and a footer revealed from under the page.
- Custom cursor with contextual labels, magnetic buttons and text-roll hovers on fine pointers only.

## Accessibility and performance

- `prefers-reduced-motion` disables the preloader, smooth scrolling, pinning and scrubbed animations, and renders the shader as a still frame.
- Skip link, visible focus styles, keyboard-reachable service rows and an Escape-closable mobile menu.
- Fonts are self-hosted through `next/font`. The page is statically prerendered.

## Local preview

```powershell
npm ci
npm run dev
```

Open http://localhost:3000.

## Validation

```powershell
npm run lint
npm run build
```

## Editing

- `src/lib/content.ts`: all copy, projects, services, experience and links.
- `public/work/`: project screenshots (captured from the live public demos).
- `src/app/globals.css`: design tokens and layout.
- `src/components/`: one file per section; shared GSAP setup in `src/lib/motion.ts`.

Project cards for Donation Forecast and the dermatology research are labelled illustrations, not screenshots. Live demo links go to the projects' public Vercel demos, which use fictional or recorded data.

## Deployment

Vercel deploys automatically from `main` on GitHub.
