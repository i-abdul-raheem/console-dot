import { React, TopTech } from "@/assets";
import { Heading, StyledPara, TechTopSection } from "./elements";
import { Box, Container } from "@mui/material";
import {
  Body,
  Dark,
  H1,
  H2,
  H3,
  HeadFont,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
} from "../../utils";
import { Typography } from "@mui/material";
import Image from "next/image";
interface props {
  heroImage: string;
}

export const TechnologyHeroSection = ({ heroImage }: props) => {
  return (
    <Box sx={{ backgroundColor: Body }}>
      <Container>
        <Box sx={{ padding: Padding }}>
          <H1 variant="h1" mb={2}>
            Let&#39;s discuss
            <span
              style={{ color: Primary, fontWeight: "bold", fontSize: HeadFont }}
            >
              &lt;/code&gt;
            </span>
          </H1>
          <H3 variant="h3" mb={2}>
            Whether it&rsquo;s about turning your ideas into profitable software
            solutions or getting the gen-y gung-ho about your fun idea &ndash;
            We provide high quality&lsquo; cost effective and reliable result
            oriented web applications to help you succeed in rapidly changing
            tech-driven markets.
          </H3>
          <Box>
            <Image
              width={1400}
              height={100}
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
