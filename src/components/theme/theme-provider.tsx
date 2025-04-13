"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useMemo, PropsWithChildren } from "react";

function ThemeProvider(props: PropsWithChildren<{}>) {
  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
        },
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: "#2196f3", // Blue
                light: "#64b5f6",
                dark: "#1976d2",
                contrastText: "#fff",
              },
              secondary: {
                main: "#ff9800", // Orange
                light: "#ffb74d",
                dark: "#f57c00",
                contrastText: "#000",
              },
              background: {
                default: "#f5f5f5",
                paper: "#ffffff",
              },
            },
          },
          dark: {
            palette: {
              primary: {
                main: "#90caf9", // Lighter blue for dark mode
                light: "#e3f2fd",
                dark: "#42a5f5",
                contrastText: "#000",
              },
              secondary: {
                main: "#ffb74d", // Lighter orange for dark mode
                light: "#ffe9ca",
                dark: "#f57c00",
                contrastText: "#000",
              },
              background: {
                default: "#121212",
                paper: "#1e1e1e",
              },
            },
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: "2.5rem",
            fontWeight: 500,
          },
          h2: {
            fontSize: "2rem",
            fontWeight: 500,
          },
          h3: {
            fontSize: "1.75rem",
            fontWeight: 500,
          },
          h4: {
            fontSize: "1.5rem",
            fontWeight: 500,
          },
          h5: {
            fontSize: "1.25rem",
            fontWeight: 500,
          },
          h6: {
            fontSize: "1rem",
            fontWeight: 500,
          },
          body1: {
            fontSize: "1rem",
          },
          body2: {
            fontSize: "0.875rem",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    []
  );

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default ThemeProvider;
