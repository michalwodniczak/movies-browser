import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        loading: true,
        page: 1,
    },
	reducers: {
		incrementPage: (state) => {
			state.page += 1;
		},
		decrementPage: (state) => {
			state.page -= 1;
		},
        goToFirstPage: (state) => {
            state.page = 1;
        },
		pageNumberFromURL: (state, { payload: query }) => {
			state.page = +query;
		},
	},
});

export const {
    incrementPage,
    decrementPage,
    goToFirstPage,
	pageNumberFromURL,
} = peopleSlice.actions;

export const selectPageState = (state) => state.people.page;

export default peopleSlice.reducer;