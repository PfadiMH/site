import { PrismaClient } from "@prisma/client";
import env from "./env";

function getPrismaClient() {
  if (env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    return global.prisma;
  }
}

const prisma = getPrismaClient();

export { Prisma } from "@prisma/client";

export default prisma;
