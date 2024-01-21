import { all, put, call, debounce, select } from "redux-saga/effects";
import { fetchDataSucces, fetchDataFailure, setGenres, setInputValue, selectPath, } from "./searchSlice";
import { getSearch } from "../../utils/API/getSearch";
import { getGenreList } from "../../utils/API/getGenreList";
import { processSearchResults } from "../../utils/API/processApiData";

function* fetchDataHandler(action) {
    try {
        const query = action.payload;
        const path = yield select(selectPath);
        const [rawSearchResults, rawGenreList] = yield all([
            call(getSearch, query, path),
            call(getGenreList),
        ]);
        const result = yield call(processSearchResults, rawSearchResults, rawGenreList, path);
        yield all([
            put(fetchDataSucces(result)),
            put(setGenres(rawGenreList)),
        ]);

    } catch (error) {
        yield put(fetchDataFailure(error.message));
    };
};

export function* searchSaga() {
    yield debounce(500, setInputValue.type, fetchDataHandler);
};