import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const styles = {
  card: {
    maxWidth: 300,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')",
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
            BackGround Image
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
