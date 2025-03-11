import { PrismaClient } from "@prisma/client";
import testData from "./testData";
const seed = async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.product.createMany({ data: testData.products });
    console.log("seed succesful");
  } catch (error) {
    console.log(error);
  }
};

seed();
