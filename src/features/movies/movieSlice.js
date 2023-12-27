import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: true,
        id: '',
        details: {},
        credits: {},
    },
    reducers: {
        setMovieId: (state, {payload: id}) => {
            state.id = id;
        },
        setMovieDetails: (state, {payload: movieDetails}) => {
            state.details = movieDetails;
            state.loading = false;
        },
        setMovieCredits: (state, {payload: movieCredits}) => {
            state.credits = movieCredits;
        },
    },
});

export const {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
} = movieSlice.actions;

const selectMovieState = state => state.movie;

export const selectLoading = state => selectMovieState(state).loading;

export default movieSlice.reducer;