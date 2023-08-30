import styled from "@emotion/styled";
import { Box } from "@mui/material";

const HomeWrapper = styled(Box)({
    padding: "0 5rem",
    marginBottom: "3rem",
    ["@media(max-width:570px)"]: {
        padding: "0 1.7rem",
    },
});

export default HomeWrapper;
