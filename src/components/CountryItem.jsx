import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import ItemWrapper from "./UI/ItemWrapper";
import ItemText from "./UI/ItemText";
import ItemAllText from "./UI/ItemAllText";

const CountryItem = ({ country }) => {
    const theme = useTheme();

    return (
        <ItemWrapper to={`/country/${country.cca3}`}>
            <Box
                height="158px"
                sx={{
                    boxShadow:
                        theme.palette.mode === "light" &&
                        "0px 1px 4px rgba(0, 0, 0, 0.1)",
                    borderRadius: "7px 7px 0 0",
                    overflow: "hidden",
                }}
            >
                <img
                    style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                    }}
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width="100%"
                    height="100%"
                />
            </Box>
            {/* NAME */}
            <Box sx={{ padding: "25px 20px 32px" }}>
                <Typography
                    overflow="hidden"
                    fontSize="18px"
                    letterSpacing="-0.5px"
                    fontWeight="bold"
                    mb="0.8rem"
                    sx={{ textWrap: "nowrap", textOverflow: "ellipsis" }}
                >
                    {country.name.common}
                </Typography>
                {/* POPULATION */}
                <ItemAllText>
                    <ItemText variant="span">Population: </ItemText>
                    {country.population.toLocaleString("en", {
                        useGrouping: true,
                    })}
                </ItemAllText>
                {/* REGION */}
                <ItemAllText>
                    <ItemText variant="span">Region: </ItemText>
                    {country.region}
                </ItemAllText>
                {/* CAPITALs */}
                <ItemAllText
                    sx={{
                        overflow: "hidden",
                        textWrap: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    <ItemText variant="span">
                        Capital{country.capital.length > 1 && "s"}:{" "}
                    </ItemText>
                    {country.capital.join(", ")}
                </ItemAllText>
            </Box>
        </ItemWrapper>
    );
};

export default CountryItem;
