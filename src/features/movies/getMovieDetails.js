import { URL, AuthorizationAndLanguage } from "../../utils/API/APIURLS";

// const movieDetailSampleURL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/movie-466420.json";
// const movieCreditsSampleURL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/credits-466420.json";

export const getMovieDetails = async ( id ) => {

    const response = await fetch(`${URL}movie/${id}${AuthorizationAndLanguage}`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};

export const getMovieCredits = async ( id ) => {

    const response = await fetch(`${URL}movie/${id}/credits${AuthorizationAndLanguage}`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};