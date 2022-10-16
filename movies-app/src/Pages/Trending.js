import React from 'react'
import { MovieCard } from '../Components/MovieCard';
import { useFetchTrending } from '../Hooks/useFetchTrending'
import { useState } from "react"
import Select from 'react-select';

const Opciones = [
  {value: 'all', label: 'All'},
  {value: 'movie', label: 'Movie'},
  {value: 'tv', label: 'TV'},
  {value: 'person', label: 'Person'},

]

export const Trending = () => {

  const { movies } = useFetchTrending();
  const [selectedOption, setSelectedOption] = useState("")
  useFetchTrending(selectedOption)
  const handleChange = (value) => {
    console.log(value.value);
    const selectedOption = value.value
    setSelectedOption(selectedOption)
  }
  
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      <Select 
        options={Opciones}
        onChange={handleChange}
      />
      { movies.map((movie) => 
        <MovieCard 
          key={movie.id}
          { ...movie }
        />
      )}
    </div>
  )
}
