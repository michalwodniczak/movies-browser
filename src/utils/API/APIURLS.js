import apiKey from "../apiKey";

export const URL = "https://api.themoviedb.org/3/";
export const URLImages = "https://image.tmdb.org/t/p/";
export const AuthorizationAndLanguage = `?api_key=${apiKey}&language=en-US`;

export const popularMoviesURL = `${URL}movie/popular${AuthorizationAndLanguage}`;
export const popularPeopleURL = `${URL}person/popular${AuthorizationAndLanguage}`;
export const genresURL = `${URL}genre/movie/list${AuthorizationAndLanguage}`;
export const backdropURL = `${URLImages}w1920_and_h800_multi_faces`;
export const posterURL = `${URLImages}w300_and_h450_bestv2`