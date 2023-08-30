import { Box, Typography } from "@mui/material";
import InfoText from "./UI/InfoText";
import { useEffect, useState } from "react";
import axios from "axios";
import BorderButton from "./UI/BorderButton";
import { useNavigate } from "react-router-dom";
import { getCountryInfo } from "../features/getCountryInfo";

const InfoBlock = ({ country }) => {
    const [borders, setBorders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchBorders();
    }, [country]);

    const fetchBorders = async () => {
        const result = [];
        if (country?.borders) {
            for (const border of country.borders) {
                const { data } = await axios.get(
                    `https://restcountries.com/v3.1/alpha/${border}`
                );
                result.push(data[0].name.common);
            }
            setBorders(result);
        }
    };

    const [nativeName, currencies, languages] = getCountryInfo(country);

    return (
        <Box flex={1}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: "1.5rem" }}>
                {country?.name?.official}
            </Typography>
            <Box display="flex" justifyContent="space-between" mb="1.5rem">
                <Box width="50%">
                    <InfoText title="Native Name" info={nativeName?.official} />
                    <InfoText
                        title="Population"
                        info={country?.population.toLocaleString("en", {
                            useGrouping: true,
                        })}
                    />
                    <InfoText title="Region" info={country?.region} />
                    <InfoText title="Sub Region" info={country?.subregion} />
                    <InfoText
                        title={`Capital${
                            country?.capital?.length > 1 ? "s" : ""
                        }`}
                        info={country?.capital.join(", ")}
                    />
                </Box>
                <Box width="40%" display="flex" justifyContent="flex-end">
                    <Box>
                        <InfoText
                            title="Top Level Domain"
                            info={country?.tld.join(", ")}
                        />
                        <InfoText title="Currencies" info={currencies} />
                        <InfoText title="Languages" info={languages} />
                    </Box>
                </Box>
            </Box>

            <Box
                display="flex"
                flexWrap="wrap"
                columnGap="10px"
                rowGap="6px"
                alignItems="center"
            >
                <Typography fontSize="16px" fontWeight={600}>
                    Border Countries:
                </Typography>
                {borders.length > 0 ? (
                    borders.map((border) => (
                        <BorderButton
                            key={border}
                            onClick={() => navigate(`/country/${border}`)}
                        >
                            {border}
                        </BorderButton>
                    ))
                ) : (
                    <Typography variant="span">None</Typography>
                )}
            </Box>
        </Box>
    );
};

export default InfoBlock;