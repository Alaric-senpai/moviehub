import React from 'react'
import MovieCard from '@/components/MovieCard'
import { getMovies } from '@/lib/yts'
import { Movie } from '@/types/typesyts'
const Moviegrid = async() => {

    const movies:Movie[]  = await getMovies()
    // const movies = data.movies 

    // console.log(data)
  return (
    <div className='w-full mt-3 p-3 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6'>
        {movies.map( (movie)=>(
            
            <MovieCard key={movie.id} movie={movie}  />
        ) )}
    </div>
  )
}

export default Moviegrid


  