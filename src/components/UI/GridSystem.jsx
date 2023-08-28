import styled from "@emotion/styled";
import { Box } from "@mui/material";

const GridSystem = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 258px)",
    justifyContent: "space-between",
    rowGap: "4.6rem",
}));

export default GridSystem;
