import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ALL_COUNTRIES_URL =
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,subregion,tld,languages,flags,borders";

const initialState = {
    countries: [],
    status: "idle",
    error: null,
};

export const fetchAllCounties = createAsyncThunk(
    "countries/fetchAllCounties",
    async () => {
        const { data } = await axios.get(ALL_COUNTRIES_URL);

        return data;
    }
);

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllCounties.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchAllCounties.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.countries = action.payload;
            });
    },
});

export const selectStatus = (state) => state.countries.status;
export const selectAllCounties = (state) => state.countries.countries;

export default countriesSlice.reducer;
