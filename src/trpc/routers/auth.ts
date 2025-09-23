import { z } from "zod";
import { auth } from "../../lib/auth";
import { baseProcedure, createTRPCRouter } from "../init";

const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new Error("Unauthorized");
  }
  return next();
});

export const authRouter = createTRPCRouter({
  getSession: baseProcedure.query(async ({ ctx }) => {
    return ctx.session;
  }),

  signIn: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const result = await auth.api.signInEmail({
        body: input,
        headers: {},
      });
      return result;
    }),

  signUp: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(1),
        name: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const result = await auth.api.signUpEmail({
        body: input,
        headers: {},
      });
      return result;
    }),

  signOut: baseProcedure.mutation(async ({ ctx }) => {
    const result = await auth.api.signOut({
      headers: {},
    });
    return result;
  }),

  me: protectedProcedure.query(async ({ ctx }) => {
    return ctx.user;
  }),
});
