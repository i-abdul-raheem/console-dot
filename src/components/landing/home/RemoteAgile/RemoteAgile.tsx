import { Box, Button, Container, Typography } from "@mui/material";
import {
  Body,
  ButtonPadding,
  ContainerPadding,
  Dark,
  H1,
  H2,
  H3,
  HeadFont,
  Padding,
  Primary,
  Wrapper,
} from "../../utils";
import { ContentContainer, TitleSection, TopContent } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const RemoteAgile = () => {
  return (
    <Box sx={{ backgroundColor: Body, color: "black" }}>
      <Container style={{ padding: ContainerPadding }}>
        <TopContent>
          <H1 variant="h1" sx={{ color: Primary, textAlign: "center" }} mb={2}>
            The Convenience of Offshoring is the Flexibility of Remote Agile.
          </H1>

          <H2 variant="h2" sx={{ textAlign: "center" }}>
            Collaborate with a passionate team of designers, developers, and
            strategists to stand-out from the crowd and shine brighter.
          </H2>
        </TopContent>
        <ContentContainer sx={{ padding: ContainerPadding }}>
          <div style={{ border: "1px solid Primary" }}>
            <H2 variant="h2" sx={{ color: Dark }} mb={2}>
              EXPERIENCES
            </H2>
            <H1 variant="h1" sx={{ color: Primary }} mb={2}>
              Agile Mindset
            </H1>
            <H3 variant="h3" sx={{ textAlign: "start" }} mb={2}>
              Agile is not a principal or a method, but it’s an integral part of
              being Agile that is guided by principles, defined by values and
              manifested through various practices.
            </H3>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: Dark,
                color: "white",
                display: "flex",
                padding: ButtonPadding,
                "&:hover": {
                  color: Dark,
                },
              }}
            >
              DISCOVER
            </Button>
          </div>

          <div style={{ border: "1px solid Primary" }}>
            <H2 variant="h2" sx={{ color: Dark }} mb={2}>
              IMPORTANCE
            </H2>
            <H1 variant="h1" sx={{ color: Primary }} mb={2}>
              ConsoleDot Values
            </H1>
            <H3 variant="h3" sx={{ textAlign: "start" }} mb={2}>
              You add value to your customer when you deliver a product or
              service (and the associated brand experience) that has been
              designed specifically to solve their problem.
            </H3>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: Dark,
                color: "white",
                display: "flex",
                padding: ButtonPadding,
                "&:hover": {
                  color: Dark,
                },
              }}
            >
              DISCOVER
            </Button>
          </div>
          <div style={{ border: "1px solid Primary" }}>
            <H2 variant="h2" sx={{ color: Dark }} mb={2}>
              MINDSET
            </H2>
            <H1 variant="h1" sx={{ color: Primary }} mb={2}>
              ConsoleDot Culture
            </H1>
            <H3 variant="h3" sx={{ textAlign: "start" }} mb={2}>
              Core Team will work as Scrum Team where Team will have quarterly
              goal to make sure that we run financial, administrative and
              project management prospective.
            </H3>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: Dark,
                color: "white",
                display: "flex",
                padding: ButtonPadding,
                "&:hover": {
                  color: Dark,
                },
              }}
            >
              DISCOVER
            </Button>
          </div>
          {/* end */}
        </ContentContainer>
      </Container>
    </Box>
  );
};
