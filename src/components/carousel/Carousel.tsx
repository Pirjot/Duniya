import React from "react";
import Box from "@mui/material/Box";

export function Carousel() {
  // TODO: Follow from here: https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        minHeight: "300px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      }}
    >
      <p>Hello World. I am a carousel.</p>
      <p>Hello World. I am a carousel.</p>
      <p>Hello World. I am a carousel.</p>
    </Box>
  );
}
