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
        <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton
                onClick={handleClick}
                sx={{
                    p: "5px",
                    color: theme.palette.primary.main,
                }}
            >
                {mode === "light" ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
            </IconButton>
            <Typography variant="body2" fontWeight={600} lineHeight={1}>
                {mode[0].toUpperCase() + mode.slice(1)} Mode
            </Typography>
        </Box>
    );
};

export default LightDarkMode;
