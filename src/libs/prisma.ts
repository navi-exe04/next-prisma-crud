import { PrismaClient } from "@prisma/client";

// Con esto podemos hacer uso de prisma en nuestra api
export const prisma = new PrismaClient();