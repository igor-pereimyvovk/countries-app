import { Box, InputAdornment } from "@mui/material";
import SearchCountry from "./UI/SearchCountry";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectCountry from "./UI/SelectCountry";
import { useEffect, useState } from "react";

const SearchFilterPanel = ({ setSearch, region, setRegion }) => {
    const [query, setQuery] = useState("");

    const handleChangeSearch = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const searchTimeout = setTimeout(() => {
            setSearch(query);
        }, 400);

        return () => clearTimeout(searchTimeout);
    }, [query]);

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="2.7rem"
            sx={{
                ["@media(max-width:770px)"]: {
                    flexDirection: "column",
                    alignItems: "normal",
                    gap: "33px",
                },
            }}
        >
            <SearchCountry
                value={query}
                onChange={handleChangeSearch}
                placeholder="Search for a country..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            sx={{ marginRight: "20px" }}
                        >
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <SelectCountry region={region} setRegion={setRegion} />
        </Box>
    );
};

export default SearchFilterPanel;
