import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Primary } from "../utils";

interface props {
  title: string;
  image: string;
  explanation: string;
  placeholder: string;
}

export default function MediaCard({
  title,
  image,
  explanation,
  placeholder,
}: props) {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80s"
        title="green iguana"
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
          sx={{ backgroundColor: Primary }}
        >
          {placeholder}
        </Button>
      </CardActions>
    </Card>
  );
}
