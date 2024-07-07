import React from "react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import Link from "next/link";
export default function Results({ results }) {
  return (
    <div className="w-[80vw] min-h-[100vh]  grid grid-cols-4 gap-6 pt-10 pb-3 justify-items-center max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 ">
      {results.map((result) => (
        <Link href={`/movie/${result.id}`}>
          <div
            className="w-60 min-h-96 bg-zinc-600 rounded-md border-2 border-blue-600 max-sm:w-[90vw]"
            key={result.id}
          >
            <Image
              className="rounded-md"
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>
              <h1 className="text-white font-bold text-center text-md">
                {result.original_title || result.name}
              </h1>
              <h3 className="text-center text-sm font-light">
                {result.overview.slice(0, 30) + "..."}
              </h3>
              <div className="w-60 flex justify-between px-4">
                <h2 className="text-gray-400 text-sm">{result.release_date}</h2>
                <div className="flex gap-2">
                  <AiOutlineLike className="text-2xl" />
                  <span>{result.vote_count}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
