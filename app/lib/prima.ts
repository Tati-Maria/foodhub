import {PrismaClient} from "@prisma/client";

// Prevent multiple instances of Prisma Client in development
// https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-instantiation/#prevent-multiple-instances-of-prismaclient-in-development
// we use globalThis to make sure we're not using window in a Node.js environment

declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();


if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;