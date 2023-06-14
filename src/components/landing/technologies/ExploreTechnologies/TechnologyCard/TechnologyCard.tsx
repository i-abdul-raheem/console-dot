import { clock } from "@/assets";
import { Dark, Primary, Secondary } from "@/components/landing/utils";
import { Box, Container, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
interface props {
  title: string;
  image: string | null;
  member: number;
  time: string;
}

export const TechnologyCard = ({ title, image, member, time }: props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          marginRight: "10px",
          marginBottom: "10px",
          // border: "1px solid gray",
          borderRadius: "50%",
          // backgroundColor: "#005fa5",
          transition: "box-shadow 0.3s",
          cursor: "pointer",
          position: "relative",
          

          "&:hover": {
            // boxShadow: "0px 3px 3px 2px rgba(0, 0, 0, 0.5)",
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
          },
          "&:hover > .MuiAvatar-root": {
            width: "100%",
            height: "100%",
            transition: "0.6s",
          },

          "&:hover p": {
            transition: "0.6s",
            color: "white",
          },

          "&:hover img": {
            transform: "scale(1.5)",
          },
        }}
      >
        <Avatar
          sx={{
            width: "150px",
            borderRadius: "50%",
            height: "150px",
            transition: "0.6s",
            "&:hover": { width: "100%", height: "100%", transition: "0.6s" },
          }}
        >
          <Image
            width={150}
            height={150}
            src={`${
              image ? `https://api.consoledot.com/file/${image}` : clock.src
            }`}
            alt={`${title} image`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "transparent",
              transition: "transform 0.5s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Avatar>
        <Box>
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              position: "absolute",
              bottom: "16px",
              textAlign: "center",
              left: 0,
              display: "block",
              width: "100%",
              transition: "0.6s",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              paddingTop: "5px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {member}
          </Typography>
          <Typography
            sx={{
              paddingTop: "10px",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
