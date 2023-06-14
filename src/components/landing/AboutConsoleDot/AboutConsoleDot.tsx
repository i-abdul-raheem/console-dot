import { Box } from "@mui/material";
import { EventsLifeEmp, FollowUsOn, WorkingAtConsoleDot } from "../careers";
import { Layout } from "../Layout/Layout";


export const AboutConcoleDot = () => {
  return (
    <>
      <Layout>
        <Box>
          <EventsLifeEmp />
        </Box>
        <Box>
          <WorkingAtConsoleDot />
        </Box>
        <Box>
          <FollowUsOn />
        </Box>
        <Box >
          {/* <AboutConsoleSlider /> */}
        </Box>
      </Layout>
    </>
  );
};
