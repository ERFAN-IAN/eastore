import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="h-[100vh] -mt-12 w-full flex items-center justify-center">
      <div className="flex flex-col justify-center gap-y-4">
        <div className="max-w-[40rem]">
          <Image
            src="/images/notFound.svg"
            alt="404 picture"
            layout="intrinsic"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" w-20  mx-auto">
          <Button>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
