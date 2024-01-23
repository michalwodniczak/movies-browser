import axios from "axios";

export const getSearch = async (query, path) => {

    const searchPath = () => {
        switch (path) {
            case "movies":
                return "movie";

            case "people":
                return "person";

            default:
                break;
        }
    }

    const apiKey = "f9cdeaf9af4ca30fda858745e2b12712";
    const URL = `https://api.themoviedb.org/3/search/${searchPath()}?api_key=${apiKey}&query=${query}`;

    try {
        const response = await axios.get(URL);
        return response.data;
    } catch {
        throw new Error("Failed to search");
    };
};