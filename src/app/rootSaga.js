import { all } from "redux-saga/effects";
import { watchFetchMovieList } from "../features/movies/MovieList/movieListSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieList(),
    ]);
};