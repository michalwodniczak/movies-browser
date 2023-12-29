import { all } from "redux-saga/effects";
import { peopleSaga, poepleSaga } from "../features/people/peopleSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
    ]);
};