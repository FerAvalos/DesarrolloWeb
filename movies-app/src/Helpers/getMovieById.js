import config from "../Config/config";

export const getMovieById=async(movieId, lenguage='es-MX') => {
    //https://api.themoviedb.org/3/movie/616037?api_key=3ccca4feac90e34216554eb5e443845f&language=es-MX
    const {ApiKey, Endpoint}=config
    const url = `${Endpoint}/movie/${movieID}?api_key=${ApiKey}&lenguage=${lenguage}`
    const resp = await fetch(url)
    const results = await resp.json()

    return results
}