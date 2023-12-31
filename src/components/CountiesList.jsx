import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCounties,
    selectAllCounties,
    selectError,
    selectStatus,
} from "../store/countries/countriesSlice";
import CountryItem from "./CountryItem";
import { nanoid } from "@reduxjs/toolkit";
import GridSystem from "./UI/GridSystem";
import { useCountries } from "../hooks/useCountries";
import SkeletonListItem from "./UI/SkeletonListItem";
import { Box, CircularProgress, Typography } from "@mui/material";
import { usePaginate } from "../hooks/usePaginate";

const CountiesList = ({ search, region }) => {
    const countries = useSelector(selectAllCounties);
    const error = useSelector(selectError);
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
                    ? Array.from(new Array(12)).map((_, i) => (
                          <SkeletonListItem key={nanoid()} />
                      ))
                    : filteredCounties
                          .slice(0, amount)
                          .map((country) => (
                              <CountryItem
                                  key={country.cca3}
                                  country={country}
                              />
                          ))}
            </GridSystem>
            {isLoading && (
                <Box display="flex" justifyContent="center" marginTop="25px">
                    <CircularProgress />
                </Box>
            )}
            {error && (
                <Box>
                    <Typography color="error" variant="h3" fontWeight="bold">
                        API Error :(
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default CountiesList;
