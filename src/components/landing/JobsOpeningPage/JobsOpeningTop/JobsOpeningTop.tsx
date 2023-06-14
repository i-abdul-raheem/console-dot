import Image from "next/image";
import { SeeOpeningTopImage } from "@/assets";
import {
  JobsTopContainer,
  JobsTopHeading,
  JobsTopPara,
  LeftFlex,
  RightFlex,
} from "./elements";
import { Container, Box, Typography } from "@mui/material";
import { Dark, H1, H3, HeadFont, Para, Primary } from "../../utils";
export const JobsOpeningTop = () => {
  return (
    <>
      <JobsTopContainer>
        <Container>
          <Box
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              width: "100%",
              display: "flex",
            }}
          >
            <LeftFlex>
              <H1
                mb={5}
                variant="h1"
                sx={{
                  color:'white',
                  lineHeight: "50px",
                }}
              >
                Kick-start Your Journey with ConsoleDot
              </H1>
              <H3
              variant="h3"
                sx={{ color: "#eee", }}
              >
                Open Doors To New Opportunities In Your Career, We are looking
                for enthusiasts who would welcome change with both their arms
                wide open. And that’s how we along with you will bring a
                transformation in the world. Find out the roles that are we are
                currently open for:
              </H3>
            </LeftFlex>

            <RightFlex>
              <Image
                src={SeeOpeningTopImage}
                alt="Image"
                width={451}
                height={473}
                style={{ width: "auto", height: "auto" }}
              />
            </RightFlex>
          </Box>
        </Container>
      </JobsTopContainer>
    </>
  );
};
