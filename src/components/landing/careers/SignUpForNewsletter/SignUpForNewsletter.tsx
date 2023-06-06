import { Button, TextField, Container, Box } from "@mui/material";
import {
  DescriptionSection,
  SectionContainer,
  SectionContent,
  SubscribeSection,
  TitleSection,
} from "./elements";
import { Body, Dark, Primary } from "../../utils";

export const SignUpForNewsletter = () => {
  return (
    <Box sx={{ widt: "100%", backgroundColor: Body, color: "black" }}>
      <Container>
        <SectionContent>
          <TitleSection style={{ marginBottom: "20px" }}>
            Sign Up for Newsletter
          </TitleSection>
          <DescriptionSection style={{ marginBottom: "20px" }}>
            Join 70,000 subscribers & get original tips and tricks delivered to
            your inbox each month.
          </DescriptionSection>
          <SubscribeSection>
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: Dark,
                color: "white",
                "&:hover": {
                  backgroundColor: Primary,
                  color: "white",
                },
              }}
            >
              Subscribe
            </Button>
          </SubscribeSection>
        </SectionContent>
      </Container>
    </Box>
  );
};
