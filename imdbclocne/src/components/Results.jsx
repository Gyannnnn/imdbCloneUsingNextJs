import React from "react";
import Image from "next/image";

export default function Results({ results }) {
  return (
    <div className="w-[80vw] min-h-[100vh]  grid grid-cols-4 gap-2 pt-10 pb-3 justify-items-center ">
      {results.map((result) => (
        <div
          className="w-60 min-h-96 bg-zinc-600 rounded-md p-1"
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
            <h1>{result.title}</h1>
            <h2>{result.release_date}</h2>
            <h3>{result.overview}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
