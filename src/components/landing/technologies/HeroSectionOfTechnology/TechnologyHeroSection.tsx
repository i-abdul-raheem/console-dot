import { React } from "@/assets";

import { Box, Container } from "@mui/material";
import { Body, H1, H2, H3, Padding, Primary } from "../../utils";
import Image from "next/image";
interface props {
  heroImage: any;
}

export const TechnologyHeroSection = ({ heroImage }: props) => {
  return (
    <Box sx={{ backgroundColor: Body }}>
      <Container>
        <Box sx={{ padding: Padding }}>
          <H1 variant="h1" mb={2}>
            Let&#39;s discuss
          </H1>
          <H2 variant="h2" sx={{ color: Primary }}>
            &lt;/code&gt;
          </H2>

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
              src={heroImage.src}
              alt="image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
