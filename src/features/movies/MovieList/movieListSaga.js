import { call, put, takeEvery, select } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    incrementPage,
    decrementPage,
    goToFirstPage,
    pageNumberFromURL,
    selectPageState,
    setMovieList,
    setLoading
} from "./movieListSlice";

function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPageState);
        yield put(setLoading({ loading: false }));
        const movieList = yield call(getPopularMovies, page);
        yield put(setMovieList(movieList));
    }
    catch (error) {
        yield call(alert, "Error fetching popular movies!");
    }
};

export function* watchFetchMovieList() {
    yield takeEvery(
        [
            incrementPage,
            decrementPage,
            goToFirstPage,
            pageNumberFromURL
        ],
        fetchMovieListHandler);
};