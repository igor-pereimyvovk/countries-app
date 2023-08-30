import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const SearchCountry = styled(TextField)(({ theme }) => ({
    width: "480px",
    background: theme.palette.background.alt,
    boxShadow:
        theme.palette.mode === "light"
            ? "0px 0px 4px rgba(0, 0, 0, 0.1)"
            : "0px 0px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    "& fieldset": {
        border: "none",
    },
    "& .MuiOutlinedInput-root": {
        letterSpacing: "0.6px",
        color: theme.palette.neutral.inputText,
        "&.Mui-focused fieldset": {
            transition: "box-shadow 0.2s ease",
            boxShadow:
                theme.palette.mode === "light"
                    ? "0px 0px 8px rgba(0, 0, 0, 0.1)"
                    : "0px 0px 9px rgba(0, 0, 0, 0.2)",
        },
        "& .MuiOutlinedInput-input": {
            "&::placeholder": {
                opacity: "92%",
            },
        },
    },
}));

export default SearchCountry;
