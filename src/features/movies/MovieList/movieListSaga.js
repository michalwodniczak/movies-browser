import { all, call, put, takeEvery, select } from "redux-saga/effects";
import {
    incrementPage,
    decrementPage,
    goToFirstPage,
    pageNumberFromURL,
    selectPageState,
    setMovieList,
    setGenres,
} from "./movieListSlice";
import { getPopularMovies } from "../../../utils/API/getPopularMovies";
import { getGenreList } from "../../../utils/API/getGenreList";
import { customiseMovieList } from "./customiseMovieList";

function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPageState);
        const [movieList, genreList] = yield all([
            call(getPopularMovies, page),
            call(getGenreList),
        ]);
        const movies = yield call(customiseMovieList, movieList, genreList);
        yield put(setMovieList(movies));
        yield put(setGenres(genreList));
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