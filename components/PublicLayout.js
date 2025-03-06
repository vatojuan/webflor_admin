import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

export default function PublicLayout({ children, toggleDarkMode, currentMode }) {
  const theme = createTheme({
    palette: {
      mode: currentMode,
      primary: { main: "#D96236", dark: "#B0482B" },
      secondary: { main: "#103B40" },
      background: { default: currentMode === "light" ? "#F2E6CE" : "#2B1B17", paper: currentMode === "light" ? "#FFFFFF" : "#3E2723" },
      text: { primary: currentMode === "light" ? "#3E2723" : "#FAD9CF" },
    },
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>FAP Mendoza</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
