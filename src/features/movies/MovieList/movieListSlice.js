import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movies: [{}],
        genres: [{}],
        status: "loading",
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
            state.status = "loading";
        },
        decrementPage: (state) => {
            state.page -= 1;
            state.status = "loading";
        },
        goToFirstPage: (state) => {
            state.page = 1;
            state.status = "loading";
        },
        goToLastPage: (state, { payload: lastPage }) => {
            state.page = +lastPage;
            state.status = "loading";
        },
        pageNumberFromURL: (state, { payload: query }) => {
            state.page = +query;
            state.status = "loading";
        },
        setMovieList: (state, { payload: movies }) => {
            state.movies = movies;
            state.status = "success";
        },
        setGenres: (state, { payload: genreList }) => {
            state.genres = genreList.genres;
        },
        setError: (state, { payload: message }) => {
            state.error = message;
            state.status = "error";
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToFirstPage,
    goToLastPage,
    pageNumberFromURL,
    setMovieList,
    setGenres,
    setError,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movies;
export const selectStatus = (state) => selectMovieListState(state).status;
export const selectPageState = (state) => selectMovieListState(state).page;
export const selectError = state => selectMovieListState(state).error;

export default movieListSlice.reducer;