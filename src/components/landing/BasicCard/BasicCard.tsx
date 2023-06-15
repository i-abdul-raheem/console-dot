import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { H2, Para, Primary, SubFont } from "../utils";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const BasicCard = ({ members }: any) => {
  return (
    <Card
      sx={{
        width: 200,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        transition: "0.3s all ease-in-out",
        "&:hover": {
          scale: "1.1",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <H2 variant="h2" sx={{ color: Primary, mb: 3 }}>
          Team Members
        </H2>
        <Typography variant="h3">
          <li style={{ listStyle: "none", fontSize: 40 }}>{members}</li>
        </Typography>
      </CardContent>
    </Card>
  );
};
