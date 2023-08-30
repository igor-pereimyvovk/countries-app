import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryWrapper from "../components/UI/CountryWrapper";
import { Box, Skeleton } from "@mui/material";
import { useTheme } from "@emotion/react";
import BackButton from "../components/UI/BackButton";
import InfoBlock from "../components/InfoBlock";

const CountryPage = () => {
    const [country, setCountry] = useState();
    const { countryName } = useParams();
    const theme = useTheme();

    useEffect(() => {
        fetchCountry();
    }, [countryName]);

    const fetchCountry = async () => {
        const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${countryName}`
        );
        setCountry(data[0]);
    };

    return (
        <CountryWrapper>
            <BackButton />
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="10%"
            >
                {country ? (
                    <>
                        <Box
                            flex={1}
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light"
                                        ? "0px 0px 4px rgba(0, 0, 0, 0.2)"
                                        : "0px 0px 5px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <img
                                style={{
                                    verticalAlign: "top",
                                    objectFit: "cover",
                                }}
                                width="100%"
                                height="100%"
                                src={country?.flags?.png}
                            />
                        </Box>
                        <InfoBlock country={country} />
                    </>
                ) : (
                    <>
                        <Skeleton
                            variant="rounded"
                            height="350px"
                            sx={{ flex: 1 }}
                        />
                        <Box sx={{ flex: 1 }}>
                            <Skeleton sx={{ mb: "25px" }} />
                            <Skeleton sx={{ mb: "12px" }} />
                            <Skeleton sx={{ mb: "12px" }} />
                            <Skeleton sx={{ mb: "12px" }} />
                            <Skeleton sx={{ mb: "12px" }} />
                            <Skeleton />
                        </Box>
                    </>
                )}
            </Box>
        </CountryWrapper>
    );
};

export default CountryPage;
