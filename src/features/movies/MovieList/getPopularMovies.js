import { popularMoviesURL } from "../../../utils/API/APIURLS";

export const getPopularMovies = async (page) => {
    try {
        const response = await fetch(`${popularMoviesURL}&page=${page}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw error;
    }
};
