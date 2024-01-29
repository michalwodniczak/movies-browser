import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageNumberFromURL as moviesPageNumber } from '../features/movies/MovieList/movieListSlice';
import { pageNumberFromURL as peoplePageNumber } from '../features/people/PeopleList/peopleSlice';
import { searchPageNumberFromURL, selectTotalPages, setInputValue } from '../common/Navigation/Search/searchSlice';
import paginationParamName from './paginationParamName';
import queryParamName from './queryParamName';
import popularMoviesPathName from './popularMoviesPathName';
import popularPeoplePathName from './popularPeoplePathName';
import pageLimit from './pageLimit';

export const useURLParameter = (arg) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(arg);
};

export const useUpdatePageFromURL = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);

    return ({ key, value }) => {

        if (key === popularMoviesPathName) {
            if (value < 1 || !value) {
                return dispatch(moviesPageNumber(1));
            } if (value >= (pageLimit + 1)) {
                return dispatch(moviesPageNumber(pageLimit));
            } else {
                return dispatch(moviesPageNumber(Math.floor(value)));
            }
        };

        if (key === popularPeoplePathName) {
            if (value < 1 || !value) {
                return dispatch(peoplePageNumber(1));
            } if (value >= (pageLimit + 1)) {
                return dispatch(peoplePageNumber(pageLimit));
            } else {
                return dispatch(peoplePageNumber(Math.floor(value)));
            }
        };

        if (key === queryParamName) {
            if (!value || value < 1) {
                return dispatch(searchPageNumberFromURL(1));
            } if (totalPages !== 0 && value >= (totalPages + 1)) {
                return dispatch(searchPageNumberFromURL(totalPages));
            } else {
                return dispatch(searchPageNumberFromURL(Math.floor(value)));
            };
        };
    }
};

export const useUpdateQueryFromURL = (query) => {
    const dispatch = useDispatch();
    if (query) {
        return dispatch(setInputValue(query));
    };
};

export const useReplacePageParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return (value) => {

        if (!value) {
            searchParams.set(paginationParamName, 1);
        };
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};