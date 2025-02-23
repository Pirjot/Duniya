import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useLayoutEffect, useRef, useState } from "react";
import BootstrapCarousel from "react-bootstrap/Carousel";

function ActionAreaCard() {
  return (
    <Card sx={{ minWidth: 250, width: 250, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Carousel() {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setCarouselWidth(carouselRef.current?.element?.offsetWidth);
    };
    const observer = new ResizeObserver(handleResize);
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    handleResize();
    return () => {
      observer.disconnect();
    };
  }, []);

  const child = (
    <Stack className={"carousel-item-child"} direction={"row"}>
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
    </Stack>
  );

  const bootstrapCarouselItems: React.ReactElement[] = [
    <BootstrapCarousel.Item>{child}</BootstrapCarousel.Item>,
  ];

  // Should fit minimum of two children to look good
  const controlSizePixels = 50;
  const parentGapPixels = 20;
  const childMinWidthPixels = 250;

  let numChildrenPerCarouselItem = 2;
  while (
    ++numChildrenPerCarouselItem * (childMinWidthPixels + parentGapPixels) <
    carouselWidth - 2 * controlSizePixels
  );
  numChildrenPerCarouselItem--;

  bootstrapCarouselItems.push(
    <BootstrapCarousel.Item>
      <Stack
        className={"carousel-item-child"}
        direction={"row"}
        alignContent={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </Stack>
    </BootstrapCarousel.Item>
  );

  return (
    <div ref={carouselRef}>
      <BootstrapCarousel
        style={{ height: "300px" }}
        interval={null}
        wrap={true}
        indicators={false}
        variant={theme.palette.mode === "dark" ? "light" : "dark"}
        ref={carouselRef}
      >
        {bootstrapCarouselItems}
      </BootstrapCarousel>
    </div>
  );
}
