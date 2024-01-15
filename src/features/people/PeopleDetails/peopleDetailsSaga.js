import { call, put, takeLatest, select, all } from "redux-saga/effects";
import {
    fetchDataSuccess,
    selectPersonId,
    fetchDataError,
    getDetailsForPerson,
    setPeopleCredits,
} from "./peopleDetailsSlice";
import { getPeopleDetails, getPeopleCredits } from "./getPeopleDetails";

function* fetchPersonDetailsHandler() {
    try {
        const id = yield select(selectPersonId);
        const [details, credits] = yield all([
            call(getPeopleDetails, { personId: id }),
            call(getPeopleCredits, { personId: id }),
        ]);
        yield put(fetchDataSuccess({ details }));
        yield put(setPeopleCredits(credits));
    } catch (error) {
        console.error("Saga: Error in fetchPersonDetailsHandler", error);
        yield put(fetchDataError());
    }
}

export function* watchFetchPersonDetails() {
    yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}