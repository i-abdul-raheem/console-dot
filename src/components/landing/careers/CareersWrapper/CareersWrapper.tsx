import { Body, Wrapper } from "../../utils";
import { CareersTopPage } from "../CareersTopPage";
import { ConsoleDotWarriorsReview } from "../ConsoleDotWarriorsReview";
import { EventsLifeEmp } from "../EventsLifeEmp";
import { FollowUsOn } from "../FollowUsOn";
import { SignUpForNewsletter } from "../SignUpForNewsletter";
import { WorkWithUs } from "../WorkWithUs";
import { WorkingAtConsoleDot } from "../WorkingAtConsoleDot";
import { Box } from "@mui/material";

export const CareersWrapper = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <CareersTopPage />
      </Box>

      <Box sx={{ backgroundColor: Body }}>
        <SignUpForNewsletter />
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <FollowUsOn />
      </Box>
    </>
  );
};
