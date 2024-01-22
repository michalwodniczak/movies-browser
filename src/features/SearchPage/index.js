import { useSelector } from "react-redux";
import { 
    selectData, 
    selectInputValue, 
    selectPath, 
    selectStatus } from "./searchSlice";
import { NoResult } from "./NoResults";
import { SearchedMovies } from "./SearchedMovies";
import { SearchedPeople } from "./SearchedPeople";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

export const SearchPage = () => {
    const searchQuery = useSelector(selectInputValue);
    const searchResults = useSelector(selectData);
    const path = useSelector(selectPath);
    const status = useSelector(selectStatus);

    if (!searchResults.length && status !== "loading") {
        return (
            <NoResult
                searchQuery={searchQuery}
            />
        );
    }

    switch (status) {
        case "loading":
            return <Loading />;
        case "error":
            return <Error />;
        default:

            if (path === "movies") {
                return <SearchedMovies
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                />
            }

            if (path === "people") {
                return <SearchedPeople
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                />
            }
    }
};
