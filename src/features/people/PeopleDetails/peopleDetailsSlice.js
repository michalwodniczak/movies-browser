import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
    name: "peopleDetails",
    initialState: {
        personId: 0,
        details: {},
        credits: {},
        genres: [{}],
        status: "loading",
    },
    reducers: {
        fetchDataSuccess: (state, { payload: details }) => {
            state.details = details;
            state.status = "success";
        },
        getDetailsForPerson: (state, { payload: id }) => {
            state.personId = id;
            state.status = "loading";
        },
        setPeopleCredits: (state, { payload: peopleCredits }) => {
            state.credits = peopleCredits;
            state.status = "success";
        },
        setGenres: (state, { payload: genreList }) => {
            state.genres = genreList.genres;
            state.status = "success";
        },
        setError: (state, { payload: error }) => {
            state.error = error.message;
            state.status = error.status || "error";
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForPerson,
    fetchDataError,
    setPeopleCredits,
    setGenres,
    setError,
} = peopleDetailsSlice.actions;

const selectPersonState = (state) => state.peopleDetails;
const selectCredits = state => selectPersonState(state).credits;

export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectStatus = (state) => selectPersonState(state).status;
export const selectPersonCast = state => selectCredits(state).cast;
export const selectPersonCrew = state => selectCredits(state).crew;

export default peopleDetailsSlice.reducer;