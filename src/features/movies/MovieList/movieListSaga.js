import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import { fetchMovieList, setMovieList } from "./movieListSlice";

function* fetchMovieListHandler() {
    try {
        const movieList = yield call(getPopularMovies);
        yield put(setMovieList(movieList));
    }
    catch (error) {
        yield call(alert, "Error fetching popular movies!");
    }
};

export function* movieListSaga() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
};