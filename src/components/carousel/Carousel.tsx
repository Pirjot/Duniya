import React from "react";
import { useTheme } from "@mui/material";
import BootstrapCarousel from 'react-bootstrap/Carousel';


export function Carousel() {
  const theme = useTheme();

  return (
      <BootstrapCarousel variant={theme.palette.mode == 'dark' ? 'light' : 'dark'}>
        {/*interval={4000}*/}
        <BootstrapCarousel.Item>
          <div
            style={{
              height: '400px',
              width: '100%'
            }}
          >
            Hello World
          </div>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <div
              style={{
                height: '400px',
                width: '100%'
              }}
          >
            Hello World
          </div>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <div
              style={{
                height: '400px',
                width: '100%'
              }}
          >
            Hello World
          </div>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
  );
}
