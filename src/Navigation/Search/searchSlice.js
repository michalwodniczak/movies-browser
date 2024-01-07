import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "/",
        data: null,
        error: null,
        loading: false,
    },
    reducers: {
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        fetchData: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSucces: (state, { payload: data }) => {
            state.loading = false;
            state.data = data;
        },
        fetchDataFailure: (state, { payload: error }) => {
            state.data = null;
            state.error = error
        },
    },
});

export const selectPath = (state) => state.search.path;
export const selectSearchLoading = (state) => state.search.loading;
export const selectData = (state) => state.search.data;
export const selectSearchError = (state) => state.search.error;

export const { setPath, fetchData, fetchDataFailure, fetchDataSucces } = searchSlice.actions;

export default searchSlice.reducer