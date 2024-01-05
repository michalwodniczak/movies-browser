import { put, call, debounce } from "redux-saga/effects";
import { fetchDataSucces, fetchDataFailure, fetchData } from "./searchSlice";
import { getSearch } from "./getSearch";

function* fetchDataHandler(action) {
    try {
        yield call(fetchData);
        const result = yield call(getSearch, action.payload.query);
        yield put(fetchDataSucces({ data: result }));
    } catch (error) {
        yield put(fetchDataFailure({ error }));
        console.log(error);
    };
};

export function* watchFetchData() {
    console.log("saga jest odpalona");
    yield debounce(1000, fetchData.type, fetchDataHandler);
};
