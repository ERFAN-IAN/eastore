import ProductList from "@/components/product/ProductList";
import { getAllProducts } from "@/lib/actions/product.actions";
export default async function Home() {
  const latestProducts = await getAllProducts();
  return (
    <div>
      <ProductList products={latestProducts} />
    </div>
  );
}
