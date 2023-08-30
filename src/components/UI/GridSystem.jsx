import styled from "@emotion/styled";
import { Box } from "@mui/material";

const GridSystem = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 258px)",
    justifyContent: "space-between",
    rowGap: "4.6rem",
    ["@media(max-width:1300px)"]: {
        gridTemplateColumns: "repeat(3,258px)",
        rowGap: "3.5rem",
    },
    ["@media(max-width:1010px)"]: {
        justifyContent: "space-around",
        gridTemplateColumns: "repeat(2,258px)",
        rowGap: "3rem",
    },
    ["@media(max-width:770px)"]: {
        justifyContent: "space-around",
        gridTemplateColumns: "repeat(1,258px)",
        rowGap: "2rem",
    },
}));

export default GridSystem;
