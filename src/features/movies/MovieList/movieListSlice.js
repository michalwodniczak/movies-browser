import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movies: [{}],
        genres: [{}],
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
            state.movies = movies;
            state.loading = false;
            state.success = true;
        },
        setGenres: (state, {payload: genreList}) => {
            state.genres = genreList.genres;
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
    setGenres, 
    setLoading,
} = movieListSlice.actions;

export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectLoading = state => selectMovieListState(state).loading;
export const selectPageState = (state) => selectMovieListState(state).page;

export default movieListSlice.reducer;
