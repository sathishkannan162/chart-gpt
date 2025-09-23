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
- **API Layer**: tRPC v11 with TanStack React Query integration for end-to-end type-safe APIs
- **Database ORM**: Drizzle ORM with PostgreSQL (node-postgres driver) for type-safe database interactions and migrations

## tRPC Setup and Usage
tRPC provides type-safe API endpoints integrated with React Server Components (RSC) for efficient data fetching.

### Setup
- **Router**: Defined in `src/trpc/routers/_app.ts` using `initTRPC` from `src/trpc/init.ts`. Includes procedures like `hello` for testing.
- **API Handler**: Route handler at `src/app/api/trpc/[trpc]/route.ts` using the fetch adapter.
- **Client Components**: `src/trpc/client.tsx` creates the tRPC React client and `TRPCProvider` wrapped in `src/app/layout.tsx`.
- **Server Components**: `src/trpc/server.tsx` provides caller and hydration helpers for prefetching.
- **Query Client**: Factory in `src/trpc/query-client.ts` with SSR-friendly options (e.g., staleTime, dehydration).

### Usage
- **Client-Side Queries**: In client components (marked `'use client'`), use hooks like `trpc.procedure.useQuery(input)`.
- **Example**: The home page prefetches a greeting via `trpc.hello.prefetch({ text: 'world' })` and displays it in `ClientGreeting` component using `useQuery`.
- **Context**: Basic user context in `createTRPCContext`; extend for authentication if needed.

For advanced usage, refer to [tRPC React Server Components docs](https://trpc.io/docs/client/react/server-components).

## Drizzle ORM Setup and Usage
Drizzle ORM provides type-safe database queries integrated with tRPC for backend procedures.

### Setup
- **Schema**: Defined in `src/db/schema.ts` with PostgreSQL tables (e.g., `users` table).
- **Migrations**: Configured in `drizzle.config.ts`; run `pnpm db:generate` and `pnpm db:push` for schema changes.
- **Integration**: db added to tRPC context in `src/trpc/init.ts` for use in procedures.

### Usage
- **In tRPC Procedures**: Access `ctx.db` in server procedures for queries (e.g., `ctx.db.select().from(users)`).
- **Example**: A `getUsers` procedure in `src/trpc/routers/_app.ts` fetches users from the database.

## Project Structure
- **src/app/**: Next.js app router directory
  - `layout.tsx`: Root layout component (wraps with `TRPCProvider`)
  - `page.tsx`: Home page (uses tRPC prefetch and client component)
  - `globals.css`: Global styles (Tailwind)
  - `client-greeting.tsx`: Example client component using tRPC hook
  - `api/trpc/[trpc]/route.ts`: tRPC API endpoint
- **src/lib/**: Utility functions
  - `utils.ts`: Shared utilities (e.g., cn function for class merging)
- **src/trpc/**: tRPC configuration
  - `init.ts`: tRPC initialization and context
  - `routers/_app.ts`: Main router with procedures
  - `client.tsx`: Client setup and provider
  - `server.tsx`: Server caller and hydration
  - `query-client.ts`: React Query client factory
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