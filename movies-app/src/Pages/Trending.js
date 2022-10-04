import React from 'react'
import { useFetchTrending } from '../Hooks/useFetchTrending';
import { MovieCard } from '../Components/MovieCard';

export const Trending = () => {
  const {movies} = useFetchTrending()
  console.log('movies',movies);
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      {movies.map((movie)=> 
        <MovieCard
        key={movie.id}
        {...movie}
        />
      )}
    </div>
  )
}
