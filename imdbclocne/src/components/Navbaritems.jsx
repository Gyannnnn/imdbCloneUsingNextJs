"use client";
import React from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div className="dark:text-white">
      <Link
        className={`sm:text-lg ${genre === param ? 'underline underline-offset-4 decoration-blue-600 decoration-2' : ''}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
