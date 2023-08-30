import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../store/mode/modeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@emotion/react";

const LightDarkMode = () => {
    const mode = useSelector(selectMode);
    const dispatch = useDispatch();

    const theme = useTheme();

    const handleClick = () => {
        dispatch(toggleMode());
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            width="125px"
            justifyContent="space-between"
            sx={{
                ["@media(max-width:570px)"]: {
                    width: "100px",
                },
            }}
        >
            <IconButton
                onClick={handleClick}
                sx={{
                    p: "5px",
                    color: theme.palette.primary.main,
                    ["@media(max-width:570px)"]: {
                        fontSize: "12px",
                    },
                }}
            >
                {mode === "light" ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
            </IconButton>
            <Typography
                variant="body2"
                fontWeight={600}
                lineHeight={1}
                sx={{
                    ["@media(max-width:570px)"]: {
                        fontSize: "12px",
                    },
                }}
            >
                {mode[0].toUpperCase() + mode.slice(1)} Mode
            </Typography>
        </Box>
    );
};

export default LightDarkMode;
