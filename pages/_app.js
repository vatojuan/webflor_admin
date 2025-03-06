// pages/_app.js
import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// 🔴 Importar NoSsr
import NoSsr from "@mui/material/NoSsr";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // 🔴 QUITA useMediaQuery para evitar SSR y usa un efecto manual si quieres modo oscuro automático
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("colorMode");
    if (storedMode) {
      setMode(storedMode);
    } else {
      // Aquí podrías detectar "dark mode" si deseas
      // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // setMode(prefersDark ? "dark" : "light");
      setMode("light");
    }
  }, []);

  const toggleDarkMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("colorMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // ...
        },
        typography: {
          fontFamily: "'Bodoni Moda', serif",
        },
      }),
    [mode]
  );

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>FAP Mendoza</title>
      </Head>
      {/* 🔴 Envuelve tu App en <NoSsr> si deseas asegurar cero SSR en MUI */}
      <NoSsr>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} toggleDarkMode={toggleDarkMode} currentMode={mode} />
        </ThemeProvider>
      </NoSsr>
    </>
  );
}
