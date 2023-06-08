import { React, TopTech } from "@/assets";
import { Heading, StyledPara, TechTopSection } from "./elements";
import { Box, Container } from "@mui/material";
import { Dark, HeadFont, Padding, Primary } from "../../utils";

interface props {
  heroImage: string;
}

export const TechnologyHeroSection = ({ heroImage }: props) => {
  return (
    <Box sx={{ backgroundColor: "#f3f9fb" }}>
      <Container>
        <Heading>
          Let&#39;s discuss
          <span
            style={{ color: Primary, fontWeight: "bold", fontSize: HeadFont }}
          >
            &lt;/code&gt;
          </span>
        </Heading>
        <StyledPara sx={{ padding: Padding }}>
          Whether it&rsquo;s about turning your ideas into profitable software
          solutions or getting the gen-y gung-ho about your fun idea &ndash; We
          provide high quality, cost effective and reliable result oriented web
          applications to help you succeed in rapidly changing tech-driven
          markets.
        </StyledPara>
        <Box>
          <img
            src={heroImage}
            alt="image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
};
