import React from 'react'
import { MovieCard } from '../Components/MovieCard';
import { useFetchTrending } from '../Hooks/useFetchTrending'
import { useState } from "react"
import Select from 'react-select';

const Opciones = [
  {value: 'all', label: 'All'},
  {value: 'movie', label: 'Movie'},
  {value: 'tv', label: 'TV'},
]

const Opciones2 = [
  {value: 'day', label: 'Day'},
  {value: 'week', label: 'Week'},
]

export const Trending = () => {
  const [selectedOption, setSelectedOption] = useState("all")
  const [selectedOption2, setSelectedOption2] = useState("day")
  const { movies } = useFetchTrending(selectedOption, selectedOption2);
  const handleChange = (value) => {
    console.log(value.value);
    const selectedOption = value.value
    setSelectedOption(selectedOption)
  }
  const handleChange2 = (value) => {
    console.log(value.value);
    const selectedOption2 = value.value
    setSelectedOption2(selectedOption2)
  }


  
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      <Select 
        options={Opciones}
        onChange={handleChange}
      />
      <Select 
        options={Opciones2}
        onChange={handleChange2}
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
