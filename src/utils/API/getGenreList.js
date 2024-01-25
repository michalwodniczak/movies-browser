import { genresURL } from "./APIURLS";
import { sessionStorageKey, getDataFromSessionStorage } from "../genresSessionStorage";

export const getGenreList = async () => {
    try {
        const sessionStorageState = sessionStorage.getItem(sessionStorageKey);

        if (sessionStorageState !== null) {
            return await getDataFromSessionStorage();
        } else {
            const response = await fetch(genresURL);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return await response.json();

        }
    } catch (error) {
        throw error;
    };
};