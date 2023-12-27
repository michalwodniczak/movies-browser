import { all } from "redux-saga/effects";
import { movieSaga } from "../features/movies/movieSaga";

export default function* rootSaga() {
    yield all([
        movieSaga(),
    ]);
};