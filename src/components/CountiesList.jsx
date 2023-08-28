import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCounties,
    selectAllCounties,
} from "../store/countries/countriesSlice";
import CountryItem from "./CountryItem";
import { nanoid } from "@reduxjs/toolkit";
import GridSystem from "./UI/GridSystem";
import { useCountries } from "../hooks/useCountries";

const CountiesList = ({ search, region }) => {
    const countries = useSelector(selectAllCounties);
    const dispatch = useDispatch();

    const filteredCounties = useCountries(countries, search);

    useEffect(() => {
        dispatch(fetchAllCounties());
    }, []);

    return (
        <GridSystem>
            {filteredCounties.map((country) => (
                <CountryItem key={nanoid()} country={country} />
            ))}
        </GridSystem>
    );
};

export default CountiesList;
