import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from "../common/Pagination/paginationSlice"; 
import searchReducer from "../Navigation//Search/searchSlice";

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        search: searchReducer,
    }
});
