import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({
  data,
}: {
  data: {
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner: string | null;
  };
}) => {
  return (
    <Link href={`/products/${data.slug}`}>
      <Card>
        <CardHeader>
          <Image
            src="/images/notFound.svg"
            alt="404 picture"
            layout="intrinsic"
            width={1000}
            height={1000}
          />
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="flex flex-col gap-y-2">
          <p className=" text-xs">{data.brand}</p>
          <CardTitle>{data.name}</CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p></p>
          {data.stock > 0 ? (
            <p>{data.price}$</p>
          ) : (
            <p className=" text-red-500 text-lg">Out of stock!</p>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
