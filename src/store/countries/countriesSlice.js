import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    error: false,
};

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
});

export default countriesSlice.reducer;
