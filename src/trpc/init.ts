import { cache } from 'react';
import { initTRPC } from '@trpc/server';
import { auth } from '../lib/auth';
import { db } from '../lib/db';

export const createTRPCContext = cache(async ({ req }: { req: Request }) => {
  const session = await auth.api.getSession({
    headers: new Headers(req.headers),
  });
  
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return {
    session,
    user: session?.user,
    db
  };
});

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.

const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

// Create protected procedure helper
export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new Error('Unauthorized');
  }
  return next({ ctx });
});