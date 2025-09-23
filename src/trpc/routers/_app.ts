import { z } from "zod";
import { user } from "../../db/schema";
import { baseProcedure, createTRPCRouter } from "../init";
import { authRouter } from "./auth";

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

  getUsers: baseProcedure.query(async ({ ctx }) => {
    const users = ctx.db.select().from(user);
    console.log("users");
    return users;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
