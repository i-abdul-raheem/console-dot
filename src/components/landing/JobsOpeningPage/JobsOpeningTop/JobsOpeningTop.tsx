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
import { HeadFont, Para, Primary } from "../../utils";
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
                sm: "row",
                xs: "row",
              },
              width: "100%",
              display: "flex",
            }}
          >
            <LeftFlex>
              <Typography
                sx={{
                  color: Primary,
                  fontSize: HeadFont,
                  lineHeight: "50px",
                }}
              >
                Kick-start Your Journey with ConsoleDot
              </Typography>
              <Typography
                sx={{ color: "rgb(23 , 96 , 128 ,0.5)", fontSize: Para }}
              >
                Open Doors To New Opportunities In Your Career, We are looking
                for enthusiasts who would welcome change with both their arms
                wide open. And that’s how we along with you will bring a
                transformation in the world. Find out the roles that are we are
                currently open for:
              </Typography>
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
