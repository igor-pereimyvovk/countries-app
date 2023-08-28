import { Typography } from "@mui/material";
import StyledLink from "./StyledLink";
import { useTheme } from "@emotion/react";

const Logo = () => {
    const theme = useTheme();
    return (
        <StyledLink to="/">
            <Typography
                letterSpacing={theme.palette.mode === "light" && "-0.8px"}
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
