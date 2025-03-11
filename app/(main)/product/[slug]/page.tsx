import { getProductBySlug } from "@/lib/actions/product.actions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProductImage from "@/components/product/ProductImage";
const product = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-5 pt-4">
        <div className=" md:col-span-2">
          <ProductImage images={product.images} />
        </div>
        <div className="md:col-span-2 flex flex-col gap-y-8">
          <p>{`${product?.brand} ${product?.category}`}</p>
          <h1 className=" font-semibold text-xl">{product?.name}</h1>
          <p>{`${product?.numReviews} reviews`}</p>
          <p className="p-2 bg-orange-500 max-w-20 rounded-md text-center">
            {product?.price}$
          </p>
          <div className="flex flex-col gap-y-2">
            <p className=" font-semibold">Description</p>
            <p>{product?.description}</p>
          </div>
        </div>
        <Card className="p-4 h-fit">
          <CardContent className="p-0">
            <div className="flex justify-between ">
              <p className="">Price</p>
              <p>{product?.price}</p>
            </div>

            <div className="flex justify-between mt-2">
              <p className="">status</p>
              {product?.stock > 0 ? (
                <Badge className=" rounded-full">In stock</Badge>
              ) : (
                <Badge className=" rounded-full bg-red-500">Out Of Stock</Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {product.stock > 0 ? (
              <Button className="w-full mt-4">
                <Plus />
                Add to cart
              </Button>
            ) : (
              <></>
            )}
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default product;
