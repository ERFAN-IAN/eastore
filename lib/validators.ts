import { z } from "zod";

export const inputProuctSchema = z.object({
  name: z.string().min(3, "Name must have at least three chars"),
  slug: z.string().min(3, "Slug must have at least three chars"),
  images: z.array(z.string()).min(1, "at least one image is needed"),
  brand: z.string().min(3, "brand must have at least three chars"),
  category: z.string().min(3, "Category must have at least three chars"),
  description: z.string().min(3, "description must have at least three chars"),
  stock: z.number().min(0),
  price: z.coerce.number(),
  isPublished: z.boolean(),
  isFeatured: z.boolean(),
});
