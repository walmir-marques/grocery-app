"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getCategory } from "../_utils/GlobalApi";

function Header() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = () => {
    getCategory().then((response) => {
      setCategoryList(response.data);
    });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="flex justify-between p-5 shadow-md">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="grocery logo" width={150} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="w-5 h-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
            {categoryList.map((category) => (
              <DropdownMenuItem
                key={category.id}
                className="flex gap-4 items-center cursor-pointer"
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category.attributes?.icon?.data[0]?.attributes?.url
                  }
                  alt="icon"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
                <h2 className="text-lg">{category.attributes?.name}</h2>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2  text-lg">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
