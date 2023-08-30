import styled from "@emotion/styled";
import { Box } from "@mui/material";

const CountryWrapper = styled(Box)(({ theme }) => ({
    padding: "0 5rem",
    marginBottom: "3rem",
    ["@media(max-width:570px)"]: {
        padding: "0 1.7rem",
    },
}));

export default CountryWrapper;
