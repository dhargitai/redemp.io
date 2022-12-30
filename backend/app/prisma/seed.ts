import { Prisma, PrismaClient } from "../deps.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL'),
    },
  },
});

const usersData: Prisma.usersCreateInput[] = [
  {
    name: "Admin",
    email: 'admin@host.hu',
    role: 'admin',
    password: '123123',
  },
  {
    name: "Manager",
    email: 'manager@host.hu',
    role: 'manager',
    password: '123123',
  },
  {
    name: "Staff",
    email: 'staff@host.hu',
    role: 'staff',
    password: '123123',
  },
];

/**
 * Seed the database.
 */

for (const u of usersData) {
  const user = await prisma.users.create({
    data: u,
  });
  console.log(`Created user with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
