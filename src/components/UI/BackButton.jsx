import { Box, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Box marginBottom="4rem">
            <Button
                onClick={() => navigate(-1)}
                startIcon={<KeyboardBackspaceIcon />}
                variant="contained"
                sx={{
                    boxShadow:
                        theme.palette.mode === "light"
                            ? "0px 0px 4px rgba(0, 0, 0, 0.2)"
                            : "0px 0px 5px rgba(0, 0, 0, 0.4)",
                    fontSize: "17px",
                    textTransform: "none",
                    padding: "7px 30px",
                    gap: "5px",
                    color: theme.palette.primary.main,
                    background: theme.palette.background.alt,
                    ":hover": {
                        background: theme.palette.background.alt,
                        opacity: 0.8,
                    },
                }}
            >
                Back
            </Button>
        </Box>
    );
};

export default BackButton;
