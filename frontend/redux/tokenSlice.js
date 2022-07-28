import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokens: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        fetchTokensStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        fetchTokensSuccess: (state, action) => {
            state.isFetching = false;
            state.tokens = action.payload;
            state.error = false;
        },
        fetchTokensFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }        
    }
})

export const { fetchTokensStart, fetchTokensSuccess, fetchTokensFailure } = tokenSlice.actions;
export default tokenSlice.reducer;