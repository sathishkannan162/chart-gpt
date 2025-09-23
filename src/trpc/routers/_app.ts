import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { authRouter } from "./auth";

import { z } from "zod";
import { user } from "../../db/schema";

export const appRouter = createTRPCRouter({
  auth: authRouter,

  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

  getUsers: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(user);
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
