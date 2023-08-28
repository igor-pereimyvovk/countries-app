import { Typography } from "@mui/material";
import StyledLink from "./StyledLink";

const Logo = () => {
    return (
        <StyledLink to="/">
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                    transition: "opacity 0.2s ease",
                    [":hover"]: {
                        opacity: 0.7,
                    },
                }}
            >
                Where in the world?
            </Typography>
        </StyledLink>
    );
};

export default Logo;
