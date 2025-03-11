import z from "zod";
import { inputProuctSchema } from "@/lib/validators";

export type Product = z.infer<typeof inputProuctSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
