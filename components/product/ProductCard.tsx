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
import { Product } from "@/types";
const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Link href={`/product/${data.slug}`}>
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
