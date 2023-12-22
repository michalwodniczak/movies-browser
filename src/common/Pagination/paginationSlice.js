import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
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
	},
});

export const {
    incrementPage,
    decrementPage,
    goToFirstPage
} = paginationSlice.actions;

export const selectPageState = (state) => state.pagination.page;

export default paginationSlice.reducer;