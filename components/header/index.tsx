import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { APP_NAME } from "@/lib/constants";
import { Button } from "../ui/button";
import { ShoppingCart, UserRound } from "lucide-react";

import Menu from "./Menu";
const Header = () => {
  return (
    <header className="flex justify-between border-b max-w-7xl lg:mx-auto py-5 px-4 w-full">
      <div className="flex gap-x-4 items-center">
        <Menu />
        <Link href="/" className=" font-bold text-xl">
          {APP_NAME}
        </Link>
      </div>

      <div className="flex gap-x-2">
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <Button variant="ghost">
          <Link href="/">
            <ShoppingCart />
          </Link>
        </Button>
        <div className="hidden md:block">
          <Button>
            <Link href="/">
              <UserRound />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
