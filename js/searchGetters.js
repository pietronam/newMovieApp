import { SEARCH_MOVIE_URL, OPTIONS } from "./config.js";

export const getSearchMovies = async (query) => {
    const response = await fetch(SEARCH_MOVIE_URL +  `${ query }`, OPTIONS);
    const data = response.json();

    return data;
}

export const handleMovieSearch = async () => {
    const queryInput = document.getElementById("search-input");
    const queryInputValue = queryInput.value;

    const result = await getSearchMovies(queryInputValue);
    
    return result;
}