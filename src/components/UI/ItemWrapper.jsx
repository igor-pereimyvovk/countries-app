import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ItemWrapper = styled(Link)(({ theme }) => ({
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: "7px",
    boxShadow:
        theme.palette.mode === "light"
            ? "0px 0px 4px rgba(0, 0, 0, 0.1)"
            : "0px 0px 5px rgba(0, 0, 0, 0.2)",
    background: theme.palette.background.alt,
    ":hover img ": {
        transform: "scale(1.1) translateY(-4%)",
    },
}));

export default ItemWrapper;
