import { Button, TextField, Container, Box, Typography } from "@mui/material";
import {
  DescriptionSection,
  SectionContainer,
  SectionContent,
  SubscribeSection,
  TitleSection,
} from "./elements";
import {
  Body,
  Dark,
  HeadFont,
  Margin,
  Padding,
  Primary,
  SubFont,
} from "../../utils";

export const SignUpForNewsletter = () => {
  return (
    <Box
      sx={{
        widt: "100%",
        margin: Margin,
        padding: Padding,
      }}
    >
      <Container>
        <SectionContent>
          <Typography
            sx={{
              margin: Margin,
              fontSize: HeadFont,
              color: Primary,
              textAlign: "center",
            }}
          >
            Sign Up for Newsletter
          </Typography>
          <Typography
            sx={{
              margin: Margin,
              fontSize: SubFont,

              textAlign: "center",
            }}
          >
            Join 70,000 subscribers & get original tips and tricks delivered to
            your inbox each month.
          </Typography>
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
