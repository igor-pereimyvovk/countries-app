import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const ItemWrapper = styled(Box)(({ theme }) => ({
    borderRadius: "7px",
    boxShadow:
        theme.palette.mode === "light"
            ? "0px 0px 4px rgba(0, 0, 0, 0.1)"
            : "0px 0px 5px rgba(0, 0, 0, 0.2)",
    background: theme.palette.background.alt,
}));

export default ItemWrapper;
