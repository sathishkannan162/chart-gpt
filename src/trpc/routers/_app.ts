import { baseProcedure, createTRPCRouter } from '../init';

import { z } from 'zod';
import { users } from '../../db/schema';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  getUsers: baseProcedure
    .query(async ({ ctx }) => {
      return await ctx.db.select().from(users);
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;