"use client"

import React, { useState }  from 'react'
import Results from '@/components/Results';

const API_KEY = process.env.API_KEY

export default async function page({searchParams}) {
  const[page,setPage]=useState(1)
  const genre = searchParams.genre ||'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-IN&region=IN&page=${page===0?1:page}`,
    
  );
  const data = await res.json();
  if(!res.ok){
    throw new Error("Faild TO Fetch Data");
  }
  const results = data.results;
  console.log(results)
  return (
    <div className="w-full min-h-[80vh] bg-white dark:bg-black flex flex-col items-center  justify-center">
      <Results results={results}/>
      <div className="w-96 flex justify-center gap-10 pb-10">
        <button onClick={(prevPage)=>setPage(prevPage=>prevPage-1)} className="px-4 py-1 rounded-md border" >Previous</button>
        <button onClick={(prevPage)=>setPage(prevPage=>prevPage+1)} className="px-8 py-1 rounded-md bg-blue-600" >Next</button>
      </div>
    </div>
  )
}
