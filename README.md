# AmaLS367 Portfolio

Personal developer portfolio for AmaLS367. The site presents selected backend,
automation, desktop tooling, document generation, data, and self-hosted platform
projects in a terminal-inspired interface.

## Overview

This is a Vite + React single-page application with a dark developer-focused
visual system. The homepage includes:

- Hero section with a concise developer profile.
- Featured project cards with detailed modal views.
- Technology stack grouped by engineering area.
- Contact links for GitHub, GitLab, email, and Telegram.
- Catch-all 404 route for unknown paths.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives
- lucide-react icons
- Vitest
- ESLint

## Getting Started

Install dependencies:

```bash
npm ci
```

Run the local development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

## Project Structure

```text
src/
  App.tsx              # App providers and routes
  main.tsx             # React entry point
  pages/
    Index.tsx          # Portfolio homepage
    NotFound.tsx       # 404 page
  components/
    ui/                # shadcn/ui component set
  hooks/               # Shared React hooks
  lib/                 # Shared utilities
  test/                # Vitest setup and sample test
public/                # Static assets
```

## Deployment

The app builds to a static `dist/` directory and can be deployed on any static
hosting provider, including GitHub Pages, Vercel, Netlify, Cloudflare Pages, or a
custom Nginx setup.

For GitHub Pages, build with:

```bash
npm run build
```

Then publish the generated `dist/` output using the repository's configured
Pages workflow or hosting settings.
