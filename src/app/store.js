import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import paginationReducer from "../common/Pagination/paginationSlice";
import searchReducer from "../Navigation//Search/searchSlice";
import { watchFetchData } from '../Navigation/Search/searchSaga';

const sagaMiddelaware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        search: searchReducer,
    },
    middleware: [sagaMiddelaware],
});

sagaMiddelaware.run(watchFetchData);