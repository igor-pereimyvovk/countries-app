import { Typography } from "@mui/material";
import StyledLink from "./StyledLink";

const Logo = () => {
    return (
        <StyledLink to="/">
            <Typography variant="h5" fontWeight="bold">
                Where in the world?
            </Typography>
        </StyledLink>
    );
};

export default Logo;
