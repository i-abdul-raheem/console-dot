import { ClientListDivs, ClientListSection, DescriptionSection, FortuneButton, FortuneContainer, Heading } from "./elements";

export const FortuneClients = () => {
  return (
    <>
      <FortuneContainer>
        <Heading>
          Fortune-500 Clients
        </Heading>
        <DescriptionSection >
          
            The path to empower startups and serial entrepreneurs with
            360°actions start here. We are trusted by the world’s greatest
            leaders since 2011.
          
        </DescriptionSection>
        <FortuneButton>
          CLIENTELE
        </FortuneButton>
      

      <ClientListSection>
        <ClientListDivs>
          <Heading>Americas</Heading>
          </ClientListDivs>
        <ClientListDivs>
          <div style={{}}>
            <Heading>EMEA</Heading>
          </div>
          </ClientListDivs>
        <ClientListDivs style={{borderRight:'none'}}>
          <div>
            <Heading>APAC</Heading>
          </div>
          </ClientListDivs>
      </ClientListSection> 
      </FortuneContainer>
      </>
  );
};
