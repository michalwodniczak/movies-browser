import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
    name: "peopleDetails",
    initialState: {
        personId: 0,
        details: {},
        credits: {},
        status: "loading",
        status: "error",
    },
    reducers: {
        fetchDataSuccess: (state, { payload }) => {
            state.details = payload.details;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        getDetailsForPerson: (state, { payload }) => {
            state.status = "loading";
            state.personId = payload.personId;
        },
        setPeopleCredits: (state, { payload: peopleCredits }) => {
            state.credits = peopleCredits;
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForPerson,
    fetchDataError,
    setPeopleCredits,
} = peopleDetailsSlice.actions;

const selectPersonState = (state) => state.peopleDetails;
const selectCredits = state => selectPersonState(state).credits;

export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectStatus = (state) => selectPersonState(state).status;
export const selectPersonCast = state => selectCredits(state).cast;
export const selectPersonCrew = state => selectCredits(state).crew;

export default peopleDetailsSlice.reducer;