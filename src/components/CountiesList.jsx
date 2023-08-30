import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCounties,
    selectAllCounties,
    selectStatus,
} from "../store/countries/countriesSlice";
import CountryItem from "./CountryItem";
import { nanoid } from "@reduxjs/toolkit";
import GridSystem from "./UI/GridSystem";
import { useCountries } from "../hooks/useCountries";
import SkeletonListItem from "./UI/SkeletonListItem";
import { Box, CircularProgress } from "@mui/material";
import { usePaginate } from "../hooks/usePaginate";

const CountiesList = ({ search, region }) => {
    const countries = useSelector(selectAllCounties);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const filteredCounties = useCountries(countries, search, region);

    const [amount, isLoading] = usePaginate(filteredCounties.length);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllCounties());
        }
    }, [dispatch]);

    return (
        <>
            <GridSystem>
                {status === "pending" || status === "idle"
                    ? Array.from(new Array(24)).map((_, i) => (
                          <SkeletonListItem key={nanoid()} />
                      ))
                    : filteredCounties
                          .slice(0, amount)
                          .map((country) => (
                              <CountryItem key={nanoid()} country={country} />
                          ))}
            </GridSystem>
            {isLoading && (
                <Box display="flex" justifyContent="center" marginTop="25px">
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default CountiesList;
