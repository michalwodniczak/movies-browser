import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageNumberFromURL } from '../features/movies/MovieList/movieListSlice';
import paginationParamName from './paginationParamName';
import pageLimit from './pageLimit';

export const useURLParameter = (arg) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(arg);
};

export const useUpdatePageFromURL = () => {
    const dispatch = useDispatch();

    return (value) => {
        if (value < 1) {
            return dispatch(pageNumberFromURL(1));
        } if (value >= (pageLimit + 1)) {
            return dispatch(pageNumberFromURL(pageLimit));
        } else {
            return dispatch(pageNumberFromURL(Math.floor(value)));
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