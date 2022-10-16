import { useEffect, useState } from "react"
import { getTrending } from "../Helpers/getTrending";

export const useFetchTrending = (selectedOption) => {
    const [movies, setMovies] = useState([]);
    const [itsLoading, setIsLoading] = useState(true); //Está cargando
    const getTrendingMovies = async (selectedOption, time_window) => {
        console.log("Hola " + selectedOption);
        const results = await getTrending(selectedOption, time_window)
        setMovies(results)
        setIsLoading(false)
    }

    useEffect(() => {
        getTrendingMovies(selectedOption)
        console.log("Probando")
    }, [selectedOption])
    
    return {
        movies,
        itsLoading
    }
}