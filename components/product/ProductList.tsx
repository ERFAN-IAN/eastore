import ProductCard from "./ProductCard";
import { Product } from "@/types";
const ProductList = ({ products }: { products: Product[] }) => {
  if (!products) {
    return <p>No products</p>;
  }
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products.map((product) => {
        return <ProductCard data={product} key={product.slug} />;
      })}
    </section>
  );
};

export default ProductList;

// : {
//   products: {
//     name: string;
//     slug: string;
//     category: string;
//     description: string;
//     images: string[];
//     price: Prisma.Decimal;
//     brand: string;
//     rating: number;
//     numReviews: number;
//     stock: number;
//     isPublished: boolean;
//     isFeatured: boolean;
//   }[];
