import styled from "@emotion/styled";
import { Select } from "@mui/material";

const SelectCountryStyled = styled(Select)(({ theme }) => ({
    width: "180px",
    background: theme.palette.background.alt,
    boxShadow:
        theme.palette.mode === "light"
            ? "0px 0px 4px rgba(0, 0, 0, 0.1)"
            : "0px 0px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    fontWeight: 600,

    "& fieldset": {
        border: "none",
    },
    "&.Mui-focused fieldset": {
        transition: "box-shadow 0.2s ease",
        boxShadow:
            theme.palette.mode === "light"
                ? "0px 0px 8px rgba(0, 0, 0, 0.1)"
                : "0px 0px 10px rgba(0, 0, 0, 0.3)",
    },
    "& .MuiOutlinedInput-root": {
        fontWeight: 1000,
        color: theme.palette.neutral.main,
    },
}));

export default SelectCountryStyled;
