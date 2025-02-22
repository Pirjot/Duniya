import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import "./App.css";
import { Duniya } from "./components/duniya";
import { DuniyaAppBar, Footer } from "./components/root";
import { Header } from "./components/root/Header";
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Header></Header>
          <Duniya></Duniya>
        </Box>
      </Container>
      <Footer />
    </AppTheme>
  );
}

export default App;
