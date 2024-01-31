"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";


const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

function Navbar() {
  const pathname = usePathname();
  const {handleCartClick}=useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 ">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Order & <span className="text-primary"> Receive</span>
          </h1>
        </Link>

        <nav className="gap-12 lg:flex 2xl:ml-16 hidden">
          {links.map((value, idx) => (
            <div key={idx}>
              {pathname === value.href ? (
                <Link
                  href={value.href}
                  className="text-lg font-semibold text-primary"
                >
                  {value.name}
                </Link>
              ) : (
                <Link
                  href={value.href}
                  className="text-lg font-semibold text-gray-600 transtion duration-100 hover:text-primary"
                >
                  {value.name}
                </Link>
              )}
            </div>
          ))}

        </nav>
        <div className="flex divide-x border-r sm:border:l">
            <Button variant={"outline"} onClick={()=> handleCartClick()} className="flex flex-col  gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none ">
                <ShoppingBag/>
                <span className="hidden sm:block text-gray-500 text-sm font-semibold">Cart</span>
            </Button>
          </div>
      </div>
    </header>
  );
}

export default Navbar;
