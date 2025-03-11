"use server";
import { prisma } from "../../prisma/prisma";
import { toObject } from "../utils";
export const getAllProducts = async () => {
  const products = await prisma.product.findMany({ take: 4 });
  return toObject(products);
};

export const getProductBySlug = async (slug: string) => {
  return prisma.product.findFirst({
    where: { slug: slug },
  });
};
