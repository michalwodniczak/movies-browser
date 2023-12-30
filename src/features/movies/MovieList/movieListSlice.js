import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movies: [],
        loading: true,
        success: false,
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
        setMovieList: (state, { payload: movies }) => {
            state.movies = movies.results;
            state.loading = false;
            state.success = true;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        },
    },
});

export const { 
    incrementPage,
    decrementPage,
    goToFirstPage,
	pageNumberFromURL,
    setMovieList, 
    setLoading 
} = movieListSlice.actions;

export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectLoading = state => selectMovieListState(state).loading;
export const selectPageState = (state) => selectMovieListState(state).page;

export default movieListSlice.reducer;
