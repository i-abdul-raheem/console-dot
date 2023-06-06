import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

import { ServiceCard } from "./elements";
import { HeadFont, SubFont } from "../utils";

interface props {
  heading: string;
  details: string;
  index: number;
}

export const Services = ({ heading, details, index }: props) => {
  return (
    <ServiceCard>
      <Typography sx={{ fontSize: HeadFont }}>
        {index}
        {heading}
      </Typography>
      <Typography sx={{ fontSize: SubFont }}>{details}</Typography>
    </ServiceCard>
  );
};
