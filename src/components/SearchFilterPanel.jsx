import { Box, InputAdornment, Select } from "@mui/material";
import SearchCountry from "./UI/SearchCountry";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchFilterPanel = ({ search, setSearch, region, setRegion }) => {
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleChangeRegion = (e) => {
        setRegion(e.target.value);
    };
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
            <Select value={region} onChange={handleChangeRegion}></Select>
        </Box>
    );
};

export default SearchFilterPanel;
