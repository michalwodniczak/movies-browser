import { all } from "redux-saga/effects";
import { watchFetchMovieList } from "../features/movies/MovieList/movieListSaga";
import { peopleSaga, poepleSaga } from "../features/people/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieList(),
        peopleSaga(),
    ]);
};import { all } from "redux-saga/effects";