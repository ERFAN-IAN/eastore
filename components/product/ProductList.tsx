import ProductCard from "./ProductCard";
import testData from "@/testData";
const ProductList = () => {
  if (!testData) {
    return <p>No products</p>;
  }
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {testData.products.map((data) => {
        return <ProductCard data={data} key={data.slug} />;
      })}
    </section>
  );
};

export default ProductList;
