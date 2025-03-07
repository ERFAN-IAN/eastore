import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../ui/button";
const Menu = () => {
  return (
    <nav className="pt-2">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col items-start gap-y-2">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ThemeToggle />
            <Button variant="ghost" className="p-0">
              <Link href="/" className="flex justify-between gap-x-2">
                <ShoppingCart /> <p>Cart</p>
              </Link>
            </Button>
            <Button className="p-0">
              <Link href="/" className="flex justify-between gap-x-2">
                <UserRound /> Login
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Menu;
