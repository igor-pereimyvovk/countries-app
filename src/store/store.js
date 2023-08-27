import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";
import modeReducer from "./mode/modeSlice";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        countries: countriesReducer,
    },
});
