import { FormControl, InputLabel, MenuItem } from "@mui/material";
import SelectCountryStyled from "./SelectCountryStyled";
import { useTheme } from "@emotion/react";

const SelectCountry = ({ region, setRegion }) => {
    const theme = useTheme();

    const handleChangeRegion = (e) => {
        setRegion(e.target.value);
    };
    return (
        <FormControl>
            {!region && (
                <InputLabel
                    id="selectCountry"
                    shrink={false}
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    Filter By Region
                </InputLabel>
            )}
            <SelectCountryStyled
                labelId="selectCountry"
                value={region}
                onChange={handleChangeRegion}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            marginTop: "5px",
                            paddingY: 0,
                            background: theme.palette.background.alt,
                            boxShadow:
                                theme.palette.mode === "light"
                                    ? "0px 0px 8px rgba(0, 0, 0, 0.1)"
                                    : "0px 0px 9px rgba(0, 0, 0, 0.2)",
                            "& .MuiMenuItem-root": {
                                fontWeight: "600",
                                minHeight: "38px",
                                paddingY: 0,
                            },
                            "& .MuiList-root": {
                                paddingY: 0,
                            },
                        },
                    },
                }}
            >
                {region && <MenuItem value="">None</MenuItem>}
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Americas">America</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </SelectCountryStyled>
        </FormControl>
    );
};

export default SelectCountry;
