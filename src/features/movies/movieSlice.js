import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
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

export const selectMovieId = state => selectMovieState(state).id;

export default movieSlice.reducer;