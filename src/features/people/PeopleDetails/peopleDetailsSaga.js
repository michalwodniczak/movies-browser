import { call, put, takeLatest, select } from "redux-saga/effects";
import {
    fetchDataSuccess,
    selectPersonId,
    fetchDataError,
    getDetailsForPerson,
} from "./peopleDetailsSlice";
import { getPeopleDetails } from "./getPeopleDetails";

function* fetchPersonDetailsHandler() {
    try {
        const id = yield select(selectPersonId);
        const details = yield call(getPeopleDetails, { personId: id });
        yield put(fetchDataSuccess({ details }));
    } catch (error) {
        console.error("Saga: Error in fetchPersonDetailsHandler", error);
        yield put(fetchDataError());
    }
}

export function* watchFetchPersonDetails() {
    yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}