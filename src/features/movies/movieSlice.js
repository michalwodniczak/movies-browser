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
            state.loading = true;
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
    setPreparedDetails,
} = movieSlice.actions;

const selectMovieState = state => state.movie;
const selectCredits = state => selectMovieState(state).credits;

export const selectLoading = state => selectMovieState(state).loading;
export const selectMovieId = state => selectMovieState(state).id;

export const selectMovieDetails = state => selectMovieState(state).details;
export const selectMovieCast = state => selectCredits(state).cast;
export const selectMovieCrew = state => selectCredits(state).crew;

export default movieSlice.reducer;