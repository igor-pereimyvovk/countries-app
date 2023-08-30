import styled from "@emotion/styled";

const NavbarWrapper = styled("nav")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.background.alt,
    padding: "1.5rem 5rem",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "2.7rem",
    ["@media(max-width:570px)"]: {
        padding: "2.5rem 1.2rem",
    },
}));

export default NavbarWrapper;
