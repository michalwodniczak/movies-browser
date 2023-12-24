const JSON_URL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/movies.json";

export const getPopularMovies = async () => {
    try {
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
