import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";

import { ServiceCard } from "./elements";
import { H2, H3, HeadFont, Para, Primary, SubFont } from "../utils";
import { ImageProps, StaticImageData } from "next/image";
import { Layout } from "../Layout/Layout";

interface props {
  heading: string;
  details: string;
  key: number;
  image: any;
}

export const Services = ({ heading, details, key, image }: props) => {
  return (
    <ServiceCard>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <H2 variant="h2" sx={{ color: Primary, textAlign: "left" }} mb={2}>
          {heading}
        </H2>
        <Avatar
          src={image}
          alt={`${image} image`}
          key={key}
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "0",
            border: "none",
          }}
        ></Avatar>
      </Box>
      <H3 variant="h3">{details}</H3>
    </ServiceCard>
  );
};
