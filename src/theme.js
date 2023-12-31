export const themeSettings = (mode) => {
    return {
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        padding: "0",
                    },
                },
            },
        },
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                      primary: {
                          main: "hsl(200, 15%, 8%)",
                          secondary: "hsl(200, 15%, 20%)",
                      },
                      neutral: {
                          inputText: "hsl(0, 0%, 52%)",
                      },
                      background: {
                          default: "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background)
                          alt: "hsl(0, 0%, 100%)", // White (Light Mode Elements)
                      },
                  }
                : {
                      primary: {
                          main: "hsl(0, 0%, 100%)",
                          secondary: "hsl(0, 0%, 90%)",
                      },
                      neutral: {
                          inputText: "hsl(0, 0%, 100%)",
                      },
                      background: {
                          default: "hsl(207, 26%, 17%)",
                          alt: "hsl(209, 23%, 22%)",
                      },
                  }),
        },
        typography: {
            fontFamily: "Nunito Sans, sans-serif",
            allVariants: {
                color:
                    mode === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
            },
            body1: {
                fontSize: "15px",
            },
            body2: {
                fontSize: "16px",
            },
        },
        breakpoints: {
            values: {
                container1440px: 1440,
            },
        },
    };
};
