import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonPadding, Dark, H1, H2, H3, Primary } from "../utils";


interface props {
  title: string;
  image: any;
  explanation: string;
  placeholder: string;
  onClick: any;
}

export default function MediaCard({
  title,
  image,
  explanation,
  placeholder,
  onClick,
}: props) {
  return (
    <Card sx={{ width: 300, height: "auto", mb: 3 }}>
      <CardMedia
        sx={{
          height: 140,
          width: "100%",
        }}
        image={image?.src || `https://api.consoledot.com/file/${image}`}
        title={image}
      />
      <CardContent>
        <H2 gutterBottom variant="h2" sx={{ color: Primary }}>
          {title}
        </H2>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: "10px",
            color: "white",
            padding: ButtonPadding,
            backgroundColor: Primary,
            "&:hover": {
              backgroundColor: Dark,
            },
          }}
          onClick={onClick}
        >
          {placeholder}
        </Button>
      </CardActions>
    </Card>
  );
}
