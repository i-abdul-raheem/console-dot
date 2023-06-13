import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Primary, SubFont } from "../utils";

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
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Typography sx={{ color: Primary, fontSize: SubFont }}>
          Total Team Members
        </Typography>
        <Typography variant="body2">
          <li>
            {bull} {members}
          </li>
        </Typography>
      </CardContent>
    </Card>
  );
};
