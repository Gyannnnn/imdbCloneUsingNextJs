import React from "react";
import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <div className="text-white">
      <Link href={address} className="flex hover:text-blue-600">
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:block" >{title}</p>
      </Link>
    </div>
  );
}
