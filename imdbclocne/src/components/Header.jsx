import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex w-full justify-around items-center py-6">
      <div className="flex gap-4">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center">
        <Link href="/">
          <span className="sm:hidden border-2  border-blue-600 px-4 py-1 rounded-md hover:bg-blue-600 font-extrabold">
            IMXD
          </span>
          <div className="hidden sm:block">
            <span className="mr-2 border-2  border-blue-600 px-4 py-1 rounded-md hover:bg-blue-600 font-extrabold">
              IMXD
            </span>
            <span className="font-bold">MovieApp</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
