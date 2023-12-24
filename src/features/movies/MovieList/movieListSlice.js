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

export const { setMovieList, setLoading } = movieListSlice.actions;

export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectLoading = state => selectMovieListState(state).loading;

export default movieListSlice.reducer;
