// to fetch data from API use those imports with passed { id }
// import { URL, AuthorizationAndLanguage } from "../../utils/API/APIURLS";

const movieDetailSampleURL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/movie-466420.json";
const movieCreditsSampleURL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/credits-466420.json";

export const getMovieDetails = async (/* id */) => {

    //const movieDetailURL = `${URL}movie/${id}${AuthorizationAndLanguage}`;

    const response = await fetch(movieDetailSampleURL);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};

export const getMovieCredits = async () => {

    //const movieCreditsURL = `${URL}movie/${id}/credits${AuthorizationAndLanguage}`;

    const response = await fetch(movieCreditsSampleURL);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};