import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./toogle";
import { Menu } from "lucide-react";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-gray-800 dark:text-white text-black flex justify-center my-auto">
        <ul className="justify-around mx-2 items-center md:hidden flex flex-col mt-6 my-3">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">WhatsApp</li>
          <li className="mx-2 cursor-pointer">Pricing</li>
          <li className="mx-2 cursor-pointer">Contact</li>
          <ModeToggle />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
