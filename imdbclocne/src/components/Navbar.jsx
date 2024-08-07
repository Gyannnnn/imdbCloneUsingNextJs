import React from 'react'
import Navbaritems from './Navbaritems'

export default function Navbar() {
  return (
    <div className="w-full h-12 dark:bg-gray-700 bg-gray-300   flex justify-center items-center gap-10 font-bold rounded-sm">
        <Navbaritems title="Trending" param="fetchTrending" />
        <Navbaritems title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
