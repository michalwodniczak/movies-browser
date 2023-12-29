import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        loading: true,
        page: 1,
		peopleList: {},
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
		setPeopleList: (state, {payload: peopleList}) => {
            state.peopleList = peopleList;
        },
	},
});

export const {
    incrementPage,
    decrementPage,
    goToFirstPage,
	pageNumberFromURL,
	setPeopleList,
} = peopleSlice.actions;

export const selectPageState = (state) => state.people.page;

export default peopleSlice.reducer;