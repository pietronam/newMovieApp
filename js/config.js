export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2RkZmNhMjlkNzNhNmEzYTRiYjRkNWYwYzc3MGZiZiIsInN1YiI6IjY1ZTg2YzdlZWE0MjYzMDE3YjIyOGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbRmoUz6V4AsxTymqbiS-uORy-HBk8uRXoHXZDA3v3o`
    },
};