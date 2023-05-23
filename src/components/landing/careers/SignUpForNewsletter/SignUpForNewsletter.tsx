import { Button, TextField } from "@mui/material";
import {
  DescriptionSection,
  SectionContainer,
  SectionContent,
  SubscribeSection,
  TitleSection,
} from "./elements";

export const SignUpForNewsletter = () => {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <TitleSection style={{marginBottom:"20px"}}>Sign Up for Newsletter</TitleSection>
          <DescriptionSection style={{marginBottom:"20px"}}>
            Join 70,000 subscribers & get original tips and tricks delivered to
            your inbox each month.
          </DescriptionSection>
          <SubscribeSection>
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
            />
            <Button variant="contained" style={{color:""}}>Subscribe</Button>
            </SubscribeSection>
        </SectionContent>
      </SectionContainer>
    </>
  );
};
