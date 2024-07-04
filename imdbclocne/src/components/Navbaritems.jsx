import React from "react";
import Link from "next/link";

export default function Navbaritems({ title, param }) {
  return (
    <div className="text-white ">
      <Link className=" hover:underline sm:text-lg" href={`/?genere=${param}`}>{title}</Link>
    </div>
  );
}
