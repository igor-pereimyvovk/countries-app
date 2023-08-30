import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ALL_COUNTRIES_URL =
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,subregion,tld,languages,flags,borders,cca3";

const initialState = {
    countries: [],
    displayed: 12,
    status: "idle",
    error: null,
};

export const fetchAllCounties = createAsyncThunk(
    "countries/fetchAllCounties",
    async () => {
        try {
            const { data } = await axios.get(ALL_COUNTRIES_URL);

            return data;
        } catch (error) {
            throw error;
        }
    }
);

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        increaseDisplayedAmount(state) {
            state.displayed += 8;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllCounties.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchAllCounties.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.countries = action.payload;
            })
            .addCase(fetchAllCounties.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error;
            });
    },
});

export const selectDisplayedAmount = (state) => state.countries.displayed;
export const selectStatus = (state) => state.countries.status;
export const selectError = (state) => state.countries.error;
export const selectAllCounties = (state) => state.countries.countries;

export const { increaseDisplayedAmount } = countriesSlice.actions;

export default countriesSlice.reducer;
