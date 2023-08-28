import { Box, InputAdornment } from "@mui/material";
import SearchCountry from "./UI/SearchCountry";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectCountry from "./UI/SelectCountry";

const SearchFilterPanel = ({ search, setSearch, region, setRegion }) => {
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="2.7rem"
        >
            <SearchCountry
                value={search}
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
