import { PrismaClient } from "../deps.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL'),
    },
  },
});

export const resolvers = {
    Query: {
        hello: async (
            _root: undefined,
            _args: unknown,
            ctx: { request: Request }
        ) => {
            const numberOfUsers = await prisma.users.count();
            return `Hello World! from ${ctx.request.url}. There are ${numberOfUsers} users in the database.`;
        },
    },
};
