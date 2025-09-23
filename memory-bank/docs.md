# Chart-GPT Project Overview

Chart-GPT is a Next.js application designed for generating or visualizing charts using AI (GPT) integration. This is an early-stage project (version 0.1.0) built with modern web technologies for a responsive, performant frontend.

## Tech Stack
- **Framework**: Next.js 15.5.3 (with Turbopack for faster development)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4 (with clsx, class-variance-authority, and tailwind-merge for utility-first styling)
- **Icons**: Lucide React
- **TypeScript**: For type safety
- **Linting/Formatting**: Biome 2.2.0
- **Animations**: tw-animate-css

## Project Structure
- **src/app/**: Next.js app router directory
  - `layout.tsx`: Root layout component
  - `page.tsx`: Home page
  - `globals.css`: Global styles (Tailwind)
- **src/lib/**: Utility functions
  - `utils.ts`: Shared utilities (e.g., cn function for class merging)
- **public/**: Static assets
  - SVGs for icons (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
- **memory-bank/**: Documentation and notes
  - `docs.md`: This file
- Root files: `package.json`, `next.config.ts`, `tsconfig.json`, `biome.json`, etc.

## Getting Started
1. Install dependencies: `pnpm install`
2. Run development server: `pnpm dev`
3. Build for production: `pnpm build`
4. Lint code: `pnpm lint`
5. Format code: `pnpm format`

For more details, refer to the [Next.js documentation](https://nextjs.org/docs).