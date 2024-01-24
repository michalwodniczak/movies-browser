import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageNumberFromURL as moviesPageNumber } from '../features/movies/MovieList/movieListSlice';
import { pageNumberFromURL as peoplePageNumber } from '../features/people/PeopleList/peopleSlice';
import { searchPageNumberFromURL, selectTotalPages, setInputValue } from '../common/Navigation/Search/searchSlice';
import paginationParamName from './paginationParamName';
import pageLimit from './pageLimit';

export const useURLParameter = (arg) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(arg);
};

export const useUpdatePageFromURL = () => {
    const dispatch = useDispatch();

    return ({ key, value }) => {

        if (key === "movies") {
            if (value < 1) {
                return dispatch(moviesPageNumber(1));
            } if (value >= (pageLimit + 1)) {
                return dispatch(moviesPageNumber(pageLimit));
            } else {
                return dispatch(moviesPageNumber(Math.floor(value)));
            }
        };

        if (key === "people") {
            if (value < 1) {
                return dispatch(peoplePageNumber(1));
            } if (value >= (pageLimit + 1)) {
                return dispatch(peoplePageNumber(pageLimit));
            } else {
                return dispatch(peoplePageNumber(Math.floor(value)));
            }
        };
    };
};

export const useReplacePageParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return (value) => {
        history.push(`${location.pathname}?${paginationParamName}=${value}`);
    };
};

export const useUpdateQueryFromURL = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);

    return (value, query) => {
        if (!value || value < 1) {
            return (
                dispatch(searchPageNumberFromURL(1)),
                dispatch(setInputValue(query))
            )
        } if (value >= (totalPages + 1)) {
            return (
                dispatch(searchPageNumberFromURL(totalPages)),
                dispatch(setInputValue(query))
            )
        } else {
            return (
                dispatch(searchPageNumberFromURL(Math.floor(value))),
                dispatch(setInputValue(query))
            )
        };
    };
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const queryParams = new URLSearchParams(location.search);

    return ({
        pageKey,
        pageValue,
        queryKey,
        queryValue }) => {

        if (!queryValue) {
            queryParams.delete(queryKey);
        } else {
            queryParams.set(pageKey, pageValue);
            queryParams.set(queryKey, queryValue);

            history.push(`${location.pathname}?${queryParams.toString()}`);
        }
    }
};


