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
  ContainerPadding,
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
      }}
    >
      <Container sx={{ padding: ContainerPadding }}>
        <SectionContent>
          <Typography
            sx={{
              fontSize: HeadFont,
              color: Primary,
              textAlign: "center",
            }}
            mb={2}
          >
            Sign Up for Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: SubFont,

              textAlign: "center",
            }}
            mb={2}
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
