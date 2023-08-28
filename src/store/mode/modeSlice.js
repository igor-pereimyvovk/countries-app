import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode(state) {
            state = state === "light" ? "dark" : "light";
            return state;
        },
    },
});

export const selectMode = (state) => state.mode;

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
