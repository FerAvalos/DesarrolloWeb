import config from "../Config/config";

export const getTrending=async(media_type='all', time_window='day') => {
    //https://api.themoviedb.org/3/trending/all/day?api_key=d2a056eda05773adcb38255a67df1396
    const {ApiKey, Endpoint}=config
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`
    const resp = await fetch(url)
    const {results} = await resp.json()
    return results
}