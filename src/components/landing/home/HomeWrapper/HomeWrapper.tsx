import { Box } from "@mui/material";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Layout } from "../../Layout/Layout";
import { AboutUs } from "../AboutUs";
import { CccSection } from "../CccSection";
import { DigitalTransformation } from "../DigitalTransformation";

import { HomePage } from "../HomePage";
import { InquireSection } from "../InquireSection";
import { ReasonWhyWeBest } from "../ReasonWhyWeBest";
import { RemoteAgile } from "../RemoteAgile";
import { RightPanel } from "../RightPanel";

export const HomeWrapper = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: 999,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            width: {
              xl: "100%",
              lg: "100%",
              md: "100%",
              sm: "auto",
              xs: "auto",
            },
          }}
        >
          {<Header />}
        </Box>
      </div>

      <HomePage />
      <AboutUs />
      <CccSection />
      <DigitalTransformation />
      <ReasonWhyWeBest />
      <RemoteAgile />
      <InquireSection />
      <Footer />
    </div>
  );
};
