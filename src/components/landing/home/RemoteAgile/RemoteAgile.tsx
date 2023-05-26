import { Button } from "@mui/material";
import { Wrapper } from "../../utils";
import { ContentContainer, TitleSection, TopContent } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const RemoteAgile = () => {
  return (
    <>
      <div style={{ }}>
        <TopContent>
          <TitleSection style={{ fontSize: "25px", fontWeight: "bold" }}>
            The Convenience of Offshoring is the Flexibility of Remote Agile.
          </TitleSection>

          <TitleSection>
            Collaborate with a passionate team of designers, developers, and
            strategists to stand-out from the crowd and shine brighter.
          </TitleSection>
        </TopContent>
        <ContentContainer>
          <div>
            <h5 style={{ color: "rgb(23 , 96 , 128 )" }}>EXPERIENCES</h5>
            <h2>Agile Mindset</h2>
            <StyledText style={{textAlign:"start", paddingBottom:"10px"}}>
              Agile is not a principal or a method, but it’s an integral part of
              being Agile that is guided by principles, defined by values and
              manifested through various practices.
            </StyledText>
            <Button
              style={{
                backgroundColor: "rgb(23 , 96 , 128 )",
                color: "white",
                display: "flex",
              }}
            >
              DISCOVER
            </Button>
          </div>
          <div>
            <h5 style={{ color: "rgb(23 , 96 , 128 )" }}>IMPORTANCE</h5>
            <h2>Bacancy Values</h2>
            <StyledText style={{textAlign:"start",paddingBottom:"10px"}}>
              You add value to your customer when you deliver a product or
              service (and the associated brand experience) that has been
              designed specifically to solve their problem.
              </StyledText>
            <Button
              style={{ backgroundColor: "rgb(23 , 96 , 128 )", color: "white" }}
            >
              DISCOVER
            </Button>
          </div>
          <div>
            <h5 style={{ color: "rgb(23 , 96 , 128 )" }}>MINDSET</h5>
            <h2>Bacancy Cultures</h2>
            <StyledText style={{textAlign:"start",paddingBottom:"10px"}}>
              Core Team will work as Scrum Team where Team will have quarterly
              goal to make sure that we run financial, administrative and
              project management prospective.
              </StyledText>
            <Button
              style={{ backgroundColor: "rgb(23 , 96 , 128 )", color: "white" }}
            >
              DISCOVER
            </Button>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};
