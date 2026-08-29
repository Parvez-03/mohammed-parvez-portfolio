# Mohammed Parvez — Full Portfolio

A unified portfolio website assembled from the supplied project ZIPs.

## Included pages

- `/` — Home
- `/about` — About, skills, experience and toolkit
- `/projects` — Projects showcase
- `/services` — Services
- `/contact` — Contact

## Navigation

A single shared responsive navbar is rendered from the root layout, so it stays consistent across every page.

## Footer

A shared responsive footer is also rendered from the root layout and appears on every page.

## Main technologies

- React
- TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

If PowerShell blocks `npm.ps1` on Windows, use:

```powershell
npm.cmd install
npm.cmd run dev
```

The website is structured so the main reusable portfolio sections live in `src/components/portfolio/`, while each page has its own file in `src/routes/`.
