import * as React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { DuniyaAppBar } from "./components/root";
import { MainContent } from "./components/root";
import { Latest } from "./components/root";
import { Footer } from "./components/root";
import AppTheme from "./components/shared/mui/AppTheme";

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />

      <DuniyaAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </AppTheme>
  );
}

export default App;
