import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCounties,
    selectAllCounties,
} from "../store/countries/countriesSlice";
import CountryItem from "./CountryItem";
import { nanoid } from "@reduxjs/toolkit";
import GridSystem from "./UI/GridSystem";

const CountiesList = ({ search, region }) => {
    const countries = useSelector(selectAllCounties);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCounties());
    }, []);

    console.log(countries);

    return (
        <GridSystem>
            {countries.map((country) => (
                <CountryItem key={nanoid()} country={country} />
            ))}
        </GridSystem>
    );
};

export default CountiesList;
