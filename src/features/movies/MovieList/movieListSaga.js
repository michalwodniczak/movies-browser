import { call, put } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import { setMovieList, setLoading } from "./movieListSlice";

function* fetchMovieListHandler() {
    try {
        yield put(setLoading({ loading: false }));
        const movieList = yield call(getPopularMovies);
        yield put(setMovieList(movieList));
    }
    catch (error) {
        yield call(alert, "Error fetching popular movies!");
    }
};

export function* watchFetchMovieList() {
    yield call(fetchMovieListHandler);
};