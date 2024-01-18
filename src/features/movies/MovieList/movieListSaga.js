import { all, call, put, takeEvery, select, delay } from "redux-saga/effects";
import {
    incrementPage,
    decrementPage,
    goToFirstPage,
    pageNumberFromURL,
    selectPageState,
    setMovieList,
    setGenres,
    setLoading,
} from "./movieListSlice";
import { getPopularMovies } from "../../../utils/API/getPopularMovies";
import { getGenreList } from "../../../utils/API/getGenreList";
import { processMovieListData } from "../../../utils/API/processMovieListData";

function* fetchMovieListHandler() {
    try {
        yield put(setLoading(true));
        yield delay(1000);
        const page = yield select(selectPageState);
        const [rawMovieList, rawGenreList] = yield all([
            call(getPopularMovies, page),
            call(getGenreList),
        ]);
        const movies = yield call(processMovieListData, rawMovieList, rawGenreList);
        yield put(setMovieList(movies));
        yield put(setGenres(rawGenreList));
    }
    catch (error) {
        yield call(alert, "Error fetching popular movies!");
    }
    finally {
        yield put(setLoading(false));
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