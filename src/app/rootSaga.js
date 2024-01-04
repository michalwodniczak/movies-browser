import { all } from "redux-saga/effects";
import { watchFetchMovieList } from "../features/movies/MovieList/movieListSaga";
import { movieSaga } from "../features/movies/movieSaga";
import { peopleSaga } from "../features/people/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieList(),
        movieSaga(),       
        peopleSaga(),
    ]);
};