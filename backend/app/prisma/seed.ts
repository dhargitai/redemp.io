import { PrismaClient, Prisma } from "../deps.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL'),
    },
  },
});


const customers: Prisma.customersCreateInput[] = [
  {
      id: 1,
      email: "first@customer.hu",
  },
  {
      id: 2,
      email: "second@customer.hu",
  },
];
for (const d of customers) {
  const record = await prisma.customers.create({
    data: d,
  });
  console.log(`Created customer with id: ${record.id}`);
}

const users: Prisma.usersCreateInput[] = [
  {
    id: 1,
    name: "Admin",
    email: 'admin@host.hu',
    role: 'admin',
    password: '123123',
  },
  {
    id: 2,
    name: "Manager",
    email: 'manager@host.hu',
    role: 'manager',
    password: '123123',
    manager: { }
  },
  {
    id: 3,
    name: "Staff",
    email: 'staff@host.hu',
    role: 'staff',
    password: '123123',
    manager: {
      connect: { id: 2 }
    }
  },
];
for (const d of users) {
  const record = await prisma.users.create({
    data: d,
  });
  console.log(`Created user with id: ${record.id}`);
}

const coupons: Prisma.couponsCreateInput[] = [
  {
    id: 1,
    title: 'Free butt touch',
    description: 'Awesome coupon',
    image_url: 'https://i.imgur.com/6hOnHHM.jpeg',
    expires_at: new Date('2023-01-02 19:20:19.745693+00'),
    user: { connect: { id: 2 }},
  },
  {
    id: 2,
    title: 'Free fountain drink',
    description: 'Awesome coupon 2',
    image_url: 'https://i.imgur.com/0YiDXju.jpeg',
    expires_at: new Date('2023-01-02 19:20:19.745693+00'),
    user: { connect: { id: 2 }},
  },
  {
    id: 3,
    title: 'Save 20¢',
    description: 'Awesome coupon 3',
    image_url: 'https://i.imgur.com/dcdcULy.jpeg',
    expires_at: new Date('2023-01-02 19:20:19.745693+00'),
    user: { connect: { id: 2 }},
  },
  {
    id: 4,
    title: 'Free disappointment',
    description: 'Awesome coupon 4',
    image_url: 'https://i.imgur.com/O3qOglB.jpeg',
    expires_at: new Date('2023-01-02 19:20:19.745693+00'),
    user: { connect: { id: 2 }},
  },
]
for (const d of coupons) {
  const record = await prisma.coupons.create({
    data: d,
  });
  console.log(`Created coupon with id: ${record.id}`);
}

const couponInstances: Prisma.coupon_instancesCreateInput[] = [
  {
    id: 1,
    customer: { connect: { id: 1 } },
    coupon: { connect: { id: 1 } },
  },
  {
    id: 2,
    customer: { connect: { id: 2 } },
    coupon: { connect: { id: 1 } },
  },
  {
    id: 3,
    customer: { connect: { id: 1 } },
    coupon: { connect: { id: 2 } },
  },
  {
    id: 4,
    customer: { connect: { id: 2 } },
    coupon: { connect: { id: 2 } },
  },
  {
    id: 5,
    customer: { connect: { id: 1 } },
    coupon: { connect: { id: 3 } },
  },
  {
    id: 6,
    customer: { connect: { id: 2 } },
    coupon: { connect: { id: 3 } },
  },
  {
    id: 7,
    customer: { connect: { id: 1 } },
    coupon: { connect: { id: 4 } },
  },
]
for (const d of couponInstances) {
  const record = await prisma.coupon_instances.create({
    data: d,
  });
  console.log(`Created coupon instance with id: ${record.id}`);
}

const redemptions: Prisma.redemptionsCreateInput[] = [
  {
    id: 1,
    created_at: new Date('2023-01-01 19:20:19.745693+00'),
    currency: 'EUR',
    revenue: 34.1,
    coupon_instance: { connect: { id: 1 } },
  },
  {
    id: 2,
    created_at: new Date('2022-01-01 19:20:19.745693+00'),
    currency: 'EUR',
    revenue: 4.5,
    coupon_instance: {
      connect: { id: 3 }
    }
  },
  {
    id: 4,
    created_at: new Date('2022-06-01 19:20:19.745693+00'),
    currency: 'USD',
    revenue: 74.9,
    coupon_instance: {
      connect: { id: 5 }
    }
  },
]
for (const d of redemptions) {
  const record = await prisma.redemptions.create({
    data: d,
  });
  console.log(`Created redemption with id: ${record.id}`);
}

console.log(`Seeding finished.`);

await prisma.$disconnect();
