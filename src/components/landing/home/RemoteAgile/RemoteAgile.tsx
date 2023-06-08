import { Box, Button, Container, Typography } from "@mui/material";
import { Body, Dark, HeadFont, Padding, Primary, Wrapper } from "../../utils";
import { ContentContainer, TitleSection, TopContent } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const RemoteAgile = () => {
  return (
    <Box sx={{ backgroundColor: "#f3f9fb", padding: Padding, color: "black" }}>
      <Container style={{}}>
        <TopContent>
          <Typography sx={{ fontSize: HeadFont, color: Primary }}>
            The Convenience of Offshoring is the Flexibility of Remote Agile.
          </Typography>

          <TitleSection>
            Collaborate with a passionate team of designers, developers, and
            strategists to stand-out from the crowd and shine brighter.
          </TitleSection>
        </TopContent>
        <ContentContainer sx={{ paddingTop: "2rem" }}>
          <div style={{ padding: "1rem 2rem", border: "1px solid Primary" }}>
            <h5 style={{ color: Dark }}>EXPERIENCES</h5>
            <Typography sx={{ fontSize: HeadFont, color: Primary }}>
              Agile Mindset
            </Typography>
            <StyledText style={{ textAlign: "start", paddingBottom: "10px" }}>
              Agile is not a principal or a method, but it’s an integral part of
              being Agile that is guided by principles, defined by values and
              manifested through various practices.
            </StyledText>
            <Button
              style={{
                backgroundColor: Dark,
                color: "white",
                display: "flex",
              }}
            >
              DISCOVER
            </Button>
          </div>
          <div style={{ padding: "1rem 2rem", border: "1px solid Primary "}}>
            <h5 style={{ color: Dark }}>IMPORTANCE</h5>
            <Typography sx={{ fontSize: HeadFont, color: Primary }}>
              Consoledot Values
            </Typography>
            <StyledText style={{ textAlign: "start", paddingBottom: "10px" }}>
              You add value to your customer when you deliver a product or
              service (and the associated brand experience) that has been
              designed specifically to solve their problem.
            </StyledText>
            <Button
              style={{ backgroundColor: Dark, color: "white" }}
            >
              DISCOVER
            </Button>
          </div>
          <div style={{ padding: "1rem 2rem", border: "1px solid Primary" }}>
            <h5 style={{ color: Dark }}>MINDSET</h5>
            <Typography sx={{ fontSize: HeadFont, color: Primary }}>
              Consoledot Culture
            </Typography>
            <StyledText style={{ textAlign: "start", paddingBottom: "10px" }}>
              Core Team will work as Scrum Team where Team will have quarterly
              goal to make sure that we run financial, administrative and
              project management prospective.
            </StyledText>
            <Button
              style={{ backgroundColor: Dark, color: "white" }}
            >
              DISCOVER
            </Button>
          </div>
        </ContentContainer>
      </Container>
    </Box>
  );
};
