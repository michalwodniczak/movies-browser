import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "/",
    },
    reducers: {
        setPath:(state, {payload}) => {
            state.path = payload;
        },
    },

});

export const selectPath = (state) => state.search.path;

export const {setPath} = searchSlice.actions;

export default searchSlice.reducer