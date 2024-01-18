// import { genresURL } from "./APIURLS";

const JSON_URL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/genres.json";

export const getGenreList = async () => {
    try {
        // const response = await fetch(genresURL);
        const response = await fetch(JSON_URL);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw error;
    }
};