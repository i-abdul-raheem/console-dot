import { Container, Button } from "@mui/material";
import { FullPage, Wrapper } from "../../utils";
import {
  ClientListDivs,
  ClientListSection,
  DescriptionSection,
  FortuneButton,
  FortuneContainer,
  Heading,
} from "./elements";

export const FortuneClients = () => {
  return (
    <Container>
      <FortuneContainer>
        <Heading>Fortune-500 Clients</Heading>
        <DescriptionSection>
          The path to empower startups and serial entrepreneurs with 360°actions
          start here. We are trusted by the world’s greatest leaders since 2011.
        </DescriptionSection>

        <Button variant="outlined" sx={{ width: "auto" }}>
          CLIENTELE
        </Button>

        <ClientListSection>
          <ClientListDivs>
            <Heading>Americas</Heading>
          </ClientListDivs>
          <ClientListDivs>
            <div style={{}}>
              <Heading>EMEA</Heading>
            </div>
          </ClientListDivs>
          <ClientListDivs style={{ borderRight: "none" }}>
            <div>
              <Heading>APAC</Heading>
            </div>
          </ClientListDivs>
        </ClientListSection>
      </FortuneContainer>
    </Container>
  );
};
