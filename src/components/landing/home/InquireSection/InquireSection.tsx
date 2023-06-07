import {
  TextField,
  Button,
  TextareaAutosize,
  Container,
  Typography,
  Box,
} from "@mui/material";
import {
  FormSection,
  InputsFirstRow,
  InputsSecondRow,
  SectionContainer,
  SectionTitle,
  StyledButton,
} from "./elements";
import { HeadFont, Padding, Secondary, SubFont } from "../../utils";

export const InquireSection = () => {
  return (
    <Container sx={{ background: "transparent", padding: Padding }}>
      <Box sx={{ background: "#113f67" }}>
        <SectionContainer>
          <Box>
            <Typography
              sx={{
                fontSize: HeadFont,
                textAlign: "center",
                padding: Padding,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Continuously and Systematically Evolve Your Product With Our
              Vetted Angular Developers
            </Typography>
            <Typography
              sx={{
                fontSize: SubFont,
                padding: Padding,
                textAlign: "center",
                color: "white",
              }}
            >
              We ensure you’re matched with the right talent resource based on
              your requirement.
            </Typography>
          </Box>
          <FormSection sx={{padding:Padding}}>
            <InputsFirstRow>
              <TextField
                sx={{ backgroundColor: "white" }}
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Your Name"
                variant="outlined"
              />

              <TextField
                sx={{ backgroundColor: "white" }}
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Email Address"
                variant="outlined"
              />
            </InputsFirstRow>
            <TextField
              sx={{ backgroundColor: "white" }}
              id="outlined-basic"
              style={{ width: "100%" }}
              label="Phone Number"
              variant="outlined"
            />

            <TextareaAutosize
              id="outlined-basic"
              placeholder="Your Message"
              minRows={7}
              style={{ fontSize: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: Padding,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#156380",
                  color: "white",
                }}
              >
                Inquire Now
              </Button>
            </Box>
          </FormSection>
        </SectionContainer>
      </Box>
    </Container>
  );
};
