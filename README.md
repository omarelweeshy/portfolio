# Omar Ashraf / Portfolio

An editorial portfolio built with Next.js, React, and TypeScript. Warm ivory, cobalt accents, responsive project compositions, and a CSS wireframe animation.

## Local preview

```powershell
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000. Changes reload automatically.

## Validation

```powershell
npm run lint
npm run build
```

## Editing

- `src/components/Portfolio.tsx`: page composition and selected projects.
- `src/lib/data.ts`: contact information, skills, and experience.
- `src/app/globals.css`: visual design and responsive layouts.
- `src/app/layout.tsx`: search metadata and root layout.

The older section components remain in the repository but are not rendered by the redesigned page. Project artwork is illustrative CSS, not application screenshots. Project links open the corresponding GitHub repositories. Contact links open the visitor's email client.

The page respects reduced-motion preferences and provides a motion pause control, keyboard focus styles, a skip link, and a mobile navigation menu. Fonts use the system stack and require no external requests.

Local edits do not update Vercel until they are committed and pushed through the connected deployment workflow.
