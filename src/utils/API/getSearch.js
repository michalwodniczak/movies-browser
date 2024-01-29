import axios from "axios";
import { URL, AuthorizationAndLanguage } from "./APIURLS";
import popularMoviesPathName from "../popularMoviesPathName";
import popularPeoplePathName from "../popularPeoplePathName";

export const getSearch = async (query, path, page) => {

    const searchPath = () => {
        switch (path) {
            case popularMoviesPathName:
                return "movie";

            case popularPeoplePathName:
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