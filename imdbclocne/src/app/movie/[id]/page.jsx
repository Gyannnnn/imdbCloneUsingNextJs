import React from "react";
import Image from "next/image";

export default async function moviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-full h-[40vh] flex px-32 gap-3 max-lg:flex-col max-md:px-4">
        <Image
          src={`https://image.tmdb.org/t/p/${movie.poster_path || movie.backdrop_path}`}
          width={500}
          height={300}
   
          
        />
        <div className="md:w-full">
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
