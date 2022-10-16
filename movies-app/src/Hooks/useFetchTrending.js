import { useEffect, useState } from "react"
import { getTrending } from "../Helpers/getTrending";

export const useFetchTrending = (selectedOption, selectedOption2) => {
    const [movies, setMovies] = useState([]);
    const [itsLoading, setIsLoading] = useState(true); //Está cargando
    const getTrendingMovies = async (selectedOption, selectedOption2) => {
        const results = await getTrending(selectedOption, selectedOption2)
        setMovies(results)
        setIsLoading(false)
    }

    useEffect(() => {
        getTrendingMovies(selectedOption, selectedOption2)
    }, [selectedOption, selectedOption2])
    
    return {
        movies,
        itsLoading
    }
}