import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dark, Primary } from "../utils";

interface props {
  title: string;
  image: string;
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
    <Card sx={{ width: 300 }}>
      <img
        src={`https://api.consoledot.com/file/${image}`}
        alt="image"
        style={{ width: "150px", height: "140px", borderRadius: "10px" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: Primary }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: "10px",
            color: "white",
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
