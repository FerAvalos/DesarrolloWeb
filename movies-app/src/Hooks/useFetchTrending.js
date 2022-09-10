import { useEffect, useState } from "react"
import { getTrending } from "../Helpers/getTrending";

export const useFetchTrending = () => {
    const [movies, setMovies] = useState([]);
    const [itsLoading, setIsLoading] = useState(true); //Está cargando
    const getTrendingMovies = async (media_type, time_window) => {
        const results = await getTrending(media_type, time_window)
        setMovies(results)
        setIsLoading(false)
    }
    useEffect(() => {
        getTrendingMovies()
    }, [])

    return {
        movies,
        itsLoading
    }
}