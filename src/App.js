import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMode } from "./store/mode/modeSlice";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./scenes/HomePage";
import Navbar from "./components/Navbar";
import CountryPage from "./scenes/CountryPage";
import { nanoid } from "@reduxjs/toolkit";

function App() {
    const mode = useSelector(selectMode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="container1440px">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/country/:countryCode"
                            element={<CountryPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
}

export default App;
