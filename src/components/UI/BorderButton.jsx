import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BorderButton = styled(Button)(({ theme }) => ({
    boxShadow:
        theme.palette.mode === "light"
            ? "0px 0px 4px rgba(0, 0, 0, 0.2)"
            : "0px 0px 5px rgba(0, 0, 0, 0.4)",
    textTransform: "none",
    padding: "2.5px 6px",
    color: theme.palette.primary.main,
    background: theme.palette.background.alt,
    ":hover": {
        background: theme.palette.background.alt,
        opacity: 0.8,
    },
}));

export default BorderButton;
