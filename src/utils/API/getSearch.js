import axios from "axios";
import { URL, AuthorizationAndLanguage } from "./APIURLS";

export const getSearch = async (query, path, page) => {

    const searchPath = () => {
        switch (path) {
            case "movies":
                return "movie";

            case "people":
                return "person";

            default:
                break;
        }
    };

    const fetchURL = `${URL}search/${searchPath()}${AuthorizationAndLanguage}&query=${query}&page=${page}`;

    try {
        const response = await axios.get(fetchURL);
        return response.data;
    } catch {
        throw new Error("Failed to search");
    };
};