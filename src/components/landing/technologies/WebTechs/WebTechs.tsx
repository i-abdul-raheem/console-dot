import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

import { HeadFont, Padding, SubFont } from "../../utils";
import { SingleCard } from "./elements";

interface props {
  heading: string;
  details: string;
}

export const CardSingle = ({ heading, details }: props) => {
  return (
    <SingleCard>
      <Typography sx={{ fontSize: HeadFont }}>{heading}</Typography>
      <Typography sx={{ fontSize: SubFont }}>{details}</Typography>
    </SingleCard>
  );
};

export const tech = [
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.S",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ap",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.nd",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.e JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
];

export const WebTechs = () => {
  const [isPositionFixed, setIsPositionFixed] = useState(false);
  const fixedElementRef = useRef<any>(null);
  let scrollTop = null;
  if (fixedElementRef && fixedElementRef.current) {
    scrollTop = fixedElementRef.current.scrollTop;
    console.log(scrollTop, "in if ");
  }
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop, "in handle");
    if (scrollTop > 900) {
      setIsPositionFixed(false);
    }

    if (scrollTop > 7200) {
      setIsPositionFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fixedElementStyle = {
    position: isPositionFixed ? "fixed" : "static",
    top: "0px",
    backgroundColor: isPositionFixed ? "red" : "white",
  };

  return (
    <Box sx={{ backgroundColor: "#e2f1ff" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            padding: Padding,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Box>
              {tech.map((item, index) => (
                <CardSingle
                  key={index}
                  heading={item.heading}
                  details={item.details}
                />
              ))}
            </Box>
          </Box>
          <Box
            ref={fixedElementRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
              ...fixedElementStyle,
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>
              ReactJS Development Services Where Front-end Evolution Begins
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              We are pioneers in building high-octane web applications with
              proven skills in React JS development services. Hire React
              developers with versatile skills aligning with your business
              requirements. We thrive on fulfilling our clients' core
              objectives, and it has always been our firm endeavor to deliver
              the most prudent React development solutions best suited for your
              business.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
