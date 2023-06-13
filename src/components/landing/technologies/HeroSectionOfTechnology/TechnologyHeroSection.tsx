import { React, TopTech } from "@/assets";
import { Heading, StyledPara, TechTopSection } from "./elements";
import { Box, Container } from "@mui/material";
import {
  Body,
  Dark,
  HeadFont,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
} from "../../utils";
import { Typography } from "@mui/material";
interface props {
  heroImage: string;
}

export const TechnologyHeroSection = ({ heroImage }: props) => {
  return (
    <Box sx={{ backgroundColor: Body }}>
      <Container>
        <Box sx={{ padding: Padding, margin: Margin }}>
          <Typography sx={{ fontSize: SubFont }}>
            Let&#39;s discuss
            <span
              style={{ color: Primary, fontWeight: "bold", fontSize: HeadFont }}
            >
              &lt;/code&gt;
            </span>
          </Typography>
          <Typography sx={{ padding: Padding, fontSize: Para }}>
            Whether it&rsquo;s about turning your ideas into profitable software
            solutions or getting the gen-y gung-ho about your fun idea &ndash;
            We provide high quality, cost effective and reliable result oriented
            web applications to help you succeed in rapidly changing tech-driven
            markets.
          </Typography>
          <Box>
            <img
              src={heroImage}
              alt="image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
