import { useEffect, useState } from "react"
import { getTrending } from "../Helpers/getTrending";

export const useFetchMovieById = () => {
    const [movies, setMovies] = useState();
    const [itsLoading, setIsLoading] = useState(true); //Está cargando
    const getMovie = async (movieId, lenguage) => {
        const results = await getMovieById(movieId)
        setMovies(results)
        setIsLoading(false)
    }
    useEffect(() => {
        getMovie(movieId)
    }, [])

    return {
        movies,
        itsLoading
    }
}