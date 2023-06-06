import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

interface Types {
  image: string
}

export default function CardWithImage({image}:Types) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        padding: {
          xl: "2rem 0rem",
          lg: "1.8rem 0rem",
          md: "1.5rem 0rem",
          sm: "1.2rem 0rem",
          xs: "1rem 0rem",
        },
      }}
    >
      <CardActionArea sx={{ display: "inline-flex" }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small" color="primary">
          Find It
        </Button>
      </Box>
    </Card>
  );
}
