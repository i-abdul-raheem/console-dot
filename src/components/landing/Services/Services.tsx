import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";

import { ServiceCard } from "./elements";
import { HeadFont, Para, Primary, SubFont } from "../utils";
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
        <Typography
          sx={{ fontSize: SubFont, color: Primary, textAlign: "left" }}
        >
          {heading}
        </Typography>
        <Avatar
          src={image}
          alt={`${image} image`}
          key={key}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "0",
            border: "none",
          }}
        ></Avatar>
      </Box>
      <Typography sx={{ fontSize: Para }}>{details}</Typography>
    </ServiceCard>
  );
};
