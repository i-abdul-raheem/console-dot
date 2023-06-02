import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const styles = {
  card: {
    maxWidth: 345,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  media: {
    height: 140,
  },
};

export const CardWithBackground = () => {
  return (
    <Card sx={styles.card}>
      <CardActionArea sx={{ display: "inline-flex" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body1" color="text.primary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
