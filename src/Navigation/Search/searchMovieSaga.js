import { put, call, debounce } from "redux-saga/effects";
import { fetchDataSucces, fetchDataFailure, fetchData } from "./searchSlice";
import { getSearchMovie } from "./getSearch";

function* fetchDataHandler(action) {
    try {
        yield call(fetchData);
        const result = yield call(getSearchMovie, action.payload.query);
        yield put(fetchDataSucces({ data: result }));
    } catch (error) {
        yield put(fetchDataFailure({ error }));
    };
};

export function* searchMovieSaga() {
    yield debounce(1500, fetchData.type, fetchDataHandler);
};
